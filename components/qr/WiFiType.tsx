import { Center, TextInput, Select, Checkbox } from "@mantine/core";
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
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={ssid}
        onChange={(e) => setSsid(e.currentTarget.value)}
        placeholder="SSID"
        label="SSID"
        style={{ width: "55%" }}
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        placeholder="Password"
        label="Password"
        style={{ width: "55%" }}
        disabled={security === SECURITY.NONE}
      />
      <Select
        value={security}
        onChange={(e) => setSecurity(e as SECURITY)}
        data={[
          { value: SECURITY.WPA, label: "WPA" },
          { value: SECURITY.WEP, label: "WEP" },
          { value: SECURITY.NONE, label: "NONE" },
        ]}
        label="Security"
        style={{ width: "55%" }}
      />
      <Checkbox
        value={hidden ? "true" : "false"}
        onChange={(e) => setHidden(e.currentTarget.checked)}
        label="Hidden"
        style={{ width: "55%", marginTop: "0.35rem" }}
      />
    </Center>
  );
};

export default WiFi;
