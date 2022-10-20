import "../css/News.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./footer";

const News = () => {

    const [news, setNews] = useState([]);

    const NewsApi = () => {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=apple&from=2022-09-24&to=2022-09-24&sortBy=popularity&apiKey=a3a86201659146998465f1fa78cede9f"
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
    <Navbar/>
      <div className="container">
        {
        news.map((curElm) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={curElm.id}>
              <img src={curElm.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{curElm.title}</h5>
                <p className="card-text">{curElm.Description}</p>
                <p className="card-text">
                  News Published by : <b>{curElm.author}</b> on{" "}
                  {curElm.publishedAt}
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
      <Footer/>
    </>
  );
}

export default News