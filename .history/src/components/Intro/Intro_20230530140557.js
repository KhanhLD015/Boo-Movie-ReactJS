import ReactPlayer from "react-player";

function Intro(props) {
  return (
    <div className="intro">
      <ReactPlayer />
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
