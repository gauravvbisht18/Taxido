import React from 'react';

const ScooterCard = ({ scooter, onRent, user }) => {
  return (
    <div className="scooter-card">
      {scooter.photo ? (
        <img 
          src={`${process.env.REACT_APP_API_URL}${scooter.photo}`}
          alt={scooter.model}
          className="scooter-image"
        />
      ) : (
        <div style={{ 
          height: '200px', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '48px'
        }}>
          🛵
        </div>
      )}
      
      <div className="scooter-info">
        <h3 style={{ color: '#333', marginBottom: '10px' }}>{scooter.model}</h3>
        <p><strong>Registration:</strong> {scooter.registration_number}</p>
        <p><strong>Location:</strong> {scooter.location}</p>
        <p><strong>Owner:</strong> {scooter.owner_name}</p>
        
        {scooter.condition_notes && (
          <p><strong>Condition:</strong> {scooter.condition_notes}</p>
        )}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
          <span className="price-tag">₹{scooter.rent_price}/day</span>
          
          {user.user_type === 'tourist' && (
            <button 
              className="btn"
              onClick={() => onRent(scooter.id, scooter.rent_price)}
              style={{ padding: '8px 20px', fontSize: '14px' }}
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScooterCard;
