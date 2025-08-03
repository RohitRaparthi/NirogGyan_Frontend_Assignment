import React from 'react';
import DoctorCard from '../DoctorCard';

const DoctorGrid = ({ doctors }) => {
  const styles = {
    container: {
      width: '100vw',
      padding: '32px 16px',
      backgroundColor: "rgb(242, 247, 255)",
    },
    gridContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    grid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '24px',
    },
    emptyState: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '64px 0',
    },
    emptyStateContent: {
      marginBottom: '16px',
    },
    emptyTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1f2937',
      textAlign: 'center',
      margin: 0,
    },
    emptySubtitle: {
      maxWidth: '400px',
    },
    emptyText: {
      fontSize: '16px',
      color: '#6b7280',
      textAlign: 'center',
      lineHeight: '24px',
      margin: 0,
    },
  };

  if (doctors.length === 0) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyState}>
          <div style={styles.emptyStateContent}>
            <h3 style={styles.emptyTitle}>No doctors found</h3>
          </div>
          <div style={styles.emptySubtitle}>
            <p style={styles.emptyText}>
              Try adjusting your search criteria or browse all specialties
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        <div style={styles.grid}>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorGrid;
