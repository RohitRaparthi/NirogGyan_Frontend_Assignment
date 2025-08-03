import React, { useState } from 'react';

const SpecialtyFilter = ({
  selectedSpecialty,
  setSelectedSpecialty,
  specialties,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getDisplayText = (specialty) => {
    return specialty === 'all' ? 'All Specialties' : specialty;
  };

  const handleSelect = (specialty) => {
    setSelectedSpecialty(specialty);
    setIsOpen(false);
  };

  const styles = {
    filterContainer: {
      minWidth: '180px',
    },
    label: {
      fontSize: '14px',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '8px',
      display: 'block',
    },
    dropdown: {
      height: '48px',
      border: '2px solid rgb(53, 103, 214)',
      borderRadius: '8px',
      padding: '0 16px',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    dropdownText: {
      fontSize: '16px',
      color: '#1f2937',
      flex: 1,
    },
    arrow: {
      fontSize: '12px',
      color: '#6b7280',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: '8px',
      width: '80%',
      maxWidth: '400px',
      maxHeight: '300px',
      overflowY: 'auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    option: {
      padding: '16px 20px',
      borderBottom: '1px solid #f3f4f6',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
    },
    selectedOption: {
      backgroundColor: '#eff6ff',
    },
    optionText: {
      fontSize: '16px',
      color: '#1f2937',
    },
    selectedOptionText: {
      color: '#2563eb',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.filterContainer}>
      <div
        id="specialty-filter"
        style={styles.dropdown}
        onClick={() => setIsOpen(true)}
      >
        <span style={styles.dropdownText}>
          {getDisplayText(selectedSpecialty)}
        </span>
        <span style={styles.arrow}>▼</span>
      </div>

      {isOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {specialties.map((specialty) => (
              <div
                key={specialty}
                style={{
                  ...styles.option,
                  ...(selectedSpecialty === specialty ? styles.selectedOption : {}),
                }}
                onClick={() => handleSelect(specialty)}
              >
                <span
                  style={{
                    ...styles.optionText,
                    ...(selectedSpecialty === specialty ? styles.selectedOptionText : {}),
                  }}
                >
                  {getDisplayText(specialty)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialtyFilter;
