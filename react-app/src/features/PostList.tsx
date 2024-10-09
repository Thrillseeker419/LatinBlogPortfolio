import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  selectAllPosts,
  selectPostsStatus,
  selectPostsError,
  fetchPosts,
} from "./../redux/postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { AuthorData, AvatarFallbackUrl } from "./PostData";
import { BallTriangle, useLoading } from "@agney/react-loading";
import { AuthorJoin } from "../utils/authorJoin";
import { CapitalizeFirstLetter, MakeTitle } from "../utils/stringFormatters";

const PostsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  let pageNumber = searchParams.get("pageNumber");
  let pageSize = searchParams.get("pageSize");
  let searchTerms = searchParams.get("searchTerms");

  let searchTermsArray = searchTerms
    ? searchTerms
        .split(" ")
        .filter(function (entry) {
          return entry.trim() != "";
        })
        .map((element) => {
          return element.trim();
        })
    : [];

  const [searchTermsInput, setSearchTermsInput] = useState(
    searchTerms ? searchTerms : ""
  );

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const { containerProps, indicatorEl } = useLoading({
    loading: postsStatus === "loading",
    indicator: <BallTriangle />,
  });
  const postsError = useSelector(selectPostsError);

  let postsAndAuthors = (posts && AuthorJoin(posts, AuthorData)) || [];

  let pageNumberNumber = pageNumber ? (Number(pageNumber) as number) : 1;
  let pageSize2 = pageSize ? (Number(pageSize) as number) : 10;
  postsAndAuthors = postsAndAuthors.sort(function (a: any, b: any) {
    return a.title.localeCompare(b.title);
  });

  if (searchTermsArray.length > 0 && postsAndAuthors.length > 0) {
    postsAndAuthors = postsAndAuthors.filter(
      (post: any) =>
        post.title
          .toLowerCase()
          .split(" ")
          .some((r: string) => searchTermsArray.indexOf(r) >= 0) ||
        post.body
          .toLowerCase()
          .split(" ")
          .some((r: string) => searchTermsArray.indexOf(r) >= 0) ||
        post.authorInfo.name
          .toLowerCase()
          .split(" ")
          .some((r: string) => searchTermsArray.indexOf(r) >= 0) ||
        post.authorInfo.company.name
          .toLowerCase()
          .split(" ")
          .some((r: string) => searchTermsArray.indexOf(r) >= 0)
    );
  }

  let pagedInfo = paginate(postsAndAuthors, pageSize2, pageNumberNumber);

  let postsAndAuthorsPage = pagedInfo.page;

  function buildPageNumberRange(
    pageNumber: number,
    pageSize: number,
    totalPages: number
  ) {
    let res = [] as Array<number>;
    let pn = pageNumber;
    let pageScope = pageNumber < totalPages ? 4 : 5;

    while (pn > 0 && pageScope > 0) {
      res.push(pn);
      pn--;
      pageScope--;
    }
    let pn2 = pageNumber + 1;
    if (pageNumber < totalPages) {
      pageScope++;
    }
    while (pn2 <= totalPages && pageScope > 0) {
      res.push(pn2);
      pn2++;
      pageScope--;
    }
    return res.sort(function (a: number, b: number) {
      return a - b;
    });
  }
  function paginate(
    array: Array<any>,
    page_size: number,
    page_number: number
  ): any {
    //input cleaning
    let len = array.length;
    let size = 10;
    let pageCount = Math.ceil(len / size);
    let page = 1;
    size = parseInt(page_size.toString());
    page = parseInt(page_number.toString());
    if (size < 1) {
      size = 1;
    }
    if (page < 1) {
      page = 1;
    }
    let pagedInfo = {
      page: [] as Array<any>,
      pageNumber: page,
      pageSize: size,
      totalPages: pageCount,
      visiblePages: buildPageNumberRange(page, size, pageCount),
    };
    pagedInfo.page = array.slice((page - 1) * size, page * size);
    return pagedInfo;
  }
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      navigate(
        "/LatinBlogPortfolio/Posts" +
          "?pageNumber=" +
          1 +
          "&pageSize=" +
          pageSize2 +
          "&searchTerms=" +
          searchTermsInput
      );
    }
  };

  useEffect(() => {
    document.title = "Search Posts";
  }, []);
  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  return (
    <section>
      <div className="loader-wrapper" {...containerProps}>
        {indicatorEl}
      </div>

      {postsStatus === "succeeded" ? (
        <div className="center-it">
          <div className="ui search-bar-container segment">
            <div className="ui  transparent icon input">
              <Link
                className="create-post-link ui compact icon green button"
                title="Create new post"
                aria-label="Create new post"
                to={{
                  pathname: "/LatinBlogPortfolio/Posts/Create",
                  search: "?userId=" + 2,
                }}
              >
                <i className="plus icon" style={{ width: "100%" }}>
                  {" "}
                  Create
                </i>
              </Link>
              <input
                value={searchTermsInput}
                onChange={(e) => setSearchTermsInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="search-bar-input"
                type="text"
                aria-label="Search text"
                placeholder="Search posts..."
                style={{ marginRight: "20px" }}
              />
              <Link
                className="post-search-button"
                title="Search"
                aria-label="Search"
                to={{
                  pathname: "/LatinBlogPortfolio/Posts",
                  search:
                    "?pageNumber=" +
                    1 +
                    "&pageSize=" +
                    pageSize2 +
                    "&searchTerms=" +
                    searchTermsInput,
                }}
              >
                <i className="search link icon"></i>
              </Link>
            </div>
          </div>

          {postsAndAuthorsPage.length === 0 ? (
            <div className="no-posts-found">No posts found.</div>
          ) : postsAndAuthorsPage.map(
            (post: any) =>
              post.status === "created" && (
                <Link
                  key={nanoid()}
                  to={`/LatinBlogPortfolio/Posts/${post.id}`}
                  title="View post"
                  aria-label="View post"
                >
                  <div>
                    <div className="ui items">
                      <div className="item">
                        <div className="image">
                          <img
                            src={
                              post.authorInfo
                                ? "https://raw.githubusercontent.com/Thrillseeker419/LatinBlogPortfolio/main/react-app/public/" +
                                  post.authorInfo.avatar_url
                                : AvatarFallbackUrl
                            }
                            alt={`Avatar for ${post.authorInfo ? post.authorInfo.name : 'the author'}`}
                          />
                        </div>
                        <div className="content">
                          <h2 className="header header-content">{MakeTitle(post.title)}</h2>
                          <div className="meta">
                            <span>
                              {post.authorInfo
                                ? post.authorInfo.company.name
                                : "Company Unknown"}
                            </span>
                          </div>
                          <div className="description">
                            <p className="posts-list-item-content">{CapitalizeFirstLetter(post.body)}</p>
                          </div>
                          <div className="extra">
                            Authored by:{" "}
                            {post.authorInfo ? post.authorInfo.name : "Unknown"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
          )}

          <div className="center-align-flex">
            <div className="ui small basic icon buttons">
              <Link
                to={{
                  pathname: "/LatinBlogPortfolio/Posts",
                  search:
                    "?pageNumber=" +
                    Math.max(1, pageNumberNumber - 1) +
                    "&pageSize=" +
                    pageSize2 +
                    "&searchTerms=" +
                    searchTermsInput,
                }}
                aria-label="Go to previous results page"
                className="ui button"
              >
                <i className="angle left icon"></i>
              </Link>
              {pagedInfo.visiblePages.map((entry: number) => {
                return (
                  <Link
                    key={nanoid()}
                    to={{
                      pathname: "/LatinBlogPortfolio/Posts",
                      search:
                        "?pageNumber=" +
                        entry +
                        "&pageSize=" +
                        pageSize2 +
                        "&searchTerms=" +
                        searchTermsInput,
                    }}
                    aria-label={`Go to page ${entry}`}
                    className="ui button"
                  >
                    {entry}
                  </Link>
                );
              })}

              <Link
                to={{
                  pathname: "/LatinBlogPortfolio/Posts",
                  search:
                    "?pageNumber=" +
                    Math.min(pagedInfo.totalPages, pageNumberNumber + 1) +
                    "&pageSize=" +
                    pageSize2 +
                    "&searchTerms=" +
                    searchTermsInput,
                }}
                aria-label="Go to next results page"
                className="ui button"
              >
                <i className="angle right icon"></i>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        postsStatus === "error" && (
          <div className="Error">
            <h1>
              <i className="exclamation triangle icon"></i> An unexpected error
              has occured while making your request.
            </h1>
            <br />
            <p>Please try again or contact your administrator.</p>
          </div>
        )
      )}
    </section>
  );
};

export default PostsList;
