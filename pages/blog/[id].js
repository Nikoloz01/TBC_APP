
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

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json();
  

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://dummyjson.com/posts');
  const posts = await res.json();
  const paths = posts.posts.map(post => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}