import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <h1 className="brand-title">RxFood</h1> 
        <p className="brand-subtitle">by Dr.Rajeshwari</p>
      </div>
      <nav className="nav">
        <Link to="/" className="cta">HOME</Link>
        <a href="#contact" className="cta">LOGIN</a>
        <a href="#features" className="cta">WHY US ?</a>
        <a href="#testimonials" className="cta">WEIGHT LOSS</a>
        <a href="#contact" className="cta">HEALTH PLANS</a>
        <a href="#contact" className="cta">AT HOME PLANS</a>

        <Link to="/reviews" className="cta">PATIENTS REVIEWS</Link>


        <a href="#contact" className="cta">PATIENTS STORIES </a>
        <a href="#contact" className="cta">HEALTH SHOP</a>
      </nav>
    </header>
  );
}

export default Header;

