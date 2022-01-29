import React, { useEffect, useState } from "react";
import News from "../News/News";
import "./Home.css";
import { fetchNews, setNewsToken } from "./newsAPI";

function setNewsWrapper(setNews, articles) {
  setNews(
    articles.map((article, idx) => {
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
      fetchNews().then((res) => {
        const { articles } = res.data;
        setNewsToken(articles);
        setNewsWrapper(setNews, articles);
      });
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
