import React from 'react';
import Link from 'next/link';

const DropdownMenu = ({ isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 bg-white shadow-md rounded-md mt-1">
      <ul className="py-1">
        <li>
          <Link
            href="/about/page1"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Page 1
          </Link>
        </li>
        <li>
          <Link
            href="/about/page2"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Page 2
          </Link>
        </li>
        {/* Add more dropdown items as needed */}
      </ul>
    </div>
  );
};

export default DropdownMenu;
