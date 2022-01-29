import React from "react";
import News from "../News/News";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Today's News</h1>
      <div className="news-component-container">
        <News
          title="This is the title of the story."
          image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
        />
        <News
          title="This is the title of the story."
          image="https://wallpaperaccess.com/full/154009.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
