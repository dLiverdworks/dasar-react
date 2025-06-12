import React from "react";

type Props = {
    name: string;
    phone: string;
}

const Contact: React.FC<Props> = ({ name, phone }) => {
  return (
    <div
      style={{
        padding: "16px 0px",
        borderBottom: "1px solid rgba(221, 221, 221, 1)",
        marginBottom: "16px",
      }}
    >
      <p
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "black",
          marginBottom: 8,
        }}
      >
        {name}
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "rgba(135, 152, 186, 1)",
        }}
      >
        {phone}
      </p>
    </div>
  );
};

export default Contact;
