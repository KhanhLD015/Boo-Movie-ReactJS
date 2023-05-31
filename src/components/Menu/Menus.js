import { FaHome, FaHotjar, FaStar } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import styled from "styled-components";
import MenuItem from "./MenuItem";

function Menus(props) {
  return (
    <MenusPane>
      <MenuItem name="Home" Icon={FaHome} />
      <MenuItem name="Trending" Icon={FaHotjar} />
      <MenuItem name="Top rated" Icon={FaStar} />
      <MenuItem name="Actions Movies" Icon={GiNinjaHeroicStance} />
      <MenuItem name="Comedy Movies" Icon={MdTheaterComedy} />
      <MenuItem name="Horror Movies" Icon={GiGhost} />
      <MenuItem name="Romance Movies" Icon={GiRomanToga} />
      <MenuItem name="Documentaries" Icon={GiBandageRoll} />
    </MenusPane>
  );
}

export default Menus;

const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background: rgba(228, 228, 220, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;
  text-align: center;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  &:hover {
    width: 200px;
    background: #fff;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .sub-menu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;

    .menu__icon {
      font-size: 30px;
      margin-right: 8px;
    }

    span {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.8);
      &:hover {
        font-weight: 760;
      }
    }
  }
`;
