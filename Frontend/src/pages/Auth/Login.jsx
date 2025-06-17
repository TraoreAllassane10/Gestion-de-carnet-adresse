import {useEffect, useState } from 'react'
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
            {loading ? (<Loading />) : (<div>
                <Header />

                <div className='max-w-2xl mx-auto'>
                    <h1 className='text-2xl text-center my-10'>Connectez-vous à votre compte</h1>

                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-10 gap-4">
                            <legend className="fieldset-legend">Connexion</legend>

                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Entrer votre email" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label className="label">Mot de passe</label>
                            <input type="text" className="input w-full" placeholder="Entrer votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <a href="">Mot de passe oublié ?</a>

                            <button type='submit' className="btn btn-primary">Connexion</button>
                            <span>Vous n'avez pas de compte ? <a href="/signup">Créer en un</a></span>
                        </fieldset>
                    </form>
                </div>
            </div>)}
        </div>
    )
}

export default login