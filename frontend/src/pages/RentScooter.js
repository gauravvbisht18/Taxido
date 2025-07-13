import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ScooterCard from '../components/Dashboard/ScooterCard';

const RentScooter = ({ user }) => {
  const [scooters, setScooters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScooters();
  }, []);

 const fetchScooters = async () => {
  try {
    const token = localStorage.getItem('token');  // Assuming you saved token at login
    const response = await axios.get('http://localhost:8000/api/scooters/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('Fetched scooters:', response.data);
    setScooters(response.data);
  } catch (error) {
    console.error('Error fetching scooters:', error);
  } finally {
    setLoading(false);
  }
};


  const handleRent = async (scooterId, rentPrice) => {
    try {
      const rentalData = {
        scooter: scooterId,
        renter: user.id,
        start_date: new Date().toISOString(),
        end_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        total_amount: rentPrice
      };

      await axios.post('http://localhost:8000/api/rentals/', rentalData);
      alert('Scooter booked successfully!');
      fetchScooters();
    } catch (error) {
      console.error('Error booking scooter:', error);
      alert('Failed to book scooter. Please try again.');
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
        padding: '80px 0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '60px 40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            borderTop: '4px solid #667eea',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 24px'
          }}></div>
          <h2 style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: '700',
            margin: '0'
          }}>
            Loading scooters...
          </h2>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  const availableScooters = scooters.filter(scooter => scooter.is_available);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      padding: '80px 0 40px'
    }}>
      <div className="container">
        {/* Welcome Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🛵 Available Scooters in Nainital
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '18px',
            fontWeight: '400'
          }}>
            Explore Nainital with our premium scooter collection
          </p>
        </div>

        {/* Dashboard Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Stats Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                📊
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '700',
                margin: '0'
              }}>
                Fleet Overview
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  Available Now
                </span>
                <span style={{
                  color: '#10b981',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  {availableScooters.length}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  Total Fleet
                </span>
                <span style={{
                  color: '#667eea',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  {scooters.length}
                </span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <span style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  Rental Period
                </span>
                <span style={{
                  color: '#f59e0b',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  24 Hours
                </span>
              </div>
            </div>
          </div>

          {/* Available Scooters Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                🛵
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '700',
                margin: '0'
              }}>
                Quick Actions
              </h3>
            </div>

            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              <button
                onClick={fetchScooters}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                }}
              >
                🔄 Refresh Fleet
              </button>

              <div style={{
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  fontWeight: '500',
                  margin: '0 0 8px 0'
                }}>
                  Welcome back
                </p>
                <p style={{
                  color: '#667eea',
                  fontSize: '18px',
                  fontWeight: '700',
                  margin: '0',
                  textTransform: 'capitalize'
                }}>
                  {user.username}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scooters Section */}
        <div style={{
          marginTop: '60px'
        }}>
          {availableScooters.length === 0 ? (
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '60px 40px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '80px',
                marginBottom: '24px',
                opacity: '0.7'
              }}>
                🛵
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '28px',
                fontWeight: '700',
                margin: '0 0 16px 0'
              }}>
                No scooters available at the moment
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                fontWeight: '400',
                margin: '0 0 32px 0',
                lineHeight: '1.6'
              }}>
                All scooters are currently rented out. Check back later or contact us for more information.
              </p>
              <button
                onClick={fetchScooters}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                }}
              >
                🔄 Try Again
              </button>
            </div>
          ) : (
            <div>
              <h2 style={{
                color: 'white',
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '32px',
                textAlign: 'center'
              }}>
                Choose Your Ride
              </h2>
              <div className="grid">
                {availableScooters.map((scooter) => (
                  <ScooterCard
                    key={scooter.id}
                    scooter={scooter}
                    onRent={() => handleRent(scooter.id, scooter.rent_price)}
                    user={user}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentScooter;