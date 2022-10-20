import './index.css'


function Post(props) {
    return (
      <div className="main">
        <img src={props.profile} alt="..." id="profile"/>
        <label>{props.label}</label>
        <div>
          <p className="my-3">{props.text}</p>
          <img
            src="https://colorlib.com/etc/lf/Login_v18/images/bg-01.jpg"
            alt=""
            id="post1"
          />
        </div>
        <div id="buttons">
          <button className="my-3">like</button>
          <button className="my-3">comments</button>
          <button className="my-3">share</button>
        </div>
      </div>
    );
  }
  export default Post