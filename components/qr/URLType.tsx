import { Center, TextInput } from "@mantine/core";
import { useState, useEffect } from "react";
import { Link } from "tabler-icons-react";

const URL = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    // Add http:// if not present
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      setUrl("http://" + url);
    }
    props.setQRValue(url);
  }, [url]);
  return (
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={props.qrValue}
        onChange={(e) => props.setQRValue(e.currentTarget.value)}
        placeholder="URL"
        label="URL"
        style={{ width: "55%" }}
        icon={<Link size={18} />}
      />
    </Center>
  );
};

export default URL;
