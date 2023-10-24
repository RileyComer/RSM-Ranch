import React, { useEffect, useState } from 'react';
import useAddHorse from '../hooks/useAddHorse';
import Horse from '../types/Horse';

function AddHorse() {
  const [horseData, setHorseData] = useState({
    name: '',
    breed: '',
    height: 0,
    description: '',
    gender: '',
    registration: '',
    dob: '',
    price: 0,
    photos: [],
  });

  const { addHorse, isLoading, error } = useAddHorse();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addHorse(horseData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHorseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className='content-container'>
        <p className="text">Add Horse Page</p>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={horseData.name} onChange={handleInputChange} placeholder="Name" />
          <input type="text" name="breed" value={horseData.breed} onChange={handleInputChange} placeholder="Breed" />
          <input type="number" name="height" value={horseData.height} onChange={handleInputChange} placeholder="Height" />
          <input type="text" name="description" value={horseData.description} onChange={handleInputChange} placeholder="Description" />
          <input type="text" name="gender" value={horseData.gender} onChange={handleInputChange} placeholder="Gender" />
          <input type="number" name="registration" value={horseData.registration || ''} onChange={handleInputChange} placeholder="Registration Number" />
          <input type="text" name="dob" value={horseData.dob} onChange={handleInputChange} placeholder="Date of Birth" />
          <input type="number" name="price" value={horseData.price} onChange={handleInputChange} placeholder="Price" />
          <button type="submit">Add Horse</button>
        </form>
      </div>
    </main>
  )
}
export default AddHorse;