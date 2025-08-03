import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DoctorProfile = ({doctors}) => {
    console.log(doctors)
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find(doc => String(doc.id) === id)
  console.log('Doctor:', doctor);

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

    const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '20px',
    },
    header: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 0',
      marginBottom: '32px',
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    backButton: {
      backgroundColor: '#6b7280',
      color: '#ffffff',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
    },
    headerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0,
    },
    profileContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    profileHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '24px',
      marginBottom: '32px',
      flexWrap: 'wrap',
    },
    imageContainer: {
      position: 'relative',
      flexShrink: 0,
    },
    doctorImage: {
      width: '150px',
      height: '150px',
      borderRadius: '75px',
      objectFit: 'cover',
    },
    statusIndicator: {
      position: 'absolute',
      bottom: '8px',
      right: '8px',
      width: '24px',
      height: '24px',
      borderRadius: '12px',
      border: '3px solid #ffffff',
      backgroundColor: getAvailabilityColor(doctor.availability),
    },
    doctorInfo: {
      flex: 1,
      minWidth: '300px',
    },
    doctorName: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 8px 0',
    },
    specialty: {
      fontSize: '20px',
      color: '#6b7280',
      margin: '0 0 16px 0',
    },
    availabilityContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    availabilityDot: {
      width: '12px',
      height: '12px',
      borderRadius: '6px',
      marginRight: '12px',
      backgroundColor: getAvailabilityColor(doctor.availability),
    },
    availabilityText: {
      fontSize: '16px',
      fontWeight: '600',
      color: getAvailabilityColor(doctor.availability),
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    ratingText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginLeft: '8px',
    },
    bookingSection: {
      backgroundColor: '#f8fafc',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '32px',
    },
    bookingTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 16px 0',
    },
    bookAppointmentButton: {
      backgroundColor: doctor.availability === 'offline' ? '#d1d5db' : '#2563eb',
      color: doctor.availability === 'offline' ? '#9ca3af' : '#ffffff',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: doctor.availability === 'offline' ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s',
    },
    detailsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    detailCard: {
      backgroundColor: '#f8fafc',
      padding: '20px',
      borderRadius: '8px',
    },
    detailTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 12px 0',
    },
    detailText: {
      fontSize: '16px',
      color: '#6b7280',
      margin: 0,
      lineHeight: '24px',
    },
    aboutSection: {
      marginTop: '32px',
    },
    aboutTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 16px 0',
    },
    aboutText: {
      fontSize: '16px',
      color: '#6b7280',
      lineHeight: '28px',
      margin: 0,
    },
    errorContainer: {
      textAlign: 'center',
      padding: '64px 20px',
    },
    errorTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 16px 0',
    },
    errorText: {
      fontSize: '16px',
      color: '#6b7280',
      margin: '0 0 24px 0',
    },
  };

  if (!doctor) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h2 style={styles.errorTitle}>Doctor Not Found</h2>
          <p style={styles.errorText}>The doctor profile you're looking for doesn't exist.</p>
          <button style={styles.backButton} onClick={() => navigate('/')}>
            Back to Doctor List
          </button>
        </div>
      </div>
    );
  }

  const handleBookAppointment = () => {
    if (doctor.availability !== 'offline') {
        navigate(`/doctor/${doctor.id}/book`)
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <button style={styles.backButton} onClick={() => navigate('/')}>
            ← Back to Doctors
          </button>
          <h1 style={styles.headerTitle}>Doctor Profile</h1>
        </div>
      </div>

      <div style={styles.profileContainer}>
        <div style={styles.profileHeader}>
          <div style={styles.imageContainer}>
            <img
              src={doctor.image}
              alt={doctor.name}
              style={styles.doctorImage}
              loading="lazy"
            />
            <div style={styles.statusIndicator} />
          </div>

          <div style={styles.doctorInfo}>
            <h2 style={styles.doctorName}>{doctor.name}</h2>
            <p style={styles.specialty}>{doctor.specialty}</p>

            <div style={styles.availabilityContainer}>
              <div style={styles.availabilityDot} />
              <span style={styles.availabilityText}>
                {getAvailabilityText(doctor.availability)}
              </span>
            </div>

            <div style={styles.rating}>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="#fbbf24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span style={styles.ratingText}>{doctor.rating} / 5.0</span>
            </div>
          </div>
        </div>

        <div style={styles.bookingSection}>
          <h3 style={styles.bookingTitle}>Book an Appointment</h3>
          <button
            style={styles.bookAppointmentButton}
            onClick={handleBookAppointment}
            disabled={doctor.availability === 'offline'}
            aria-label={`Book appointment with ${doctor.name}`}
          >
            {doctor.availability === 'offline' ? 'Currently Unavailable' : 'Book Appointment Now'}
          </button>
        </div>

        <div style={styles.detailsSection}>
          <div style={styles.detailCard}>
            <h4 style={styles.detailTitle}>Experience</h4>
            <p style={styles.detailText}>{doctor.experience}</p>
          </div>

          <div style={styles.detailCard}>
            <h4 style={styles.detailTitle}>Location</h4>
            <p style={styles.detailText}>{doctor.location}</p>
          </div>

          <div style={styles.detailCard}>
            <h4 style={styles.detailTitle}>Specialty</h4>
            <p style={styles.detailText}>{doctor.specialty}</p>
          </div>

          <div style={styles.detailCard}>
            <h4 style={styles.detailTitle}>Patient Rating</h4>
            <p style={styles.detailText}>{doctor.rating} out of 5 stars</p>
          </div>
        </div>

        <div style={styles.aboutSection}>
          <h3 style={styles.aboutTitle}>About {doctor.name}</h3>
          <p style={styles.aboutText}>
            {doctor.name} is a highly experienced {doctor.specialty.toLowerCase()} specialist with {doctor.experience} of practice.
            Located at {doctor.location}, Dr. {doctor.name.split(' ')[1]} is dedicated to providing exceptional healthcare
            services to patients. With a rating of {doctor.rating} stars, patients consistently praise their professional
            approach, expertise, and compassionate care. Whether you need routine check-ups or specialized treatment,
            {doctor.name} is committed to helping you achieve optimal health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
