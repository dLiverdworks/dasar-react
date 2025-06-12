import React, { useState } from "react";

type Props = {
  name: string;
  phone: string;
};

const Contact: React.FC<Props> = ({ name, phone }) => {
  const [isPhoneCensored, setIsPhoneCensored] = useState(false);

  return (
    <div
      style={{
        padding: "16px 0px",
        borderBottom: "1px solid rgba(221, 221, 221, 1)",
      }}
      onClick={() => setIsPhoneCensored(!isPhoneCensored)}
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
      {!isPhoneCensored && (
        <p
          style={{
            fontSize: "16px",
            color: "rgba(135, 152, 186, 1)",
          }}
        >
          {phone}
        </p>
      )}
      {isPhoneCensored && (
        <p
          style={{
            fontSize: "16px",
            color: "rgba(135, 152, 186, 1)",
          }}
        >
          ************
        </p>
      )}
    </div>
  );
};

export default Contact;
