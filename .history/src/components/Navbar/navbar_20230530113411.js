import styled from "styled-components";
import BooLogo from "../../assets/images/boo-logo.png";
import { GoSearch } from "react-icons/go";

function Navbar(props) {
  return (
    <Navigation>
      <div>
        <div>
          <div>
            <img src={BooLogo} alt="Boo Logo" />
          </div>

          <div>
            <GoSearch />
            <input type="text" placeholder="Input title, genres, people" />
          </div>
        </div>
      </div>
    </Navigation>
  );
}

export default Navbar;

const Navigation = styled.div`
  display: flex;
`;