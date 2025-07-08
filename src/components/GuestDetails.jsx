import { useState } from "react";
import { useGuestDetails } from "./UseGuestDetails";

export default function GuestDetails({id, onBack}) {
    const guest = useGuestDetails(id);
    if (!guest) return <div>Loading...</div>;
    return (
        <div className="guestCard">
            <h2>{guest.name}</h2>
            <div><p className="details">Email:</p><p>{guest.email}</p></div>
            <div><p className="details">Phone:</p><p> {guest.phone}</p></div>
            <div><p className="details">Bio:</p><p> {guest.bio}</p></div>
            <div><p className="details">Job:</p><p> {guest.job}</p></div>
            <button onClick={onBack}>Back</button>
        </div>
        );
};