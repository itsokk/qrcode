import { Center, Textarea, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { Mail, Mailbox, Message } from "tabler-icons-react";
const _Mail = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    props.setQRValue(`mailto:${email}?subject=${subject}&body=${body}`);
  }, [email, subject, body]);
  return (
    <Center style={{ flexDirection: "column" }}>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Email"
        label="Email"
        style={{ width: "16rem" }}
        icon={<Mail size={18} />}
      />
      <TextInput
        value={subject}
        onChange={(e) => setSubject(e.currentTarget.value)}
        placeholder="Subject"
        label="Subject"
        style={{ width: "16rem" }}
        icon={<Mailbox size={18} />}
      />
      <Textarea
        value={body}
        onChange={(e) => setBody(e.currentTarget.value)}
        placeholder="Body"
        label="Body"
        style={{ width: "65%" }}
        autosize
        minRows={4}
        icon={<Message size={18} />}
      />
    </Center>
  );
};

export default _Mail;
