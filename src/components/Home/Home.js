import React, { useEffect, useState } from "react";
import News from "../News/News";
import "./Home.css";
import { fetchNews } from "./fetchNews";

function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchCurrentNews() {
      console.log("In Home.js");
      fetchNews().then((res) => {
        const { articles } = res.data;
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
      });
    }
    fetchCurrentNews();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Today's News</h1>
      <div className="news-component-container">{news}</div>
    </div>
  );
}

export default Home;
