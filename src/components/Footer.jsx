// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#367E18", // Purple theme (match your header if you want)
        color: "white",
        textAlign: "center",
        padding: "15px 0",
        marginTop: "20px",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} All rights reserved | Made with ⚡ by{" "}
        <strong>Shailendra Reddy</strong>
      </p>
    </footer>
  );
}

export default Footer;
