import { AuthorJoin } from './authorJoin'; // Adjust this path if necessary

describe('AuthorJoin', () => {
  const mockAuthors = {
    1: {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      avatar_url: 'avatar1.png',
      address: {
        street: '123 Main St',
        suite: 'Apt. 1',
        city: 'Somewhere',
        zipcode: '12345',
        stateAbbr: 'CA',
        geo: {
          lat: '34.0522',
          lng: '-118.2437',
        },
      },
      phone: '123-456-7890',
      website: 'johndoe.com',
      company: {
        name: 'Doe Inc.',
        catchPhrase: 'Innovate your life',
        bs: 'deliver seamless solutions',
      },
    },
    2: {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      avatar_url: 'avatar2.png',
      address: {
        street: '456 Elm St',
        suite: 'Apt. 2',
        city: 'Elsewhere',
        zipcode: '67890',
        stateAbbr: 'NY',
        geo: {
          lat: '40.7128',
          lng: '-74.0060',
        },
      },
      phone: '987-654-3210',
      website: 'janesmith.com',
      company: {
        name: 'Smith Corp.',
        catchPhrase: 'Empower your world',
        bs: 'integrate efficient platforms',
      },
    },
  };

  const mockPosts = [
    { id: 1, title: 'First Post', body: 'This is the first post.', userId: 1, status: 'created' },
    { id: 2, title: 'Second Post', body: 'This is the second post.', userId: 2, status: 'created' },
    { id: 3, title: 'Third Post', body: 'This is the third post.', userId: 3, status: 'created' }, // No matching author
  ];

  it('joins posts with their corresponding authors', () => {
    const result = AuthorJoin(mockPosts, mockAuthors);

    expect(result.length).toBe(3); // Ensure it returns all posts

    expect(result[0].authorInfo).toEqual(mockAuthors[1]);
    expect(result[1].authorInfo).toEqual(mockAuthors[2]);
    expect(result[2].authorInfo).toBeUndefined(); // Post 3 doesn't have a matching author
  });

  it('handles empty posts array', () => {
    const result = AuthorJoin([], mockAuthors);
    expect(result).toEqual([]); // Should return an empty array
  });

  it('handles missing author in AuthorData', () => {
    const postsWithMissingAuthor = [
      { id: 4, title: 'Post with missing author', body: 'This post has no author', userId: 999, status: 'created' }, // No matching author
    ];
    const result = AuthorJoin(postsWithMissingAuthor, mockAuthors);

    expect(result[0].authorInfo).toBeUndefined(); // The author should be undefined
  });

  it('returns an empty array when posts is undefined or null', () => {
    expect(AuthorJoin(undefined as any, mockAuthors)).toEqual([]);
    expect(AuthorJoin(null as any, mockAuthors)).toEqual([]);
  });
});
