import Header from '../layout/Header'
import Silder from '../components/Silder';
import profil1 from "../assets/profil-icon.png";
import profil2 from "../assets/profil-icon2.png";
import profil3 from "../assets/profil-icon3.png";
import profil4 from "../assets/profil-icon4.png";
import { Link, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useContact } from '../hooks/useContact';

const Home = () => {
  const navigate = useNavigate();
  const { getContacts, contacts } = useContact();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/')
    }

    getContacts();

  }, [])

  return (
    <div>
      <Header />

      <section className='flex my-10 max-w-7xl mx-auto'>
        {/* Slider */}
        <Silder />

        {/* Content */}
        <div className="w-full md:w-3/4 px-4">
          {/* Champ de recherche */}
          <div className="relative mb-6">
            <input
              type="search"
              placeholder="Rechercher un contact..."
              className="input input-bordered w-full pl-10 rounded-xl"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contacts</h2>

          {/* Liste des contacts */}
          <div className="space-y-4">
            {contacts.length === 0 ? (
              <p className="text-gray-500 text-center italic">Aucun contact trouvé.</p>
            ) : (
              contacts.map((contact) => (
                <Link
                  to="/edit"
                  key={contact._id}
                  className="flex items-center gap-4 p-4 rounded-xl shadow-sm hover:bg-indigo-50 transition duration-150"
                >
                  <img
                    src={profil1}
                    alt="profil"
                    className="w-12 h-12 rounded-full object-cover border border-indigo-200"
                  />
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {contact.firstname} {contact.lastname}
                    </h4>
                    <p className="text-sm text-indigo-500">{contact.email}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

      </section>


    </div>
  )
}

export default Home