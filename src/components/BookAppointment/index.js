import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookAppointment = ({ doctors }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors?.find(d => d.id === parseInt(id));

  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

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
      maxWidth: '800px',
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
    formContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    },
    doctorInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '32px',
      padding: '20px',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
    },
    doctorImage: {
      width: '80px',
      height: '80px',
      borderRadius: '40px',
      objectFit: 'cover',
    },
    doctorDetails: {
      flex: 1,
    },
    doctorName: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 4px 0',
    },
    doctorSpecialty: {
      fontSize: '16px',
      color: '#6b7280',
      margin: 0,
    },
    formTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 24px 0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px',
    },
    input: {
      height: '48px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '0 16px',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    inputError: {
      borderColor: '#ef4444',
    },
    select: {
      height: '48px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '0 16px',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      outline: 'none',
      cursor: 'pointer',
    },
    textarea: {
      minHeight: '100px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '16px',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      outline: 'none',
      resize: 'vertical',
      fontFamily: 'inherit',
    },
    errorText: {
      fontSize: '14px',
      color: '#ef4444',
      marginTop: '4px',
    },
    submitButton: {
      backgroundColor: isSubmitting ? '#9ca3af' : '#2563eb',
      color: '#ffffff',
      border: 'none',
      padding: '16px 32px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      transition: 'background-color 0.2s',
      marginTop: '16px',
    },
    confirmationContainer: {
      textAlign: 'center',
      padding: '40px 20px',
    },
    confirmationIcon: {
      fontSize: '64px',
      marginBottom: '16px',
    },
    confirmationTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#22c55e',
      margin: '0 0 16px 0',
    },
    confirmationText: {
      fontSize: '16px',
      color: '#6b7280',
      margin: '0 0 24px 0',
      lineHeight: '24px',
    },
    confirmationDetails: {
      backgroundColor: '#f8fafc',
      padding: '20px',
      borderRadius: '8px',
      margin: '24px 0',
      textAlign: 'left',
    },
    detailRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
    },
    detailLabel: {
      fontWeight: '500',
      color: '#374151',
    },
    detailValue: {
      color: '#6b7280',
    },
    actionButtons: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      marginTop: '24px',
    },
    primaryButton: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '1px solid #d1d5db',
      padding: '12px 24px',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
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
  };

  if (!doctor) {
    return (
      <div style={styles.container}>
        <div style={styles.errorContainer}>
          <h2 style={styles.errorTitle}>Doctor Not Found</h2>
          <p style={styles.errorText}>The doctor you're trying to book with doesn't exist.</p>
          <button style={styles.backButton} onClick={() => navigate('/')}>
            Back to Doctor List
          </button>
        </div>
      </div>
    );
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.date) {
      newErrors.date = 'Appointment date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Appointment time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1500);
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  

  if (isConfirmed) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <button style={styles.backButton} onClick={() => navigate('/')}>
              ← Back to Doctors
            </button>
            <h1 style={styles.headerTitle}>Appointment Confirmed</h1>
          </div>
        </div>

        <div style={styles.formContainer}>
          <div style={styles.confirmationContainer}>
            <div style={styles.confirmationIcon}>✅</div>
            <h2 style={styles.confirmationTitle}>Appointment Booked Successfully!</h2>
            <p style={styles.confirmationText}>
              Your appointment has been confirmed. You will receive a confirmation email shortly.
            </p>

            <div style={styles.confirmationDetails}>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Doctor:</span>
                <span style={styles.detailValue}>{doctor.name}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Patient:</span>
                <span style={styles.detailValue}>{formData.patientName}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Email:</span>
                <span style={styles.detailValue}>{formData.email}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Date:</span>
                <span style={styles.detailValue}>{new Date(formData.date).toLocaleDateString()}</span>
              </div>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Time:</span>
                <span style={styles.detailValue}>{formData.time}</span>
              </div>
              {formData.reason && (
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Reason:</span>
                  <span style={styles.detailValue}>{formData.reason}</span>
                </div>
              )}
            </div>

            <div style={styles.actionButtons}>
              <button style={styles.primaryButton} onClick={() => navigate('/')}>
                Back to Doctors
              </button>
              <button style={styles.secondaryButton} onClick={() => navigate(`/doctor/${doctor.id}`)}>
                View Doctor Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <button style={styles.backButton} onClick={() => navigate(`/doctor/${doctor.id}`)}>
            ← Back to Profile
          </button>
          <h1 style={styles.headerTitle}>Book Appointment</h1>
        </div>
      </div>

      <div style={styles.formContainer}>
        <div style={styles.doctorInfo}>
          <img
            src={doctor.image}
            alt={doctor.name}
            style={styles.doctorImage}
          />
          <div style={styles.doctorDetails}>
            <h3 style={styles.doctorName}>{doctor.name}</h3>
            <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
          </div>
        </div>

        <h2 style={styles.formTitle}>Appointment Details</h2>

        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="patientName">
              Patient Name *
            </label>
            <input
              id="patientName"
              name="patientName"
              type="text"
              style={{
                ...styles.input,
                ...(errors.patientName ? styles.inputError : {})
              }}
              placeholder="Enter your full name"
              value={formData.patientName}
              onChange={handleInputChange}
            />
            {errors.patientName && (
              <span style={styles.errorText}>{errors.patientName}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              style={{
                ...styles.input,
                ...(errors.email ? styles.inputError : {})
              }}
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span style={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="date">
              Appointment Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              style={{
                ...styles.input,
                ...(errors.date ? styles.inputError : {})
              }}
              min={getMinDate()}
              value={formData.date}
              onChange={handleInputChange}
            />
            {errors.date && (
              <span style={styles.errorText}>{errors.date}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="time">
              Appointment Time *
            </label>
            <select
              id="time"
              name="time"
              style={{
                ...styles.select,
                ...(errors.time ? styles.inputError : {})
              }}
              value={formData.time}
              onChange={handleInputChange}
            >
              <option value="">Select a time</option>
              {generateTimeSlots().map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.time && (
              <span style={styles.errorText}>{errors.time}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="reason">
              Reason for Visit (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              style={styles.textarea}
              placeholder="Briefly describe the reason for your appointment"
              value={formData.reason}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          <button
            type="submit"
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
