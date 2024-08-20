import "../styles/pages/amazon.css";
import "../styles/shared/amazon-header.css";
import "../styles/shared/general.css";
import "../assets/images/icons/search-icon.png";
import ProductsGrid from "../components/ProductsGrid";
import CartIcon from "../components/CartIcon";
function Home() {
  return (
    <>
      <div className="amazon-header">
        <div className="amazon-header-left-section">
          <a href="home.html" className="header-link">
            <img
              className="amazon-logo"
              src="src/assets/images/amazon-logo-white.png"
              alt="amazon logo"
            />
          </a>
        </div>

        <div className="amazon-header-middle-section">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img
              className="search-icon"
              src="src/assets/images/icons/search-icon.png"
              alt="search icon"
            />
          </button>
        </div>

        <div className="amazon-header-right-section">
          <a href="orders.html" className="header-link orders-link">
            <span className="returns-text">Returns</span>
            <span className="orders-text">& Orders</span>
          </a>
          <a href="checkout.html" className="cart-link header-link">
            <CartIcon />
            <div className="cart-quantity js-cart-quantity"></div>
          </a>
        </div>
      </div>
      <div className="main">
        <ProductsGrid />
      </div>
    </>
  );
}
export default Home;
