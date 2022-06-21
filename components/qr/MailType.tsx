import { useEffect, useState } from "react";

const Mail = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    props.setQRValue(`mailto:${email}?subject=${subject}&body=${body}`);
  }, [email, subject, body]);
  return (
    <div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-Email">Email To:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="qrValue-Email"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-Subject">Subject:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          id="qrValue-Subject"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-Body">Body:</label>
        <textarea
          className="w-1/2 p-2 border-2 border-gray-600"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id="qrValue-Body"
        />
      </div>
    </div>
  );
};

export default Mail;
