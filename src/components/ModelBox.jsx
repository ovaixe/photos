export default function ModelBox({ imgUrl, handleModel }) {
  return (
    <div
      tabIndex={-1}
      className="animate-wiggle w-auto h-auto z-[1055] border-4 border-gray-500 bg-gray-500 fixed top-52 rounded-lg flex items-center justify-center drop-shadow-2xl shadow-2xl"
    >
      <img className="rounded-lg" src={imgUrl} alt="img"></img>
      <button
        className="fixed top-0 right-0 text-gray-900 bg-gray-500 rounded-md p-1"
        onClick={handleModel}
      >
        Close
      </button>
    </div>
  );
}
