import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeMaker = () => {
  const [qrInput, setQrInput] = useState("At least Enter some text first");
  const [input, setInput] = useState("At least Enter some text first");

  return (
    <div className="t-container">
      <h1 className="t-h1">Project 7 : QrCodeMaker</h1>
      <div>
        <input className="border p-1 text-center" onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter here then click the btn" />
      </div>
      <button className="btn" onClick={()=>setQrInput(input)}>Generate</button>

      <div>
        <QRCode id="qr-code-value" value={qrInput}/>
      </div>
    </div>
  );
};

export default QrCodeMaker;
