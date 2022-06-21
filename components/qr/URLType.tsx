const URL = (props: {
  setQRValue: (value: string) => void;
  qrValue: string;
}) => {
  return (
    <div className="mt-4 inputWrapper">
      <label htmlFor="qrValue-URL">URL</label>
      <input
        className="w-1/2 p-2 border-2 border-gray-600"
        type="text"
        value={props.qrValue}
        onChange={(e) => props.setQRValue(e.target.value)}
        id="qrValue-URL"
      />
    </div>
  );
};

export default URL;
