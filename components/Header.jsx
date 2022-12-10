import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="py-5 flex items-center space-x-4">
      <Link href="/" className="bg-blue-500 text-white font-bold px-2 py-2">
        1MW
      </Link>
      <h1
        type="text"
        placeholder="Search MN Real Estate..."
        className="flex-1 text-4xl font-bold text-blue-500 "
      >
        MN Real Estate
      </h1>
    </div>
  );
};

export default Header;
