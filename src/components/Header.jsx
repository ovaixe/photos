import { useState, useContext } from "react";
import { getSearch } from "../utils/getData";
import { ImagesContext } from "./contexts/ImagesContext";
import { LoaderContext } from "./contexts/LoaderContext";
import { ModelBoxContext } from "./contexts/ModelBoxContext";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const imagesContext = useContext(ImagesContext);
  const loaderContext = useContext(LoaderContext);
  const modelBoxContext = useContext(ModelBoxContext);

  const handleSuggestions = (e) => {
    setSearchValue(e.target.value);
    let suggestions = localStorage.getItem("suggestions");
    if (suggestions && e.target.value) {
      suggestions = JSON.parse(suggestions);
      const temp = suggestions.filter((sug) => sug.includes(e.target.value));
      temp.length !== 0 ? setSuggestions(temp) : setSuggestions([]);
    } else setSuggestions([]);
  };

  const handleSearch = (e) => {
    if ((e.key === "Enter" && e.target.value) || e.target.id === "sug") {
      setSuggestions([]);
      setSearchValue(e.target.value);
      loaderContext.setLoader(true);
      getSearch(e.target.value)
        .then((data) => {
          imagesContext.setImages(data);
          loaderContext.setLoader(false);
        })
        .catch((err) => {
          console.log("ERROR: ", err.message);
          loaderContext.setLoader(false);
        });
      let suggestions = localStorage.getItem("suggestions");
      if (suggestions) {
        suggestions = JSON.parse(suggestions);
        if (!suggestions.includes(e.target.value)) {
          suggestions.push(e.target.value);
          localStorage.setItem("suggestions", JSON.stringify(suggestions));
        }
      } else {
        const suggestions = [e.target.value];
        localStorage.setItem("suggestions", JSON.stringify(suggestions));
      }
    }
  };

  const handleModelBox = () => {
    modelBoxContext.setShowModel(false);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-28 bg-gray-800 sticky top-0 z-50" onClick={handleModelBox}>
      <div className="text-lg text-white">Search Photos</div>
      <input
        type="text"
        id="searchValue"
        value={searchValue}
        onChange={handleSuggestions}
        onKeyDown={handleSearch}
        className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] md:w-[40%] lg:w-[30%] p-2.5"
        placeholder="search"
      ></input>
      {suggestions.length !== 0 && (
        <div className="w-[50%] md:w-[40%] lg:w-[30%] h-auto top-[85%] absolute rounded-md bg-white border border-gray-300 p-3 flex flex-col space-y-3">
          {suggestions.map((sug, index) => (
            <div className="flex" key={index}>
              <button
                id="sug"
                value={sug}
                className="px-2 py-1 rounded-md bg-gray-200 flex"
                onClick={handleSearch}
              >
                {sug}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
