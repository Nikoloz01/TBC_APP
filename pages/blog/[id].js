
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
      <ul className="tags">
        {post.tags.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}

// Fetch post data based on the dynamic route (post ID)
export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

// Generate the paths for all post IDs
export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/posts');
  const posts = await res.json();

  // Map through the posts to generate paths for each post ID
  const paths = posts.posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true }; // Enable fallback for dynamic routes
}