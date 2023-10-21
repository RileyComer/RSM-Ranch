import React from 'react';
import Hero from '../components/Hero';

function Photos() {
  return (
    <main>
      <Hero
        imgSrc="https://th.bing.com/th/id/R.48ceeba57c8d0f7fbd030a2b7f748edf?rik=siRAHSmNhljBLw&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f02%2f105811.jpg&ehk=QaygAXfXEnDjXPWv92As6H4xn4P3tXs6jySag8FB3T8%3d&risl=&pid=ImgRaw&r=0"
        header='Photos'
        subHeader=''
        />
      <div className='content-container'>
        <p className="text">Photos Page</p>
      </div>
    </main>
  )
}
export default Photos;