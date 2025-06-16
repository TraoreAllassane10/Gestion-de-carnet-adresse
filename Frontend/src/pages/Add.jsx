import React from 'react'
import Header from '../layout/Header'

const Add = () => {
  return (
    <div>
      <Header />

      <div className='max-w-2xl mx-auto'>
        <h1 className='text-2xl text-center my-10'>AJouter un nouveau contact</h1>

        <form action="" className=''>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
            <label className="label">Nom</label>
            <input type="text" className="input w-full" />

            <label className="label">Prenom</label>
            <input type="text" className="input w-full"/>

            <label className="label">Email</label>
            <input type="text" className="input w-full"  />

            <label className="label">Numéro de telephone</label>
            <input type="text" className="input w-full"  />

            <button className="btn btn-primary">Enregister</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Add