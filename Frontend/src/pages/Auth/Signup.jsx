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
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />

          <div className="max-w-md mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center text-slate-800 mb-6">
              Créer votre compte
            </h1>

            <form onSubmit={handleRegister} className="space-y-6 bg-white shadow-lg rounded-xl p-8 border border-slate-200">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Entrer votre nom ou pseudo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Entrer votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Entrer votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full font-semibold text-white"
              >
                S'inscrire
              </button>

              <p className="text-center text-sm text-slate-600">
                Vous avez déjà un compte ?{" "}
                <Link to="/" className="text-indigo-600 hover:underline">
                  Connectez-vous
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>

  )
}

export default Signup