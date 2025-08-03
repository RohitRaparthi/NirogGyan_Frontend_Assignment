import React from 'react';

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const styles = {
    searchContainer: {
      width: '100%',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px',
      display: 'block',
    },
    inputContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      height: '48px',
      border: '2px solid rgb(53, 103, 214)',
      borderRadius: '8px',
      padding: '0 48px 0 16px',
      fontSize: '16px',
      backgroundColor: '#ffffff',
      color: '#1f2937',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    searchIcon: {
      position: 'absolute',
      right: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
    },
  };

  return (
    <div style={styles.searchContainer}>
      <div style={styles.inputContainer}>
        <input
          id="doctor-search"
          type="text"
          style={styles.input}
          placeholder="Search doctors by name or specialty..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={styles.searchIcon}>
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              fill='rgb(53, 103, 214)'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
