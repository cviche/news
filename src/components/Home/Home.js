import React, { useEffect, useState } from "react";
import News from "../News/News";
import "./Home.css";
import noImage from "../../images/question-image.jpeg";
import { fetchNews, setNewsToken } from "./newsAPI";

function setNewsWrapper(setNews, articles) {
  setNews(
    articles.map((article, idx) => {
      if (article.urlToImage === null) {
        article.urlToImage = noImage;
      }
      return (
        <News
          key={idx}
          title={article.title}
          image={article.urlToImage}
          url={article.url}
        />
      );
    })
  );
}

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchCurrentNews() {
      fetchNews()
        .then((res) => {
          const { articles } = res.data;
          setNewsToken(articles);
          setNewsWrapper(setNews, articles);
        })
        .catch((error) =>
          setNews(
            <h1 style={{ color: "red" }}>
              There was an error when trying to fetch the news from an API.
            </h1>
          )
        );
    }

    const token = localStorage.getItem("random-news-token");
    if (token !== null) {
      console.log("Fetching the news from the token instead...");
      setNewsWrapper(setNews, JSON.parse(token));
    } else {
      fetchCurrentNews();
    }
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Today's News</h1>
      <div className="news-component-container">{news}</div>
    </div>
  );
}

export default Home;
