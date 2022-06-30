import { Center, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Phone } from "tabler-icons-react";

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
        placeholder="Phone number"
        label="Phone number"
        style={{ width: "12rem" }}
        icon={<Phone size={18} />}
      />
    </Center>
  );
};

export default PHONE;
