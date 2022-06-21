import type { NextPage } from "next";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

enum QRErrorCorrectionLevel {
  LOW = "L",
  MEDIUM = "M",
  QUALITY = "Q",
  HIGH = "H",
}

const Home: NextPage = () => {
  const [qrValue, setQrValue] = useState("Hello, World!");
  const [qrSize, setQrSize] = useState(256);
  const [qrError, setQrError] = useState(QRErrorCorrectionLevel.MEDIUM);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");

  return (
    <div className="text-center w-screen">
      <h1 className="text-3xl font-bold mt-2">QR Code Generator</h1>
      <div className="mt-4">
        <p>Text</p>
        <input
          className="w-1/2 p-2 border-2 border-gray-600"
          type="text"
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p>Size</p>
        <input
          className="w-32 p-2 border-2 border-gray-600"
          type="number"
          value={qrSize}
          onChange={(e) => setQrSize(Number(e.target.value))}
        />
      </div>
      <div className="mt-4">
        <p>Error Correction</p>
        <select
          className="w-32 p-2 border-2 border-gray-600"
          value={qrError}
          onChange={(e) => setQrError(e.target.value as QRErrorCorrectionLevel)}
        >
          <option value={QRErrorCorrectionLevel.LOW}>Low</option>
          <option value={QRErrorCorrectionLevel.MEDIUM}>Medium</option>
          <option value={QRErrorCorrectionLevel.QUALITY}>Quality</option>
          <option value={QRErrorCorrectionLevel.HIGH}>High</option>
        </select>
      </div>
      <div className="mt-4">
        <p>Background Color</p>
        <input
          className="h-8 p-2 border-2 border-gray-600"
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <p>Foreground Color</p>
        <input
          className="h-8 p-2 border-2 border-gray-600"
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
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
          href={
            (document.getElementById("qr-code")! as HTMLCanvasElement).toDataURL("image/png")
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
