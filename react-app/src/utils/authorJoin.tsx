// Define the structure for Author and Post types
interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  avatar_url: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    stateAbbr: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  status: string;
}

interface PostWithAuthor extends Post {
  authorInfo: Author | undefined;
}

export function AuthorJoin(posts: Post[], AuthorData: Record<number, Author>): PostWithAuthor[] {
  if (!posts || posts.length === 0) {
    return [];
  }

  // Using map instead of reduce for cleaner logic
  return posts.map((post) => {
    const authorInfo = AuthorData[post.userId];
    return {
      ...post,
      authorInfo,
    };
  });
}
