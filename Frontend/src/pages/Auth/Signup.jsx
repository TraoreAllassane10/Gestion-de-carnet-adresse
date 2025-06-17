import { Link, useNavigate } from 'react-router'
import Header from '../../layout/Header'
import { useState, useEffect } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';


const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await register(name, email, password);
    navigate('/home');
  }

  // Si user connecté , le renvoyer sur la home page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/home");
  }, [])

  return (
    <div>
      {loading ? (<Loading />) : (<div>
        <Header />

        <div className='max-w-2xl mx-auto'>
          <h1 className='text-2xl text-center my-10'>Créer votre compte</h1>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
              <legend className="fieldset-legend">Creation de compte</legend>

              <label className="label">Nom complet</label>
              <input type="text" className="input w-full" placeholder="Entrer votre nom compte ou pseudo" value={name} onChange={(e) => setName(e.target.value)} />

              <label className="label">Email</label>
              <input type="text" className="input w-full" placeholder="Entrer votre email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label className="label">Mote de passe</label>
              <input type="text" className="input w-full" placeholder="Entrer votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

              <button type='submit' className="btn btn-primary">Inscription</button>
              <span>Vous avez déjà un compte ? <Link to="/">Connectez-vous</Link></span>
            </fieldset>
          </form>
        </div>
      </div>)}
    </div>
  )
}

export default Signup