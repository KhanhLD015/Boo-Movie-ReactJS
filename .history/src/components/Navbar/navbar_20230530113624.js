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

  .navContainer {
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }
`;
