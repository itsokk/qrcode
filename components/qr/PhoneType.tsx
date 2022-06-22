import { useEffect, useState } from "react";

const PHONE = (props: {
    setQRValue: (value: string) => void;
    qrValue: string;
  }) => {
    const [phone, setPhone] = useState("");
    useEffect(() => {
        props.setQRValue(`tel:${phone}`);
    }, [phone]);
    return (
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-PHONE">Phone number:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="qrValue-PHONE"
        />
      </div>
    );
  };
  
  export default PHONE;
  