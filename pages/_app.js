import Header from '../src/Components/header/Header';
import Footer from '../src/Components/footer/Footer';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/blog.css';
import '../styles/contact.css';
import '../styles/ProductListAssignments.css';
import '../styles/products.css';
import '../styles/profile.css';
import '../styles/ProfileCardContainer.css';
import '../styles/productCardContainer.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
