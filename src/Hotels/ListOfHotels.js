import React, { useState } from 'react';
import data from '../data.json';
import Footer from './Footer';
import { Header } from './Header';
import Tours from './Tours';
import LocationDatePicker from './LocationDatePicker';
import './ListOfHotels.css';

const Listofhotels = () => {
 const [currentPage, setCurrentPage] = useState(1);
 const itemsPerPage = 9;

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

 const paginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
    <div className="App">
        <div>
           <Header />
        </div>
       <div>
       <Tours />
       </div>
       
       <div className="searchbox-wrap">
       <LocationDatePicker />
       </div>
      
      <div className="list">
        {currentItems.map((item, index) => (
          <div key={index} className="list-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
          Next
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>

 );
};

export default Listofhotels;