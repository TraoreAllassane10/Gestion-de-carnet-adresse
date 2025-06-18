import { useState } from "react"
import axios  from 'axios';

export const useContact = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");

    const getContacts = async () => {
        try {
            setLoading(true)
            const res = await axios.get("http://localhost:3000/contacts", {
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            });

            setContacts(res.data.contacts)
            // console.log(res.data)
        } catch (error) {
            console.log(error)
        }
        finally
        {
            setLoading(false)
        }
    }

    return {getContacts, contacts}
}