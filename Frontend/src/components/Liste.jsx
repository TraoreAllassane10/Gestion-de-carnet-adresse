import { Link } from "react-router";
import profil1 from "../assets/profil-icon.png";
import profil2 from "../assets/profil-icon2.png";
import profil3 from "../assets/profil-icon3.png";
import profil4 from "../assets/profil-icon4.png";

const Liste = ({ title, data }) => {

    return (
        <>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">{title}</h2>

            <div className="space-y-4">
                {data.length === 0 ? (
                    <p className="text-gray-500 text-center italic">Aucun contact trouvé.</p>
                ) : (

                    data.map((contact) => (
                        <Link
                            to="/edit"
                            key={contact._id}
                            className="flex items-center gap-4 p-4 rounded-xl shadow-sm hover:bg-indigo-50 transition duration-150"
                        >
                            <img
                                src={profil1}
                                alt="profil"
                                className="w-12 h-12 rounded-full object-cover border border-indigo-200"
                            />
                            <div>
                                <h4 className="text-lg font-medium text-gray-900">
                                    {contact.firstname} {contact.lastname}
                                </h4>
                                <p className="text-sm text-indigo-500">{contact.email}</p>
                            </div>
                        </Link>
                    ))

                )}
            </div>

            <div>
                {
                    data.length > 0 && (<p></p>)
                }
            </div>
        </>
    )
}

export default Liste