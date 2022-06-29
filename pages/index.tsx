import type { NextPage } from "next";
import Head from "next/head";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import TextType from "../components/qr/TextType";
import URLType from "../components/qr/URLType";
import MailType from "../components/qr/MailType";
import SMSType from "../components/qr/SMSType";
import PhoneType from "../components/qr/PhoneType";
import WiFiType from "../components/qr/WiFiType";
import LocType from "../components/qr/LocType";
import ContactType from "../components/qr/ContactType";
import {
  NumberInput,
  Select,
  ColorPicker,
  InputWrapper,
  Button,
  Title,
  Center,
} from "@mantine/core";
import { Download, FaceIdError, Qrcode, Resize } from "tabler-icons-react";

enum QRErrorCorrectionLevel {
  LOW = "L",
  MEDIUM = "M",
  QUALITY = "Q",
  HIGH = "H",
}

enum QRTypes {
  TEXT = "text", // Done
  URL = "url", // Done
  EMAIL = "email", // Done
  PHONE = "phone", // Done
  SMS = "sms", // Done
  CONTACT = "contact", // Done
  LOCATION = "location", // Done
  WIFI = "wifi", // Done
}

function conditionalRender(
  type: QRTypes,
  qrValue: string,
  setQRValue: (value: string) => void
) {
  switch (type) {
    case QRTypes.TEXT:
      return <TextType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.URL:
      return <URLType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.EMAIL:
      return <MailType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.SMS:
      return <SMSType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.PHONE:
      return <PhoneType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.WIFI:
      return <WiFiType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.LOCATION:
      return <LocType qrValue={qrValue} setQRValue={setQRValue} />;
    case QRTypes.CONTACT:
      return <ContactType qrValue={qrValue} setQRValue={setQRValue} />;
    default:
      return null;
  }
}
// TODO: add different qr code types, like phone number, wifi, etc.
const Home: NextPage = () => {
  const [qrValue, setQrValue] = useState("Hello, World!");
  const [qrSize, setQrSize] = useState(256);
  const [qrError, setQrError] = useState(QRErrorCorrectionLevel.MEDIUM);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [qrType, setQrType] = useState(QRTypes.TEXT);
  useEffect(() => {
    setQrValue(``);
  }, [qrType]);
  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="QR Code Generator" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
      </Head>
      <Title order={1} align="center">
        QR Code Generator
      </Title>
      <Select
        value={qrType}
        onChange={(e) => setQrType(e as QRTypes)}
        data={[
          { value: QRTypes.TEXT, label: "Text" },
          { value: QRTypes.URL, label: "URL" },
          { value: QRTypes.EMAIL, label: "Email" },
          { value: QRTypes.SMS, label: "SMS" },
          { value: QRTypes.PHONE, label: "Phone" },
          { value: QRTypes.WIFI, label: "WiFi" },
          { value: QRTypes.LOCATION, label: "Location" },
          { value: QRTypes.CONTACT, label: "Contact" },
        ]}
        style={{ width: "20%", margin: "auto", marginTop: "0.5rem" }}
        label="QR Type"
        icon={<Qrcode size={18} strokeWidth={2}/>}
      />
      {conditionalRender(qrType, qrValue, setQrValue)}
      <NumberInput
        value={qrSize}
        onChange={(value) => setQrSize(value!)}
        placeholder="Output size"
        label="Output size"
        style={{ width: "20%", margin: "auto" }}
        icon={<Resize size={18} strokeWidth={2} />}
      />
      <Select
        value={qrError}
        onChange={(value) => setQrError(value as QRErrorCorrectionLevel)}
        placeholder="Error correction"
        label="Error correction"
        style={{ width: "33.33%", margin: "auto" }}
        data={[
          { value: QRErrorCorrectionLevel.LOW, label: "Low" },
          { value: QRErrorCorrectionLevel.MEDIUM, label: "Medium" },
          { value: QRErrorCorrectionLevel.QUALITY, label: "Quality" },
          { value: QRErrorCorrectionLevel.HIGH, label: "High" },
        ]}
        icon={<FaceIdError size={18} strokeWidth={2} />}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: "1rem",
        }}
      >
        <InputWrapper
          label="Background color"
          style={{
            marginRight: "4rem",
          }}
        >
          <ColorPicker
            value={bgColor}
            onChange={(value) => setBgColor(value)}
            placeholder="Background color"
          />
        </InputWrapper>
        <InputWrapper label="Foreground color" style={{ marginLeft: "4rem" }}>
          <ColorPicker
            value={fgColor}
            onChange={(value) => setFgColor(value)}
            placeholder="Foreground color"
          />
        </InputWrapper>
      </div>
      <Center style={{ marginTop: "2rem" }}>
        <QRCodeCanvas
          value={qrValue}
          size={qrSize}
          level={qrError}
          bgColor={bgColor}
          fgColor={fgColor}
          id="qr-code"
        />
      </Center>
      {/* Download button */}
      <Center style={{ marginTop: "2rem" }}>
        <Button
          color="indigo"
          size="md"
          component="a"
          download="qr-code.png"
          href={
            typeof document !== "undefined"
              ? (
                  document.getElementById("qr-code")! as HTMLCanvasElement
                ).toDataURL("image/png")
              : ""
          }
          leftIcon={<Download size={18} strokeWidth={2} />}
        >
          Download as PNG
        </Button>
      </Center>
    </div>
  );
};

export default Home;
