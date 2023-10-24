import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHorseById } from '../hooks/useHorseById';

function HorseDetails() {
  const { id } = useParams();
  const { horse, loading, error } = useHorseById(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!horse) {
    return <div>Horse not found</div>;
  }

  return (
    <main>
      horse
      <h1>{horse.name}</h1>
      <p>Displaying details for horse with ID: {id}</p>
    </main>
  );
}
export default HorseDetails;