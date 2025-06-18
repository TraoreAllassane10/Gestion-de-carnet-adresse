import React from 'react'
import Header from '../layout/Header'
import Silder from '../components/Silder'

const Add = () => {
  return (
    <div>
      <Header />

      <section className='flex my-10 max-w-7xl mx-auto'>
        {/* Slider */}
        <Silder />

        {/* Content */}
        <div className="w-full max-w-lg mx-auto px-4 py-8">
          <form> 
            <fieldset className="bg-white border border-slate-200 rounded-xl shadow p-8 space-y-5">
              <legend className="text-lg font-semibold text-slate-700 mb-4">
                Ajout d’un nouveau contact
              </legend>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                <input type="text" className="input input-bordered w-full" placeholder="Entrer le nom" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                <input type="text" className="input input-bordered w-full" placeholder="Entrer le prénom" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="input input-bordered w-full" placeholder="Entrer l’email" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Numéro de téléphone</label>
                <input type="tel" className="input input-bordered w-full" placeholder="Ex: +2250700000000" required />
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">
                Enregistrer le contact
              </button>
            </fieldset>
          </form>
        </div>

      </section>

    </div>
  )
}

export default Add