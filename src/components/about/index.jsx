import { useState, useEffect } from "react";
import "./index.css";
// import { useEffect } from "react";
import Post from "./../post"
import axios from "axios";
import moment from 'moment'


const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2fad53c28a024172b8b74cafaa5f2af2"
      )
      .then((responce) => {
        console.log("responce", responce.data.articles);
        setPosts(responce.data.articles);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);



  return (

   posts.map((eachPost, i) => (

    <div className="article">
    <div><h1><a href="">{eachPost.title}:</a></h1></div>
    {/* <div><h1>Author:</h1>{eachPost.author}</div> */}
    <div><p>{eachPost.content}:</p></div>
    <div>{moment(eachPost.publishedAt).format('MMMM Do YYYY, h:mm: a')}</div>
    <img src={eachPost.urlToImage} alt="" className="my-3"/>
    </div>

   ))
  )
//============================================================

// const [posts1, setPosts1] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=apple&from=2022-10-19&to=2022-10-19&sortBy=popularity&apiKey=2fad53c28a024172b8b74cafaa5f2af2"
//       )
//       .then((responce) => {
//         console.log("responce", responce.data.articles);
//         setPosts(responce.data.articles);
//       })
//       .catch((err) => {
//         console.log("error", err);
//       });
//   }, []);



//   return (

//    posts.map((eachPost1, i) => (

//     <div className="article"><hr />
//     <div><h1><a href="">{eachPost1.title}:</a></h1></div>
//     {/* <div><h1>Author:</h1>{eachPost.author}</div> */}
//     <div><p>{eachPost1.content}:</p></div>
//     <div>{moment(eachPost1.publishedAt).format('MMMM Do YYYY, h:mm: a')}</div>
//     <img src={eachPost1.urlToImage} alt="" className="my-3"/>
//     </div>

//    ))
//   )

};
export default Home;
