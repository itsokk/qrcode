import { Center, TextInput, Textarea } from "@mantine/core";
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
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
        placeholder="Phone"
        label="Phone"
        style={{ width: "25%" }}
      />
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        placeholder="Message"
        label="Message"
        style={{ width: "50%" }}
        autosize
        minRows={4}
      />
    </Center>
  );
};

export default SMS;
