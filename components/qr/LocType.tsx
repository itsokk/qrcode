import { Button, Center, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Plane, WorldLatitude, WorldLongitude } from "tabler-icons-react";

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
    <Center style={{ flexDirection: "column" }}>
      <Button
        onClick={() =>
          navigator != null &&
          navigator.geolocation.getCurrentPosition(({ coords }) => {
            setLat(coords.latitude.toString());
            setLon(coords.longitude.toString());
            // Set altitude to 0 if not available
            setAlt(coords.altitude ? coords.altitude.toString() : "0");
          })
        }
        size="lg"
        color="violet"
        style={{ marginTop: "1rem" }}
      >
        Get location
      </Button>
      <TextInput
        value={lat}
        onChange={(e) => setLat(e.currentTarget.value)}
        placeholder="Latitude"
        label="Latitude"
        style={{ width: "12rem" }}
        icon={<WorldLatitude size={18} />}
      />
      <TextInput
        value={lon}
        onChange={(e) => setLon(e.currentTarget.value)}
        placeholder="Longitude"
        label="Longitude"
        style={{ width: "12rem" }}
        icon={<WorldLongitude size={18} />}
      />
      <TextInput
        value={alt}
        onChange={(e) => setAlt(e.currentTarget.value)}
        placeholder="Altitude"
        label="Altitude"
        style={{ width: "12rem" }}
        icon={<Plane size={18} />}
      />
    </Center>
  );
};

export default LOC;
