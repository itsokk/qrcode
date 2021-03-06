import type { NextPage } from "next";
import Head from "next/head";
import { QRCode } from "react-qrcode-logo";
import { useEffect, useState } from "react";
import TextType from "../components/qr/TextType";
import URLType from "../components/qr/URLType";
import MailType from "../components/qr/MailType";
import SMSType from "../components/qr/SMSType";
import PhoneType from "../components/qr/PhoneType";
import WiFiType from "../components/qr/WiFiType";
import LocType from "../components/qr/LocType";
import ContactType from "../components/qr/ContactType";
import ThemeToggle from "../components/ThemeToggle";
import {
  NumberInput,
  Select,
  ColorPicker,
  InputWrapper,
  Button,
  Title,
  Center,
  createStyles,
  Checkbox,
} from "@mantine/core";
import {
  CircleHalf2,
  Download,
  FaceIdError,
  Qrcode,
  Resize,
} from "tabler-icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import DropzoneChildren from "../components/DropzoneChildren";

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

enum QRStyle {
  SQUARES = "squares",
  DOTS = "dots",
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

const styles = createStyles((theme) => ({
  colorContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "0.25rem",

    "@media (max-width: 440px)": {
      flexDirection: "column",
    },
  },
  colorWrapper: {
    marginRight: "2rem",
    marginLeft: "2rem",

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      margin: "auto",
    },
  },
}));

const Home: NextPage = () => {
  const [qrValue, setQrValue] = useState("Hello, World!");
  const [qrSize, setQrSize] = useState(256);
  const [qrError, setQrError] = useState(QRErrorCorrectionLevel.MEDIUM);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [qrType, setQrType] = useState(QRTypes.TEXT);
  const [qrStyle, setQrStyle] = useState(QRStyle.SQUARES);
  const [qrLogoEnabled, setQrLogoEnabled] = useState(false);
  const [qrLogoImage, setQrLogoImage] = useState(""); // Base64 string
  const [qrLogoSize, setQrLogoSize] = useState(64);
  const [qrLogoOpacity, setQrLogoOpacity] = useState(0.45); // 0-1
  const [qrLogoRemoveBehind, setQrLogoRemoveBehind] = useState(false);

  useEffect(() => {
    setQrValue(``);
  }, [qrType]);

  useEffect(() => {
    setQrLogoImage(``);
  }, [qrLogoEnabled]);

  const { classes } = styles();
  return (
    <>
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
      <Center style={{ marginTop: "0.25rem" }}>
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
          style={{ width: "10rem", marginRight: "0.5rem" }}
          label="QR Type"
          icon={<Qrcode size={18} strokeWidth={2} />}
        />
        <Select
          value={qrStyle}
          onChange={(value) => setQrStyle(value as QRStyle)}
          placeholder="QR Code Style"
          label="QR Code Style"
          style={{ width: "10rem", marginLeft: "0.5rem" }}
          data={[
            { value: QRStyle.SQUARES, label: "Squares" },
            { value: QRStyle.DOTS, label: "Dots" },
          ]}
          icon={<Qrcode size={18} strokeWidth={2} />}
        />
      </Center>
      {conditionalRender(qrType, qrValue, setQrValue)}
      <NumberInput
        value={qrSize}
        onChange={(value) => setQrSize(value!)}
        placeholder="Output size"
        label="Output size"
        style={{ width: "16rem", margin: "auto" }}
        icon={<Resize size={18} strokeWidth={2} />}
      />
      <Select
        value={qrError}
        onChange={(value) => setQrError(value as QRErrorCorrectionLevel)}
        placeholder="Error correction"
        label="Error correction"
        style={{ width: "11rem", margin: "auto" }}
        data={[
          { value: QRErrorCorrectionLevel.LOW, label: "Low" },
          { value: QRErrorCorrectionLevel.MEDIUM, label: "Medium" },
          { value: QRErrorCorrectionLevel.QUALITY, label: "Quality" },
          { value: QRErrorCorrectionLevel.HIGH, label: "High" },
        ]}
        icon={<FaceIdError size={18} strokeWidth={2} />}
      />
      <div className={classes.colorContainer}>
        <InputWrapper label="Background color" className={classes.colorWrapper}>
          <ColorPicker
            value={bgColor}
            onChange={(value) => setBgColor(value)}
            placeholder="Background color"
          />
        </InputWrapper>
        <InputWrapper label="Foreground color" className={classes.colorWrapper}>
          <ColorPicker
            value={fgColor}
            onChange={(value) => setFgColor(value)}
            placeholder="Foreground color"
          />
        </InputWrapper>
      </div>
      <Center style={{ marginTop: "0.5rem" }}>
        <Checkbox
          checked={qrLogoEnabled}
          onChange={(e) => setQrLogoEnabled(e.target.checked)}
          label="Enable logo"
          color="violet"
        />
        {qrLogoEnabled && (
          <div>
            <Dropzone
              onDrop={(acceptedFiles) => {
                if (acceptedFiles.length > 0) {
                  // Read the file as a base64 string
                  const reader = new FileReader();
                  reader.readAsDataURL(acceptedFiles[0]);
                  reader.onload = () => {
                    setQrLogoImage(reader.result as string);
                  };
                }
              }}
              accept={IMAGE_MIME_TYPE}
              multiple={false}
              style={{
                marginLeft: "0.5rem",
              }}
            >
              {(status) => DropzoneChildren(status)}
            </Dropzone>
            <NumberInput
              value={qrLogoSize}
              onChange={(value) => setQrLogoSize(value!)}
              placeholder="Logo size"
              label="Logo size"
              style={{ width: "10rem", marginLeft: "0.5rem" }}
              icon={<Resize size={18} />}
            />
            <NumberInput
              value={qrLogoOpacity}
              onChange={(value) => setQrLogoOpacity(value!)}
              placeholder="Logo opacity"
              label="Logo opacity"
              style={{ width: "10rem", marginLeft: "0.5rem" }}
              icon={<CircleHalf2 size={18} />}
            />
            <Checkbox
              checked={qrLogoRemoveBehind}
              onChange={(e) => setQrLogoRemoveBehind(e.target.checked)}
              label="Remove behind"
              color="violet"
              style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}
            />
          </div>
        )}
      </Center>
      <Center style={{ marginTop: "1rem" }}>
        <QRCode
          value={qrValue}
          size={qrSize}
          ecLevel={qrError}
          bgColor={bgColor}
          fgColor={fgColor}
          qrStyle={qrStyle}
          logoImage={qrLogoImage}
          logoWidth={qrLogoSize}
          logoHeight={qrLogoSize}
          logoOpacity={qrLogoOpacity}
          removeQrCodeBehindLogo={qrLogoRemoveBehind}
          id="qr-code"
        />
      </Center>
      {/* Download button */}
      <Center style={{ marginTop: "0.75rem" }}>
        <Button
          color="violet"
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
      <Center
        style={{
          marginBottom: "0.25rem",
          marginTop: "0.75rem",
        }}
      >
        <ThemeToggle />
      </Center>
    </>
  );
};

export default Home;
