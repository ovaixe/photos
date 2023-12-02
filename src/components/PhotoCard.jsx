export default function PhotoCard({ image, handleModel }) {
  return (
    <div className="flex items-center justify-center">
      <a onClick={handleModel} className="flex items-center justify-center">
        <img src={image} alt="img" className=" w-96 h-80 rounded-xl"></img>
      </a>
    </div>
  );
}
