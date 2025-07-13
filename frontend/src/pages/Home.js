import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';





const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '120px',
        paddingBottom: '80px',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease'
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: '900',
              marginBottom: '24px',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(102, 126, 234, 0.3)'
            }}>
            Explore with Our Scooter & Bike Rentals
            </h1>
            
            <p style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '48px',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto 48px auto'
            }}>
              Discover the hills in a new way. Easy, safe, and verified scooter rentals from trusted local owners.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/register" 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 16px 48px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.3)';
                }}
              >
                Start Your Journey
              </Link>
              
              <Link 
                to="/rent-scooter" 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                Browse Scooters
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '80px 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: '80px'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '20px'
            }}>
              Why Choose Taxido?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
             At TAXIDO, we connect explorers and adventure seekers with trusted local scooter owners, making it easy to rent verified, well-maintained scooters. Whether you're here to discover Nainital's hidden gems or enjoy a scenic ride, your unforgettable adventure begins with us — safe, hassle-free, and tailored for every traveler.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* For Travelers Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                zIndex: 1
              }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  🏔️
                </div>
                <h3 style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  For Travelers
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: '0'
                }}>
                  Discover the beauty of hills with well-maintained scooters and bikes — where every journey leads to new experiences.
                </p>
              </div>
            </div>

            {/* For Owners Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
                zIndex: 1
              }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  🛵
                </div>
                <h3 style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  For Owners
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: '0'
                }}>
                  Monetize your scooter or bike worry-free. With our verified users, you don’t have to stress about damage or losing your vehicle.
                </p>
              </div>
            </div>

            {/* Secure & Verified Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              gridColumn: 'span 1'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 32px 64px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            >
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                zIndex: 1
              }} />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  🔒
                </div>
                <h3 style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  Secure & Verified
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  textAlign: 'center',
                  margin: '0'
                }}>
                 Our advanced verification system includes document checks, vehicle condition reports, and fuel level tracking — ensuring complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '20px'
            }}>
              Ready to Explore ?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}>
               Be among the first to explore Hills with Taxido. Book your perfect scooter or bike today and start your unforgettable adventure.
            </p>
            
            <Link 
              to="/register" 
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '20px 40px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 12px 40px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px)';
                e.target.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.3)';
              }}
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;