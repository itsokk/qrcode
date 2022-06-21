import type { NextPage } from "next";
import Head from "next/head";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

enum QRErrorCorrectionLevel {
  LOW = "L",
  MEDIUM = "M",
  QUALITY = "Q",
  HIGH = "H",
}
// TODO: add different qr code types, like phone number, wifi, etc.
const Home: NextPage = () => {
  const [qrValue, setQrValue] = useState("Hello, World!");
  const [qrSize, setQrSize] = useState(256);
  const [qrError, setQrError] = useState(QRErrorCorrectionLevel.MEDIUM);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");

  return (
    <div className="text-center w-screen">
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="QR Code Generator" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
      </Head>
      <h1 className="text-3xl font-bold mt-2">QR Code Generator</h1>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrValue">Text</label>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)}
          id="qrValue"
        />
      </div>
      <div className="mt-2 inputWrapper">
        <label htmlFor="qrSize">Size</label>
        <input
          className="w-32 p-2 border-2 border-gray-600"
          type="number"
          value={qrSize}
          onChange={(e) => setQrSize(Number(e.target.value))}
          id="qrSize"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="qrError">Error Correction</label>
        <select
          className="w-32 p-2 border-2 border-gray-600"
          value={qrError}
          onChange={(e) => setQrError(e.target.value as QRErrorCorrectionLevel)}
          id="qrError"
        >
          <option value={QRErrorCorrectionLevel.LOW}>Low</option>
          <option value={QRErrorCorrectionLevel.MEDIUM}>Medium</option>
          <option value={QRErrorCorrectionLevel.QUALITY}>Quality</option>
          <option value={QRErrorCorrectionLevel.HIGH}>High</option>
        </select>
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="bgColor">Background Color</label>
        <input
          className="h-8 p-2 border-2 border-gray-600"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          id="bgColor"
        />
      </div>
      <div className="mt-4 inputWrapper">
        <label htmlFor="fgColor">Foreground Color</label>
        <input
          className="h-8 p-2 border-2 border-gray-600"
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
          id="fgColor"
        />
      </div>
      <QRCodeCanvas
        value={qrValue}
        size={qrSize}
        level={qrError}
        bgColor={bgColor}
        fgColor={fgColor}
        className="m-auto mt-8"
        id="qr-code"
      />
      {/* Download button */}
      <div className="mt-8">
        <a
          className="w-32 p-2 border-2 border-gray-600"
          // Make the QR code downloadable as a PNG.
          href={
            typeof document !== "undefined"
              ? (
                  document.getElementById("qr-code")! as HTMLCanvasElement
                ).toDataURL("image/png")
              : ""
          }
          download="qr-code.png"
        >
          Download as PNG
        </a>
      </div>
    </div>
  );
};

export default Home;
