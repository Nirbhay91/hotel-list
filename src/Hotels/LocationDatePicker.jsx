// LocationDatePicker.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './LocationDatePicker.css'

const LocationDatePicker = () => {
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSearch = () => {
    // Perform search or any other action based on selected location and dates
    console.log('Location:', location);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
  };

  return (
   
    <div style={{height: "144px;"}}>
        <div>
            <h4>Tours in London</h4>
        </div>

      {/* Location Input */}
      <div className="location-date-picker">
      <div className='compose-search-V8'>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={handleLocationChange}
      />

      {/* Check-in Datepicker */}
      <DatePicker
        selected={checkInDate}
        onChange={handleCheckInDateChange}
        placeholderText="Check-in Date"
      />

      {/* Check-out Datepicker */}
      <DatePicker
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        placeholderText="Check-out Date"
      />

      {/* Search Button */}
      <button onClick={handleSearch}>Search</button>
      </div>
      </div>
    </div>
  );
};

export default LocationDatePicker;
