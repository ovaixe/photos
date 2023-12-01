export default function PhotoCard({ image, handleModel }) {
  return (
    <div className="flex p-5 items-center justify-center">
      <a onClick={handleModel} className="flex items-center justify-center">
        <img src={image} alt="img" className="object-cover w-96 h-96 rounded-3xl"></img>
      </a>
    </div>
  );
}
