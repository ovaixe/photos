export default function PhotoCard({ image, handleModel }) {
  return (
    <div className="flex p-5">
      <a onClick={handleModel} className="flex">
        <img src={image} alt="img"></img>
      </a>
    </div>
  );
}
