import React from "react";
import Contact from "./components/Contact";

function App() {
  const contactItems = [
    {
      id: 1,
      name: "Bryan Curry",
      phone: "082229928292",
    },
    {
      id: 2,
      name: "Gibran",
      phone: "082229928291",
    },
    {
      id: 3,
      name: "Bahlil",
      phone: "082229928293",
    },
  ];

  return (
    <div>
      {contactItems.map((item) => (
        <Contact key={item.id} name={item.name} phone={item.phone} />
      ))}
    </div>
  );
}

export default App;
