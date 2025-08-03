import React from 'react';

const Header = () => {
  const styles = {
    header: {
      backgroundColor: '#def2ff',
      borderBottom: '1px solid #e5e7eb',
      padding: '16px 0',
    },
    container: {
      padding: '0 16px',
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      flex: 1,
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: 0,
    },
    navigation: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
    },
    navButton: {
      padding: '8px 12px',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '4px',
      transition: 'background-color 0.2s',
    },
    navText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      letterSpacing: '0.5px',
    },
  };

  return (
    <div style={styles.header}>
      <div style={styles.container}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <h1 style={styles.logoText}>NirogGyan Doctors</h1>
          </div>
          <div style={styles.navigation}>
            <button style={styles.navButton}>
              <span style={styles.navText}>FIND DOCTORS</span>
            </button>
            <button style={styles.navButton}>
              <span style={styles.navText}>SPECIALTIES</span>
            </button>
            <button style={styles.navButton}>
              <span style={styles.navText}>ABOUT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
