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
      <Hero
        imgSrc="https://th.bing.com/th/id/R.48ceeba57c8d0f7fbd030a2b7f748edf?rik=siRAHSmNhljBLw&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f02%2f105811.jpg&ehk=QaygAXfXEnDjXPWv92As6H4xn4P3tXs6jySag8FB3T8%3d&risl=&pid=ImgRaw&r=0"
        header='Horses for sale'
        subHeader=''
      />
      <div className='content-container'>
        <div className='content-type1'>
        <HorseList horses={horses} />
        </div>
        <div className='content-type2'>
          <p className="text">Horses for Sale</p>
        </div>
      </div>
    </main>
  )
}
export default HorseSales;