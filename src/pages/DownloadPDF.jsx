export default function DownloadPDF() {
  return (
    <div className="mx-auto flex max-h-[100dvh] flex-col items-center justify-center space-y-7 py-20 sm:max-w-screen-2xl">
      <h2 className="text-center text-3xl sm:w-[800px] sm:text-6xl">
        Untangling the transition from{" "}
        <span className="font-medium">student</span> to{" "}
        <span className="font-medium text-red-600 underline">adult</span>
      </h2>
      <img src="images/Frame.png" alt="vector" className="sm:w-[500px]" />
      <img src="images/QRCode.png" alt="vector" className="h-64 w-64" />
    </div>
  );
}
