import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";

function Intro(props) {
  return (
    <div className="IntroContainer">
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
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;
      @media screen and (max-width: 800px) {
        left: 40px;
      }
      @media screen and (max-width: 600px) {
        left: 24px;
      }
    }
  }
`;
