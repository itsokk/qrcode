import { useEffect, useState } from "react";
import { Center, TextInput } from "@mantine/core";
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
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Name"
        label="Name"
        style={{ width: "35%" }}
      />
      <TextInput
        value={number}
        onChange={(e) => setNumber(e.currentTarget.value)}
        placeholder="Number"
        label="Number"
        style={{ width: "35%" }}
      />
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Email"
        label="Email"
        style={{ width: "35%" }}
      />
      <TextInput
        value={address}
        onChange={(e) => setAddress(e.currentTarget.value)}
        placeholder="Address"
        label="Address"
        style={{ width: "35%" }}
      />
    </Center>
  );
};

export default CONTACT;
