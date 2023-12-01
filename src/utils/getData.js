import axios from "axios";
import config from "../config/config.json";

// This function gets data by default
export async function getImages(setImages, setLoader) {
  try {
    const resp = await axios.get(config.URL, { params: config.params });

    if (resp.data.stat === "ok") {
      const img_data = {
        total_pages: resp.data.photos.pages,
        cur_page: resp.data.photos.page,
      };
      sessionStorage.setItem("img_data", JSON.stringify(img_data));
      const photos = resp.data.photos.photo;
      const img_urls = photos.map(
        (photo) =>
          `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      );

      setImages(img_urls);
      setLoader(false);
    } else throw Error(resp.data);
  } catch (err) {
    setLoader(false);
    console.log("[ERROR][getData:getImages]: ", err.message);
  }
}

// This function gets data on infinite scroll
export async function getMore(setImages) {
  try {
    let img_data = JSON.parse(sessionStorage.getItem("img_data"));
    if (img_data.cur_page === img_data.total_pages) return;

    img_data.cur_page += 1;
    sessionStorage.setItem("img_data", JSON.stringify(img_data));

    let new_params;
    if (img_data.searchedValue) {
      new_params = {
        ...config.search_params,
        page: img_data.cur_page,
        text: img_data.searchedValue,
      };
    } else {
      new_params = { ...config.params, page: img_data.cur_page };
    }

    const resp = await axios.get(config.URL, { params: new_params });

    if (resp.data.stat === "ok") {
      const photos = resp.data.photos.photo;
      const img_urls = photos.map(
        (photo) =>
          `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      );

      setImages((prev) => [...prev, ...img_urls]);
    } else throw Error(resp.data);
  } catch (err) {
    console.log("[ERROR][getData:getMore]: ", err.message);
  }
}

// This function get data on search
export async function getSearch(setImages, searchValue, setLoader) {
  try {
    const new_params = { ...config.search_params, text: searchValue };
    const resp = await axios.get(config.URL, { params: new_params });

    if (resp.data.stat === "ok") {
      const img_data = {
        total_pages: resp.data.photos.pages,
        cur_page: resp.data.photos.page,
        searchedValue: searchValue,
      };
      sessionStorage.setItem("img_data", JSON.stringify(img_data));

      const photos = resp.data.photos.photo;
      const img_urls = photos.map(
        (photo) =>
          `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      );

      setImages(img_urls);
      setLoader(false);
    } else throw Error(resp.data);
  } catch (err) {
    setLoader(false);
    console.log("[ERROR][getData:getSearch]: ", err.message);
  }
}
