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
        <div className='w-full'>
          <form action="" className=''>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
              <legend className="fieldset-legend">Ajout d'un nouveau contact</legend>
              <label className="label">Nom</label>
              <input type="text" className="input w-full" />

              <label className="label">Prenom</label>
              <input type="text" className="input w-full" />

              <label className="label">Email</label>
              <input type="text" className="input w-full" />

              <label className="label">Numéro de telephone</label>
              <input type="text" className="input w-full" />

              <button className="btn btn-primary">Enregister</button>
            </fieldset>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Add