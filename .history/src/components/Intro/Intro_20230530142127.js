import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";

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
      <div className="infoIntro">
        <h1 className="headingIntro">BooMovie Elite</h1>
        <p className="overviewIntro">
          "Unleash your imagination with BooMovie - where every story comes to
          life!"
        </p>
      </div>
    </div>
  );
}

export default Intro;
