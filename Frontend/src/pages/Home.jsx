import Header from '../layout/Header'
import Silder from '../components/Silder';
import { Link, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useContact } from '../hooks/useContact';
import Loading from './../components/Loading';
import Liste from '../components/Liste';

const Home = () => {

  const navigate = useNavigate();
  const { getContacts, contacts, loading } = useContact();

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
        {
          loading ? (<Loading />)
            :
            (<div className="w-full md:w-3/4 px-4">
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

              {/* Liste des contacts */}
              <Liste title="Contacts" data={contacts} />
            </div>)
        }

      </section>


    </div>
  )
}

export default Home