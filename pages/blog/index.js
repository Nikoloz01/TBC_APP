import Link from 'next/link';
import { useRouter } from 'next/router';

const POSTS_PER_PAGE = 9;

const Blog = ({ posts, totalPosts, currentPage }) => {
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const router = useRouter();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      router.push(`/blog?page=${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`/blog?page=${currentPage - 1}`);
    }
  };

  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="main-content">
      <div className="main-title">
        <h1>Blog Posts</h1>
      </div>
      <div className="grid-container">
        {posts.map((post) => (
          <Link className="grid-card" key={post.id} href={`/blog/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="card-footer">
              <span className="likes">{post.reactions.likes} Likes</span>
              <span className="views">{post.views} Views</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination_Container">
        <div className="pagination">
          <div className="Button_cont">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="prev-button"
            >
              ←
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="next-button"
            >
              Next page →
            </button>
          </div>
          <div className="page-info">
            <span>Page</span>
            <input
              type="text"
              value={currentPage}
              readOnly
              className="page-input"
            />
            <span>of {totalPages}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const currentPage = parseInt(query.page || '1', 10);
  const res = await fetch(
    `https://dummyjson.com/posts?limit=${POSTS_PER_PAGE}&skip=${(currentPage - 1) * POSTS_PER_PAGE}`
  );
  const data = await res.json();

  if (!data.posts) {
    return {
      props: {
        posts: [],
        totalPosts: 0,
        currentPage: 1,
      },
    };
  }

  return {
    props: {
      posts: data.posts,
      totalPosts: data.total,
      currentPage,
    },
  };
}

export default Blog;
