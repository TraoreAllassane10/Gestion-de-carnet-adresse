import Header from '../layout/Header'
import Silder from '../components/Silder';
import profil1 from "../assets/profil-icon.png";
import profil2 from "../assets/profil-icon2.png";
import profil3 from "../assets/profil-icon3.png";

const Recent = () => {
    return (
        <div>
            <Header />

            <section className='flex my-10 max-w-7xl mx-auto'>
                {/* Slider */}
                <Silder />

                {/* Content */}
                <div className='w-3/4'>
                    <label className="input w-full rounded-lg" >
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Recherche..." />
                    </label>

                    <h2 className='text-2xl text-slate-900 font-bold my-5'>Récents</h2>

                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <img src={profil1} alt={`profil`} />
                            <div>
                                <h4>Sangaré Fatim</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img src={profil2} alt={`profil`} />
                            <div>
                                <h4>Traoré Allassane</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img src={profil3} alt={`profil`} />
                            <div>
                                <h4>Koné Korotoum</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img src={profil2} alt={`profil`} />
                            <div>
                                <h4>Kouassi Ange</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img src={profil2} alt={`profil`} />
                            <div>
                                <h4>Sangaré Fatim</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <img src={profil3} alt={`profil`} />
                            <div>
                                <h4>Sangaré Fatim</h4>
                                <span className='text-sm text-indigo-400'>fatim@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Recent