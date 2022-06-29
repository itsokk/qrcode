import { Center, TextInput } from "@mantine/core";
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
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={phone}
        onChange={(e) => setPhone(e.currentTarget.value)}
        placeholder="Phone"
        label="Phone"
        style={{ width: "25%" }}
      />
    </Center>
  );
};

export default PHONE;
