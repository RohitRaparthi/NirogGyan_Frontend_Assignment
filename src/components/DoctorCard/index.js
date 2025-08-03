import React from 'react';
import { useNavigate } from 'react-router-dom'

const DoctorCard = ({ doctor }) => {
  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'available':
        return '#22c55e';
      case 'busy':
        return '#fbbf24';
      case 'offline':
        return '#ef4444';
      default:
        return '#9ca3af';
    }
  };

  const getAvailabilityText = (status) => {
    switch (status) {
      case 'available':
        return 'Available Now';
      case 'busy':
        return 'Busy';
      case 'offline':
        return 'Offline';
      default:
        return 'Unknown';
    }
  };

  const navigate = useNavigate()

  const handleBookAppointment = () => {
    if (doctor.availability !== 'offline') {
      navigate(`/doctor/${doctor.id}/book`)
    }
  };

  const handleViewProfile = () => {
    navigate(`/doctor/${doctor.id}`)
  };

  const styles = {
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #f3f4f6',
      width: '45%',
    },
    cardHeader: {
      marginBottom: '16px',
    },
    doctorInfo: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    imageContainer: {
      position: 'relative',
      marginRight: '16px',
    },
    doctorImage: {
      width: '80px',
      height: '80px',
      borderRadius: '40px',
      objectFit: 'cover',
    },
    statusIndicator: {
      position: 'absolute',
      bottom: '4px',
      right: '4px',
      width: '16px',
      height: '16px',
      borderRadius: '8px',
      border: '2px solid #ffffff',
      backgroundColor: getAvailabilityColor(doctor.availability),
    },
    basicInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    nameContainer: {
      marginBottom: '4px',
    },
    doctorName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0,
    },
    specialtyContainer: {
      marginBottom: '8px',
    },
    specialty: {
      fontSize: '16px',
      color: '#6b7280',
      margin: 0,
    },
    availabilityContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    availabilityDot: {
      width: '8px',
      height: '8px',
      borderRadius: '4px',
      marginRight: '8px',
      backgroundColor: getAvailabilityColor(doctor.availability),
    },
    availabilityText: {
      fontSize: '14px',
      fontWeight: '500',
      color: getAvailabilityColor(doctor.availability),
    },
    cardBody: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '20px',
    },
    details: {
      flex: 1,
    },
    detailRow: {
      display: 'flex',
      marginBottom: '8px',
    },
    detailLabel: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginRight: '8px',
    },
    detailValue: {
      fontSize: '14px',
      color: '#6b7280',
      flex: 1,
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '16px',
    },
    ratingText: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginLeft: '4px',
    },
    cardFooter: {
      display: 'flex',
      gap: '12px',
    },
    bookButton: {
      flex: 1,
      backgroundColor: doctor.availability === 'offline' ? '#d1d5db' : '#2563eb',
      padding: '12px 20px',
      borderRadius: '8px',
      border: 'none',
      cursor: doctor.availability === 'offline' ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s',
    },
    bookButtonText: {
      color: doctor.availability === 'offline' ? '#9ca3af' : '#ffffff',
      fontSize: '16px',
      fontWeight: '600',
    },
    profileButton: {
      flex: 1,
      backgroundColor: 'transparent',
      padding: '12px 20px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    profileButtonText: {
      color: '#374151',
      fontSize: '16px',
      fontWeight: '600',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.doctorInfo}>
          <div style={styles.imageContainer}>
            <img
              src={doctor.image}
              alt={doctor.name}
              style={styles.doctorImage}
              loading="lazy"
            />
            <div style={styles.statusIndicator} />
          </div>
          <div style={styles.basicInfo}>
            <div style={styles.nameContainer}>
              <h3 style={styles.doctorName}>{doctor.name}</h3>
            </div>
            <div style={styles.specialtyContainer}>
              <p style={styles.specialty}>{doctor.specialty}</p>
            </div>
            <div style={styles.availabilityContainer}>
              <div style={styles.availabilityDot} />
              <span style={styles.availabilityText}>
                {getAvailabilityText(doctor.availability)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.cardBody}>
        <div style={styles.details}>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Experience:</span>
            <span style={styles.detailValue}>{doctor.experience}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>Location:</span>
            <span style={styles.detailValue}>{doctor.location}</span>
          </div>
        </div>
        <div style={styles.rating}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="#fbbf24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span style={styles.ratingText}>{doctor.rating}</span>
        </div>
      </div>

      <div style={styles.cardFooter}>
        <button
          style={styles.bookButton}
          onClick={handleBookAppointment}
          disabled={doctor.availability === 'offline'}
          aria-label={`Book appointment with ${doctor.name}`}
        >
          <span style={styles.bookButtonText}>Book Appointment</span>
        </button>
        <button
          style={styles.profileButton}
          onClick={handleViewProfile}
          aria-label={`View profile for ${doctor.name}`}
        >
          <span style={styles.profileButtonText}>View Profile</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
