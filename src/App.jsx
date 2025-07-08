import { useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import "./index.css"

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <main>
      <h1>Guest List</h1>
      <div>
        {selectedId ? (
          <GuestDetails id={selectedId} onBack={()=>{setSelectedId(null)}}/>
        ) : (
          <GuestList onSelect={setSelectedId} />
        )}
      </div>
    </main>
  );
};
