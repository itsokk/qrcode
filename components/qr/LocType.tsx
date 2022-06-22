import { useEffect, useState } from "react";

const LOC = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    props.setQRValue(`geo:${lat},${lon},${alt}`);
  }, [lat, lon, alt]);

  return (
    <div>
        <div className="mt-4 inputWrapper">
            <button className="w-1/2 p-2 border-2 border-gray-600 bg-gray-300" onClick={() => navigator != null && navigator.geolocation.getCurrentPosition(({ coords }) => {
                setLat(coords.latitude.toString());
                setLon(coords.longitude.toString());
                // Set altitude to 0 if not available
                setAlt(coords.altitude ? coords.altitude.toString() : "0");
            }
            )}>Get Current Location</button>
        </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-LAT">Latitude</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          id="qrValue-LAT"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-LON">Longitude</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          id="qrValue-LON"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue-ALT">Altitude</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          id="qrValue-ALT"
        />
      </div>
    </div>
  );
};

export default LOC;
