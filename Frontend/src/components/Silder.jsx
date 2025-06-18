import { Link } from 'react-router';
import { Clock, Contact2, Star, Trash } from "lucide-react";

const Silder = () => {
  return (
    <aside className="w-full md:w-1/4 px-4 py-6 bg-white rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-slate-700 mb-4">Menu</h3>

      <nav className="flex flex-col gap-2 mb-6">
        <Link
          to="/home"
          className="flex items-center gap-3 text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 px-3 py-2 rounded-lg transition"
        >
          <Contact2 size={18} />
          <span>Contacts</span>
        </Link>

        <Link
          to="/favoris"
          className="flex items-center gap-3 text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 px-3 py-2 rounded-lg transition"
        >
          <Star size={18} />
          <span>Favoris</span>
        </Link>

        <Link
          to="/recent"
          className="flex items-center gap-3 text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 px-3 py-2 rounded-lg transition"
        >
          <Clock size={18} />
          <span>Récents</span>
        </Link>

        <Link
          to="/corbeille"
          className="flex items-center gap-3 text-slate-700 hover:bg-indigo-100 hover:text-indigo-600 px-3 py-2 rounded-lg transition"
        >
          <Trash size={18} />
          <span>Corbeille</span>
        </Link>
      </nav>

      <Link
        to="/add"
        className="btn btn-primary w-full rounded-full text-white font-semibold tracking-wide"
      >
        + Nouveau contact
      </Link>
    </aside>
  );
};

export default Silder;
