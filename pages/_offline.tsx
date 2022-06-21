import { NextPage } from "next";

const OfflinePage: NextPage = () => {
  return (
    <div className="text-center w-screen">
      <h1 className="text-3xl font-bold mt-2">Offline</h1>
      <p className="text-lg mt-4">You are offline.</p>
    </div>
  );
};

export default OfflinePage;
