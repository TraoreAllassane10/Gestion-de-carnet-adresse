import { Link } from 'react-router';
import { Clock, Contact2, Star, Trash } from "lucide-react"


const Silder = () => {
    return (
        <div className='flex flex-col justify-between w-1/4'>
            <div>
                <h4>Contacts</h4>

                <div className='flex flex-col gap-4 mt-4'>

                    <div className='flex gap-2 place-items-center hover:bg-slate-300 hover:rounded-lg w-40 p-1 transition'>
                        <Contact2 /><Link to="/home">Contacts</Link>
                    </div>

                    <div className='flex gap-2 place-items-center hover:bg-slate-300 hover:rounded-lg w-40 p-1 transition'>
                        <Star /><Link to="/favoris">Favoris</Link>
                    </div>

                    <div className='flex gap-2 place-items-center hover:bg-slate-300 hover:rounded-lg w-40 p-1 transition'>
                        <Clock /><Link to="/recent">Récents</Link>
                    </div>

                    <div className='flex gap-2 place-items-center hover:bg-slate-300 hover:rounded-lg w-40 p-1 transition'>
                        <Trash /><Link to="/corbeille">Corbeille</Link>
                    </div>
                </div>
            </div>

            <Link to="/add" className='btn btn-primary w-44'>Nouveau contact</Link>
        </div>
    )
}

export default Silder