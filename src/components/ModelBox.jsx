export default function ModelBox({ imgUrl, handleModel }) {
  return (
    <div
      tabIndex={-1}
      className="flex flex-col animate-wiggle z-[1055] border-4 border-gray-800 bg-gray-800 fixed top-32 rounded-lg"
    >
      <div className="flex items-center justify-end p-1">
        <button className="text-white bg-red-400 rounded-full" onClick={handleModel}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6" />
            <path d="m9 9 6 6" />
          </svg>
        </button>
      </div>
      <img className="rounded-lg" src={imgUrl} alt="img"></img>
    </div>
  );
}
