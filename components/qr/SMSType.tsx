import { useEffect, useState } from "react";

const SMS = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    props.setQRValue(`SMSTO:${phone}:${message}`);
  }, [phone, message]);
  return (
    <div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-NTO">Number to:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="qrValue-NTO"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-Message">Message:</label>
        <textarea
          className="w-1/2 p-2 border-2 border-gray-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="qrValue-Message"
        />
      </div>
    </div>
  );
};

export default SMS;
