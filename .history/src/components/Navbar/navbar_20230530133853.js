import styled from "styled-components";
import BooLogo from "../../assets/images/boo-logo.png";
import { GoSearch } from "react-icons/go";

function Navbar(props) {
  return (
    <Navigation>
      <div className="navContainer">
        <div className="logo">
          <img src={BooLogo} alt="Boo Logo" />
        </div>

        <div className="navSearch">
          <GoSearch className="iconSearch" />
          <input type="text" placeholder="Input title, genres, people" />
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .logo {
      width: 120px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }

    .navSearch {
      color: white;
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-black);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #555;
      }

      input {
        font-size: 14px;
        border: 1px solid #aaa;
        color: black;
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background: var(--color-background);

        /* background: #eee; */
        transition: width 0.5s;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
