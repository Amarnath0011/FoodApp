import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-amber-200 mt-10 shadow-inner relative bottom-0">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
          

          <div>
            <h2 className="text-2xl font-bold text-amber-900">🍕 FoodieHub</h2>
            <p className="mt-2 text-sm">
              Serving delicious meals straight from your favorite restaurants.
            </p>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold text-amber-900">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-green-700">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-700">About</Link></li>
              <li><Link to="/contactUs" className="hover:text-green-700">Contact</Link></li>
              <li><Link to="/cart" className="hover:text-green-700">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-900">Follow Us</h3>
            <div className="flex gap-4 mt-3 text-xl">
              <a href="#" className="hover:text-blue-600">🌐</a>
              <a href="#" className="hover:text-pink-600">📸</a>
              <a href="#" className="hover:text-blue-500">🐦</a>
              <a href="#" className="hover:text-red-600">▶️</a>
            </div>
          </div>
        </div>
  
        {/* © Bottom */}
        <div className="text-center py-4 border-t border-amber-300 text-sm text-gray-600">
          © {new Date().getFullYear()} FoodieHub. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  