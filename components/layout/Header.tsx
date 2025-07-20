import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">🏡 ALX Listing</div>
      <nav className="space-x-4 hidden md:flex">
        <a href="#" className="text-gray-700 hover:text-blue-500">Rooms</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Mansion</a>
        <a href="#" className="text-gray-700 hover:text-blue-500">Countryside</a>
      </nav>
      <div className="space-x-2">
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
