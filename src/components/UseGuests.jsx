import { useState, useEffect } from "react";
import axios from "axios";

export function useGuests() {
    const [guests, setGuests] = useState([]);
    useEffect(()=>{
        axios.get("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503/guests/")
        .then(response => setGuests(response.data.data));
    }, []);
    return guests;
}

