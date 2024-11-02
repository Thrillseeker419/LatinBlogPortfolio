import { Author } from '../features/PostData';

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
  
  return posts.map((post) => {
    const authorInfo = AuthorData[post.userId]; 
    return {
      ...post,
      authorInfo, // Attaches the matching author to the post
    };
  });
}
