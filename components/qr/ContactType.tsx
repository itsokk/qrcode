import { useEffect, useState } from "react";

const CONTACT = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    props.setQRValue(
      `MECARD:N:${name};TEL:${number};EMAIL:${email};ADR:${address}`
    );
  }, [name, number, email, address]);
  return (
    <div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-NAME">Name:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="qrValue-NAME"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-NUMBER">Number:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          id="qrValue-NUMBER"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-EMAIL">Email:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="qrValue-EMAIL"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-ADDRESS">Address:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="qrValue-ADDRESS"
        />
      </div>
    </div>
  );
};

export default CONTACT;
