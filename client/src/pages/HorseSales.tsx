import Hero from '../components/Hero';
import HorseList from '../components/HorseList';
import { useHorses } from '../hooks/useHorses';

function HorseSales() {
  const { horses, loading, error } = useHorses();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <main>
      <div className='content-container'>
        <div className='content-type1'>
        <HorseList horses={horses} link="/horse"/>
        </div>
        <div className='content-type2'>
          <p className="text">Horses for Sale</p>
        </div>
      </div>
    </main>
  )
}
export default HorseSales;