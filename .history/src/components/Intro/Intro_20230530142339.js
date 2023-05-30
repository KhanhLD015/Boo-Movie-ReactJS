import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";

function Intro(props) {
  return (
    <div className="intro-container">
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={true}
        url="https://vimeo.com/335571409"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">BooMovie Elite</h1>
        <p className="overviewIntro">
          "Unleash your imagination with BooMovie - where every story comes to
          life!"
        </p>
      </div>
      <VscMute className="iconMute" />
    </div>
  );
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-black);

  .videoIntro
`;