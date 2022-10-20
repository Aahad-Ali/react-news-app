import { useState, useEffect } from "react";
import "./index.css";
// import { useEffect } from "react";
// import Post from "./../post";
import axios from "axios";
import moment from "moment";

const Home = (e) => {
  // e.preventDefault();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-10-19&to=2022-10-19&sortBy=popularity&apiKey=2fad53c28a024172b8b74cafaa5f2af2"
      )
      .then((responce) => {
        console.log("responce", responce.data.articles);
        setPosts(responce.data.articles);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return posts.map((eachPost, i) => (
    <div className="article">
      <div>
        <img src={eachPost.urlToImage} alt="..." className="profile mx-1" />
        <label>
          <div>{eachPost.author}</div>
        </label>
      </div>
      <h2>{eachPost.title}</h2>
      {/* <div><h1>Author:</h1>{eachPost.author}</div> */}
      <div>
        <p>{eachPost.content}:</p>
        <a href={eachPost.url} target="_blank" rel="noreferrer">
          Read more...
        </a>
      </div>
      <div>{moment(eachPost.publishedAt).format("MMMM Do YYYY, h:mm: a")}</div>
      <img src={eachPost.urlToImage} alt="..." className="my-3 postImage" />
      <hr />
      <div id="buttons">
        <button className="">like</button>
        <button className="">comments</button>
        <button className="">share</button>
      </div>
      <hr />
    </div>
  ));
};
export default Home;
