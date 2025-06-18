import { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Loading from './../../components/Loading';

const login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { login, loading } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate('/home');
    };

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
                            Connexion à votre compte
                        </h1>

                        <form onSubmit={handleLogin} className="space-y-6 bg-white shadow-lg rounded-xl p-8 border border-slate-200">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
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
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mot de passe</label>
                                <input
                                    type="password"
                                    className="input input-bordered w-full"
                                    placeholder="Entrer votre mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="text-right mt-1">
                                    <a href="#" className="text-sm text-indigo-600 hover:underline">Mot de passe oublié ?</a>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full font-semibold text-white"
                            >
                                Connexion
                            </button>

                            <p className="text-center text-sm text-slate-600">
                                Vous n'avez pas de compte ?{" "}
                                <a href="/signup" className="text-indigo-600 hover:underline">
                                    Créez-en un
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>

    )
}

export default login