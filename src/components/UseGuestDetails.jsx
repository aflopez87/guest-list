import { useState, useEffect } from "react";
import axios from "axios";

export function useGuestDetails(id) {
    const [guest, setGuest] = useState(null);
    useEffect(()=>{    
        if (!id) return;
        axios.get(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503/guests/${id}`)
           .then(response => setGuest(response.data.data));
}, [id]);
return guest;
};