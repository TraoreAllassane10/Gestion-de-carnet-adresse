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
        <div className='w-2/4 mr-10'>
          <form action="" className=''>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
              <legend className="fieldset-legend">Modification d'un contact</legend>
              <label className="label">Nom</label>
              <input type="text" value="Traore" className="input w-full" />

              <label className="label">Prenom</label>
              <input type="text" value="Allassane" className="input w-full" />

              <label className="label">Email</label>
              <input type="text" value="traore@gmail.com" className="input w-full" />

              <label className="label">Numéro de telephone</label>
              <input type="text" value="0564639933" className="input w-full" />

              <button className="btn btn-primary">Modifier</button>
            </fieldset>
          </form>
        </div>

        <div className='2/4 flex flex-col justify-between'>
          <div className='flex flex-col items-center gap-1'>
            <img src={profil} alt="profil" width={100} height={100} />
            <span>Traore Allassane</span>
            <span className='text-sm text-indigo-400'>traore@gmail.com</span>
            <span className='text-sm'>+225 0564639933</span>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-2'>Actions</h3>

            <div className='flex flex-col gap-3'>
              <div className='flex gap-1'>
                <MessageCircleIcon />
                <Link>Envoyer un e-mail</Link>
              </div>

              <div className='flex gap-1'>
                <Trash />
                <Link>Supprimer le contact</Link>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}

export default Edit