import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchNews() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    const { status } = response.data;

    if (status !== "ok") {
      throw new Error("Error fetching from the news API.");
    }

    console.log("Fetching the news succeeded.");
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject([]);
  }
}
