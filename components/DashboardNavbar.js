"use client";
import { useState } from "react";
import Link from "next/link";

const DashboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContent}>
        {/* Logo */}
        <div style={styles.logo}>
          <Link href="/">Dashboard</Link>
        </div>

        {/* Navbar links for larger screens */}
        <div style={{ ...styles.navLinks, display: isOpen ? "block" : "flex" }}>
          <Link href="/Dashboard/ideaevaluator" style={styles.link}>
            Idea Evaluator
          </Link>
          <Link href="/Dashboard/anotherpage" style={styles.link}>
            Another Page
          </Link>
          {/* Add more links here as needed */}
        </div>

        {/* Hamburger icon for small screens */}
        <div style={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? "X" : "☰"}
        </div>
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  navbarContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    listStyleType: "none",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  hamburger: {
    display: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
  },
  // Responsive styles
  "@media (max-width: 768px)": {
    navbarContent: {
      flexDirection: "column",
    },
    navLinks: {
      display: "none", // Initially hide the links in mobile view
      flexDirection: "column",
      gap: "10px",
      marginTop: "10px",
    },
    hamburger: {
      display: "block", // Show hamburger on mobile
    },
    navLinksActive: {
      display: "flex", // Display links when menu is open
    },
  },
};

export default DashboardNavbar;
