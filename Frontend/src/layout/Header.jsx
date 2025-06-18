
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './../context/AuthContext';

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/home" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition">
            Carneto
          </Link>
        </div>

        {/* Recherche + Avatar */}
        {user && (
          <div className="flex items-center gap-4">
            {/* Champ recherche */}
            <input
              type="text"
              placeholder="Recherche..."
              className="input input-sm input-bordered w-36 md:w-64 rounded-full"
            />

            {/* Avatar + Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 h-10 rounded-full ring ring-indigo-300 ring-offset-base-100 ring-offset-2">
                  <img
                    alt="Photo de profil"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profil
                    <span className="badge badge-info text-white">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Paramètres</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Déconnexion</button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
