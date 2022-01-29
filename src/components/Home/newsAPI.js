import axios from "axios";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

export async function fetchNews() {
  try {
    console.log("Fetching the news from the API...");
    const response = await axios.get(BACKEND_SERVER);
    const { status } = response.data;

    if (status !== "ok") {
      throw new Error("Error fetching from the news API.");
    }

    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject([]);
  }
}

export function setNewsToken(articles) {
  localStorage.setItem("random-news-token", JSON.stringify(articles));
}
