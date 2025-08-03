import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DoctorProfile from './components/DoctorProfile'
import './App.css'
import BookAppointment from './components/BookAppointment'
import DoctorFinderApp from './components/DoctorFinder'
import doctorsData from '../src/data/doctorsdata.json'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorFinderApp />} />
        <Route path="/doctor/:id" element={<DoctorProfile doctors={doctorsData} />} />
        <Route path="/doctor/:id/book" element={<BookAppointment doctors={doctorsData}/>} />
      </Routes>
    </BrowserRouter>
  )
}
