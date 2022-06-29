import { Center, TextInput } from "@mantine/core";

const Text = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  return (
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={props.qrValue}
        onChange={(e) => props.setQRValue(e.currentTarget.value)}
        placeholder="Text"
        label="Text"
        style={{ width: "55%" }}
      />
    </Center>
  );
};

export default Text;
