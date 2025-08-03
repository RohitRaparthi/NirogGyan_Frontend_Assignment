import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: 'rgb(19, 38, 117)',
      borderTop: '1px solid #e5e7eb',
      padding: '32px 0',
    },
    container: {
      padding: '0 16px',
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    logoContainer: {
      marginBottom: '12px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#ffffff',
      margin: 0,
    },
    creditContainer: {},
    creditText: {
      fontSize: '14px',
      color: '#6b7280',
      textAlign: 'center',
      margin: 0,
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          <div style={styles.logoContainer}>
            <h4 style={styles.logoText}>NirogGyan Doctors</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
