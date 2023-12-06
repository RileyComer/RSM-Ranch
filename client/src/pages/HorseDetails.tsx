import { useParams } from 'react-router-dom';
import { useHorse } from '../hooks/useHorse';

function HorseDetails() {
  const { id } = useParams();
  const { horse, loading, error } = useHorse(id);

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