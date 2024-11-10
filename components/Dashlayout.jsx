// components/DashboardLayout.js
"use client";
import Link from 'next/link';
import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div style={{marginBottom:"5rem"}} className="navbar">
      {/* <DashboardNavbar/> */}

      </div>
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'row' }}>
      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 15px',
          cursor: 'pointer',
          display: isSidebarOpen ? 'none' : 'block'
        }}
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          position: 'fixed',
          top: 0,
          left: isSidebarOpen ? 0 : '-370px',
          height: '100%',
          overflow: 'auto',
          transition: 'left 0.3s ease',
          zIndex: 999
        }}
      >
       <Link  href="/Dashboard"> <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem',color:'white',textDecoration:"none", fontWeight: 'bold' }}>Dashboard</h2> </Link>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <Link style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                padding: '10px 15px',
                display: 'block',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} href="/Dashboard/ideaevaluator" passHref>
                 
              
                Idea Evaluator
            </Link>
          </li>
          {/* Add more sidebar links here if needed */}
        </ul>
        <button
          onClick={toggleSidebar}
          style={{
            display: isSidebarOpen ? 'block' : 'none',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '10px 15px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '20px'
          }}
        >
          Close Menu
        </button>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: '20px',
          marginLeft: isSidebarOpen ? '250px' : '0',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {children}
      </main>

      {/* Media Query Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          aside {
            width: 100%;
            left: ${isSidebarOpen ? '0' : '-100%'};
          }
          main {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
    </div>
  );
};

export default DashboardLayout;
