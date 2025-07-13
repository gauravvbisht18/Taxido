import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header style={{
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '16px 0',
      boxShadow: '0 4px 32px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Logo */}
          <Link to="/" style={{
            fontSize: '26px',
            fontWeight: '900',
            color: 'white',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            transition: 'all 0.3s ease',
            filter: 'drop-shadow(0 0 20px rgba(102, 126, 234, 0.3))'
          }}>
            Taxido
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '@media (max-width: 768px)': {
                display: 'block'
              }
            }}
            className="mobile-menu-toggle"
          >
            <div style={{
              width: '20px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></div>
            <div style={{
              width: '20px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              opacity: isMenuOpen ? '0' : '1',
              transition: 'all 0.3s ease'
            }}></div>
            <div style={{
              width: '20px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }}></div>
          </button>

          {/* Navigation */}
          <nav style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            '@media (max-width: 768px)': {
              display: isMenuOpen ? 'flex' : 'none',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(20px)',
              flexDirection: 'column',
              padding: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0 0 16px 16px',
              gap: '20px'
            }
          }} className="nav-menu">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  style={{
                    color: isActive('/dashboard') ? '#667eea' : 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: isActive('/dashboard') ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                    border: isActive('/dashboard') ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid transparent',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive('/dashboard')) {
                      e.target.style.color = '#667eea';
                      e.target.style.background = 'rgba(102, 126, 234, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/dashboard')) {
                      e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  Dashboard
                </Link>
                
                <Link
                  to="/rent-scooter"
                  style={{
                    color: isActive('/rent-scooter') ? '#667eea' : 'rgba(255, 255, 255, 0.85)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    transition: 'all 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: isActive('/rent-scooter') ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                    border: isActive('/rent-scooter') ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid transparent',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive('/rent-scooter')) {
                      e.target.style.color = '#667eea';
                      e.target.style.background = 'rgba(102, 126, 234, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/rent-scooter')) {
                      e.target.style.color = 'rgba(255, 255, 255, 0.85)';
                      e.target.style.background = 'transparent';
                    }
                  }}
                >
                  Browse Scooty || Bikes
                </Link>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingLeft: '24px',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                  '@media (max-width: 768px)': {
                    paddingLeft: '0',
                    borderLeft: 'none',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingTop: '16px',
                    marginTop: '8px'
                  }
                }} className="user-section">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      {user.username}
                    </span>
                  </div>
                  
                  <button 
                    onClick={logout} 
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Login
                </Link>
                
                <Link 
                  to="/register" 
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                  }}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          .nav-menu {
            display: ${isMenuOpen ? 'flex !important' : 'none !important'};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 0 0 16px 16px;
            gap: 20px;
          }
          .user-section {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 16px;
            margin-top: 8px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;