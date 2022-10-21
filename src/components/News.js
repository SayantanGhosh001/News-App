import "../css/News.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


const News = () => {
  const [news, setNews] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const NewsApi = () => {
    axios
      .get(
        "https://gnews.io/api/v4/search?q=example&token=0c3a1224df56bdff597bfb55a406b372&lang=en"
      )

      .then((response) => {
        console.log(response.data);
        setNews(response.data.articles);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    NewsApi();
  }, []);


  return (
    <>
      <div className="container">
        {news.map((curElm, index) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={curElm.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{curElm.title}</h5>
                <p className="card-text">
                  {curElm.description}
                  <span className="dots">...</span>
                  {/* <span className="more">{curElm.content}</span> */}
                  {
                  showMore
                    ? curElm.content
                    : `${curElm.content.substring(0,0)}`}
                  <button
                    className="btnn"
                    onClick={() => setShowMore(!showMore)}
                  >
                     {showMore ? "Show less" : "Show more"}
                  </button>
                  
                </p>
                <p className="card-text">
                  News Published by :{" "}
                  <a href={curElm.source.url}>
                    <b>{curElm.source.name}</b>
                  </a>{" "}
                  on {curElm.publishedAt}
                </p>
                <a
                  href={curElm.url}
                  className="btn btn-primary"
                  target={"__blank"}
                >
                  click Me
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
