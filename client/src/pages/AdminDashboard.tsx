import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <main>
      <div className='content-container'>
        <p className="text">Admin Page</p>
        <Link className='link' to="/admin/add-horse">Add Horse</Link>
        <Link className='link' to="/admin/my-horses">My Horses</Link>
      </div>
    </main>
  )
}
export default AdminDashboard;