import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCart } from '../context/Context';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartState: { wishlist, cart } } = useCart();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef, mobileMenuRef]);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    setShowDropdown(false);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto relative px-6">
        {/* Top Bar with Logo and Hamburger */}
        <div className="flex justify-between items-center"> 
          <div className="flex items-center w-full">
            <Link to="/" className="text-2xl font-bold text-blue-600 whitespace-nowrap">StayEase</Link>
          
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex space-x-6 w-[100%] justify-center flex-wrap">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600">News</Link>
              <Link to="/property-listing" className="text-gray-600 hover:text-blue-600">Rental Properties</Link>
              <Link
                to="/wishlist"
                className="text-gray-600 hover:text-blue-600 relative">
                {wishlist.length > 0 && <span className='text-xs flex items-center justify-center text-white absolute h-4 w-4 rounded-full bg-red-500 -top-2 -right-2'>{wishlist.length}</span>}
                My Favourites
              </Link>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-blue-600 relative">
                {cart.length > 0 && <span className='text-xs flex items-center justify-center text-white absolute h-4 w-4 rounded-full bg-red-500 -top-2 -right-2'>{cart.length}</span>}
                Cart
              </Link>
            </nav>

            {/* Desktop Auth Section */}
            <div className="hidden sm:block ml-auto">
              {!isAuthenticated ? (
                <button
                  onClick={() => loginWithRedirect()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-[85px]"
                >
                  Log In
                </button>
              ) : (
                <div className="relative">
                  <div 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center space-x-3 hover:bg-gray-100 p-1 rounded-lg cursor-pointer"
                  >
                    <span className="text-gray-600 w-[180px]">{user?.name}</span>
                    <img
                      src={user?.picture}
                      alt={user?.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>

                  {showDropdown && (
                    <div 
                      ref={dropdownRef} 
                      className="absolute right-0 top-full mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50"
                    >
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 px-6 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link to="/" className="text-gray-600 hover:text-blue-600">News</Link>
              <Link to="/property-listing" className="text-gray-600 hover:text-blue-600">Rental Properties</Link>
              <Link
                to="/wishlist"
                className="text-gray-600 hover:text-blue-600 relative flex items-center">
                My Favourites
                {wishlist.length > 0 && <span className='ml-2 text-xs flex items-center justify-center text-white h-4 w-4 rounded-full bg-red-500'>{wishlist.length}</span>}
              </Link>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-blue-600 relative flex items-center">
                Cart
                {cart.length > 0 && <span className='ml-2 text-xs flex items-center justify-center text-white h-4 w-4 rounded-full bg-red-500'>{cart.length}</span>}
              </Link>

              {/* Mobile Auth Section */}
              <div className="border-t pt-4">
                {!isAuthenticated ? (
                  <button
                    onClick={() => loginWithRedirect()}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Log In
                  </button>
                ) : (
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={user?.picture}
                        alt={user?.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <span>{user?.name}</span>
                    </div>
                    <button
                      onClick={() => logout({
                        logoutParams: { returnTo: window.location.origin }
                      })}
                      className="w-full text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;