import { useGuests } from "./UseGuests";
import { useGuestDetails } from "./UseGuestDetails";

export default function GuestList ({onSelect}) {
    const guests = useGuests();
    return (
        <>
        <ul>
                <li><div>Name</div><div>Email</div><div>Phone #</div></li>
            {guests.map(guest=>(
                <li key={guest.id} onClick={()=> onSelect(guest.id)}>
                    <div>{guest.name}</div> <div>{guest.email}</div> <div>{guest.phone}</div>   
                </li>
            ))}
        </ul>
        <p>Select a guest to see more details.</p>
        </>
    );
};