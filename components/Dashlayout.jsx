// components/DashboardLayout.js
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{
        width: '250px',
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        
      }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Link style={{ color: '#fff' }} href="/Dashboard/ideaevaluator">
            Idea Evaluator
            </Link>
          </li>
          {/* Add more sidebar links here if needed */}
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
