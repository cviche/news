import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";

function App() {
  return (
    <div>
      <Header />
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

export default App;
