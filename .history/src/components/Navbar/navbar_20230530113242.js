import BooLogo from "../../assets/images/boo-logo.png";
import { GoSearch } from "react-icons/go";

function Navbar(props) {
  return (
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
  );
}

export default Navbar;
