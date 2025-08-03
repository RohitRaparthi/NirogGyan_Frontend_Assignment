import React from 'react';
import SearchInput from '../SearchInput';
import SpecialtyFilter from '../SpecialtyFilter';

const HeroSection = ({
  searchQuery,
  setSearchQuery,
  selectedSpecialty,
  setSelectedSpecialty,
  specialties,
}) => {
  const styles = {
    hero: {
      backgroundColor: '#f2f7ff',
      padding: '48px 0',
    },
    container: {
      padding: '0 16px',
    },
    heroContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textSection: {
      width: '100%',
      maxWidth: '900px',
      textAlign: 'center',
    },
    titleContainer: {
      marginBottom: '16px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#1f2937',
      lineHeight: '40px',
      margin: 0,
    },
    subtitleContainer: {
      marginBottom: '32px',
    },
    subtitle: {
      fontSize: '18px',
      color: '#6b7280',
      lineHeight: '28px',
      margin: 0,
    },
    searchSection: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
    },
  };

  return (
    <div style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.heroContent}>
          <div style={styles.textSection}>
            <div style={styles.titleContainer}>
              <h2 style={styles.title}>Find the Right Doctor for You</h2>
            </div>
            <div style={styles.subtitleContainer}>
              <p style={styles.subtitle}>
                Connect with experienced healthcare professionals who care about your well-being
              </p>
            </div>
            <div style={styles.searchSection}>
              <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <SpecialtyFilter
                selectedSpecialty={selectedSpecialty}
                setSelectedSpecialty={setSelectedSpecialty}
                specialties={specialties}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
