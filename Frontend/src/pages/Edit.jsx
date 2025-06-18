import Header from './../layout/Header';
import Silder from './../components/Silder';
import profil from "../assets/profil-icon.png";
import { Link } from 'react-router';
import { MessageCircleIcon, Trash } from 'lucide-react';

const Edit = () => {
  return (
    <div>
      <Header />

      <section className='flex my-10 max-w-7xl mx-auto'>
        {/* Slider */}
        <Silder />

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 w-full px-4 py-8">
          {/* Formulaire de modification */}
          <div className="w-full md:w-1/2">
            <form> 
              <fieldset className="bg-white border border-slate-200 rounded-xl shadow p-8 space-y-5">
                <legend className="text-lg font-semibold text-slate-700 mb-4">
                  Modification du contact
                </legend>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                  <input type="text" className="input input-bordered w-full" value="Traore" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                  <input type="text" className="input input-bordered w-full" value="Allassane" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" className="input input-bordered w-full" value="traore@gmail.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Numéro de téléphone</label>
                  <input type="tel" className="input input-bordered w-full" value="0564639933" required />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-4">Modifier</button>
              </fieldset>
            </form>
          </div>

          {/* Profil et actions */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div className="flex flex-col items-center gap-2 mb-6">
              <img src={profil} alt="profil" className="w-24 h-24 rounded-full object-cover shadow" />
              <h3 className="text-lg font-bold">Traore Allassane</h3>
              <span className="text-indigo-500">traore@gmail.com</span>
              <span className="text-slate-600">+225 0564639933</span>
            </div>

            <div>
              <h4 className="text-md font-semibold text-slate-800 mb-3">Actions</h4>
              <div className="flex flex-col gap-4">
                <Link to="/send-email" className="flex items-center gap-2 hover:text-indigo-600">
                  <MessageCircleIcon className="w-5 h-5" />
                  <span>Envoyer un e-mail</span>
                </Link>

                <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                  <Trash className="w-5 h-5" />
                  <span>Supprimer le contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Edit