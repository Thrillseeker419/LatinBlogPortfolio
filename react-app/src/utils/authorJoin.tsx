export function AuthorJoin(posts: any, AuthorData: any) {
  const postsArray = posts as Array<any>;
  type Dictionary = { [index: string]: string };
  const authorDictionary = AuthorData as Dictionary;
  let postsAndAuthors: Array<any> = [];
  if (!posts || posts.length === 0) {
    return postsAndAuthors;
  }
  postsArray.reduce((acc, value, index) => {
    let newItem = { ...value };
    newItem["authorInfo"] = authorDictionary[value.userId];
    postsAndAuthors.push(newItem);
    return newItem;
  }, postsAndAuthors);

  return postsAndAuthors;
}
