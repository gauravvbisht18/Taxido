import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ user }) => {
  const [rentals, setRentals] = useState([]);
  const [documents, setDocuments] = useState({
    aadhar: null,
    scooterPhoto: null,
    petrolPhoto: null
  });
  const [uploadProgress, setUploadProgress] = useState(false);

  useEffect(() => {
    fetchRentals();
  }, []);

  const fetchRentals = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rentals/`);
      setRentals(response.data);
    } catch (error) {
      console.error('Error fetching rentals:', error);
    }
  };

  const handleFileUpload = (type, file) => {
    setDocuments(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleDocumentSubmit = async () => {
    setUploadProgress(true);
    const formData = new FormData();
    if (documents.aadhar) formData.append('aadhar_photo', documents.aadhar);
    if (documents.scooterPhoto) formData.append('photo', documents.scooterPhoto);
    if (documents.petrolPhoto) formData.append('petrol_before', documents.petrolPhoto);
    const token = localStorage.getItem('token');

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/upload-documents/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Documents uploaded successfully!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Document upload failed.');
    } finally {
      setUploadProgress(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10b981';
      case 'completed': return '#667eea';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

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
            Welcome back, {user.username}! 👋
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '18px',
            fontWeight: '400'
          }}>
            Manage your profile and track your rentals
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
          {/* Profile Status Card */}
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
                📋
              </div>
              <h3 style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: '700',
                margin: '0'
              }}>
                Profile Status
              </h3>
            </div>

            {/* Profile Info */}
            <div style={{
              display: 'grid',
              gap: '20px',
              marginBottom: '32px'
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
                  User Type
                </span>
                <span style={{
                  color: '#667eea',
                  fontSize: '16px',
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}>
                  {user.user_type}
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
                  Verification Status
                </span>
                <span style={{
                  color: '#f59e0b',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'rgba(245, 158, 11, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}>
                  Pending
                </span>
              </div>
            </div>

            {/* Document Upload Section */}
            <div>
              <h4 style={{
                color: 'white',
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '24px'
              }}>
                Upload Documents
              </h4>

              <div style={{
                display: 'grid',
                gap: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <label style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>
                    Aadhar Card Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('aadhar', e.target.files[0])}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>

                {user.user_type === 'renter' && (
                  <>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <label style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}>
                        Scooter Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('scooterPhoto', e.target.files[0])}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <label style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '16px',
                        fontWeight: '500'
                      }}>
                        Petrol Level Photo
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload('petrolPhoto', e.target.files[0])}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '14px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </div>
                  </>
                )}

                <button
                  onClick={handleDocumentSubmit}
                  disabled={uploadProgress}
                  style={{
                    background: uploadProgress 
                      ? 'rgba(102, 126, 234, 0.5)' 
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: uploadProgress ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                    marginTop: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (!uploadProgress) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!uploadProgress) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                    }
                  }}
                >
                  {uploadProgress ? 'Uploading...' : 'Upload Documents'}
                </button>
              </div>
            </div>
          </div>

          {/* Rental History Card */}
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
                My Rentals
              </h3>
            </div>

            {rentals.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                <div style={{
                  fontSize: '64px',
                  marginBottom: '16px',
                  opacity: '0.5'
                }}>
                  🏍️
                </div>
                <p style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  margin: '0'
                }}>
                  No rentals yet. Start exploring!
                </p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gap: '16px'
              }}>
                {rentals.map(rental => (
                  <div key={rental.id} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '24px',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                      alignItems: 'center'
                    }}>
                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                          fontWeight: '500',
                          margin: '0 0 4px 0'
                        }}>
                          Scooter Model
                        </p>
                        <p style={{
                          color: 'white',
                          fontSize: '16px',
                          fontWeight: '600',
                          margin: '0'
                        }}>
                          {rental.scooter_model}
                        </p>
                      </div>

                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                          fontWeight: '500',
                          margin: '0 0 4px 0'
                        }}>
                          Status
                        </p>
                        <span style={{
                          color: getStatusColor(rental.status),
                          fontSize: '14px',
                          fontWeight: '600',
                          background: `${getStatusColor(rental.status)}20`,
                          padding: '4px 12px',
                          borderRadius: '20px',
                          border: `1px solid ${getStatusColor(rental.status)}40`,
                          textTransform: 'capitalize'
                        }}>
                          {rental.status}
                        </span>
                      </div>

                      <div>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '14px',
                          fontWeight: '500',
                          margin: '0 0 4px 0'
                        }}>
                          Total Amount
                        </p>
                        <p style={{
                          color: '#667eea',
                          fontSize: '18px',
                          fontWeight: '700',
                          margin: '0'
                        }}>
                          ₹{rental.total_amount}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;