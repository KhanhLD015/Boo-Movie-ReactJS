import BooLogo from "../../assets/images/boo-logo.png";

function Navbar(props) {
  return (
    <div>
      <div>
        <div>
          <img src={BooLogo} alt="Boo Logo" />
        </div>
        <div>icon</div>

        <div>
          <input type="text" placeholder="Input title, genres, people" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
