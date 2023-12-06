import HorseList from '../components/HorseList';
import { useHorses } from '../hooks/useHorses';

function MyHorses() {
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
          <HorseList horses={horses} link="/admin/my-horse" />
        </div>
      </div>
    </main>
  )
}
export default MyHorses;