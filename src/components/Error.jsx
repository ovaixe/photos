export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="flex items-center justify-center bg-red-400 text-white text-lg font-semibold lg:text-xl flg:ont-bold p-3 rounded-xl">
        Error: {message}
      </div>
    </div>
  );
}
