import Header from '../../layout/Header'

const login = () => {
    return (
        <div>
            <Header />

            <div className='max-w-2xl mx-auto'>
                <h1 className='text-2xl text-center my-10'>Connectez-vous à votre compte</h1>

                <form action="" className=''>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
                        <legend className="fieldset-legend">Connexion</legend>

                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Entrer votre email" />

                        <label className="label">Mot de passe</label>
                        <input type="text" className="input w-full" placeholder="Entrer votre mot de passe" />
                        <a href="">Mot de passe oublié ?</a>

                        <button className="btn btn-primary">Connexion</button>
                        <span>Vous n'avez pas de compte ? <a href="/signup">Créer en un</a></span>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default login