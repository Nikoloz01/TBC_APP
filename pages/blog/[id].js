export default function PostDetail({ post }) {
  return (
    <div className="container">
      <h1 className="title">{post.title}</h1>
      <p className="body">{post.body}</p>
      <div className="reactions">
        <span>Likes: {post.reactions.likes}</span>
        <span>Dislikes: {post.reactions.dislikes}</span>
      </div>
      <p className="views">Views: {post.views}</p>
      <ul>
        {post.tags.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await res.json();

    if (!post) {
      throw new Error('No post found');
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }
}
