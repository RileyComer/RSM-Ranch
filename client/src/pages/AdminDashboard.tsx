import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <main>
      <div className='content-container'>
        <p className="text">Admin Page</p>
        <Link className='link' to="/admin/addHorse">+</Link>
      </div>
    </main>
  )
}
export default AdminDashboard;