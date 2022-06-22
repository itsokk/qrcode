import { useEffect, useState } from "react";

enum SECURITY {
  WPA = "WPA",
  WEP = "WEP",
  NONE = "NONE",
}

const WiFi = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState(SECURITY.WPA);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    props.setQRValue(`WIFI:T:${security};S:${ssid};P:${password};H:${hidden}`);
  }, [ssid, password, security, hidden]);
  useEffect(() => {
    security === SECURITY.NONE && setPassword("");
  }, [security]);
  return (
    <div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-SSID">SSID:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          id="qrValue-SSID"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-PASSWORD">Password:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="qrValue-PASSWORD"
          disabled={security === SECURITY.NONE}
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-SECURITY">Security:</label>
        <select
          className="w-1/2 p-2 border-2 border-gray-600"
          value={security}
          onChange={(e) => setSecurity(e.target.value as SECURITY)}
          id="qrValue-SECURITY"
        >
          <option value={SECURITY.WPA}>WPA</option>
          <option value={SECURITY.WEP}>WEP</option>
          <option value={SECURITY.NONE}>NONE</option>
        </select>
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-HIDDEN">Hidden:</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="checkbox"
          checked={hidden}
          onChange={(e) => setHidden(e.target.checked)}
          id="qrValue-HIDDEN"
        />
      </div>
    </div>
  );
};

export default WiFi;
