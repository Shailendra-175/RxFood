import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-links">
          <Link to="/book-appointment">Book Your Consultation</Link>
            <Link to="/live-chat">Live Chat</Link>
        <a href="#locate">Locate Us</a>
        <span className="topbar-right">1-800-833-1717</span>
      </div>
    </div>
  );
}


export default TopBar;
