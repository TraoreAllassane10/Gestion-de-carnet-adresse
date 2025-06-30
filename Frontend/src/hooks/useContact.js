import { useState } from "react";
import axios from "axios";

export const useContact = () => {
  // States
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  //Recuperation du token
  const token = localStorage.getItem("token");

  const getContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const saveContact = async (data) => {
    try {

      setLoading(true);
      
      await axios.post("http://localhost:3000/contacts", data,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    } catch (error) {
        console.log(error);
    }
    finally
    {
        setLoading(false)
    }
  };

  return { getContacts, saveContact, contacts, loading };
};
