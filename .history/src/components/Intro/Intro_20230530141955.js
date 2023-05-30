import ReactPlayer from "react-player";

function Intro(props) {
  return (
    <div className="intro">
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={true}
        url="https://vimeo.com/335571409"
      />
      <div>
        <h1>BooMovie Elite</h1>
        <p>
          "Unleash your imagination with BooMovie - where every story comes to
          life!"
        </p>
      </div>
    </div>
  );
}

export default Intro;
