import Header from '../../layout/Header'

const Signup = () => {
  return (
    <div>
      <Header />

      <div className='max-w-2xl mx-auto'>
        <h1 className='text-2xl text-center my-10'>Créer votre compte</h1>

        <form action="" className=''>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
            <legend className="fieldset-legend">Creation de compte</legend>

            <label className="label">Nom complet</label>
            <input type="text" className="input w-full" placeholder="Entrer votre nom compte ou pseudo" />

            <label className="label">Email</label>
            <input type="text" className="input w-full" placeholder="Entrer votre email" />

            <label className="label">Mote de passe</label>
            <input type="text" className="input w-full" placeholder="Entrer votre mot de passe" />
            <a href="">Mot de passe oublié ?</a>

            <button className="btn btn-primary">Inscription</button>
            <span>Vous avez déjà un compte ? <a href="/">Connectez-vous</a></span>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Signup