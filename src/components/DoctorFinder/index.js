import React, { useState } from 'react';
import Header from '../Header';
import HeroSection from '../HeroSection';
import DoctorGrid from '../DoctorGrid';
import Footer from '../Footer';
import doctorsdata from '../../data/doctorsdata.json'

const DoctorFinderApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const [doctors] = useState(doctorsdata);

  const specialties = [
    'all',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      overflowX: 'hidden',
    },
  };

  return (
    <div style={styles.container}>
      <Header />
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={setSelectedSpecialty}
        specialties={specialties}
      />
      <DoctorGrid doctors={filteredDoctors} />
      <Footer />
    </div>
  );
};

export default DoctorFinderApp;
