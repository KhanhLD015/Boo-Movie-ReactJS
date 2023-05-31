import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const movies = [
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Finnovavietnam.vn%2Fcac-yeu-to-thiet-ke-poster-phim-don-gian%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABAD",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolorme.vn%2Fblog%2Fposter-phim-phan-2-5-buoc-thiet-ke-poster-phim-an-tuong&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABAH",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Farena.fpt.edu.vn%2Fposter-phim%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABAR",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.doisongphapluat.com%2Fteaser-poster-goi-nhieu-to-mo-tu-phim-nha-ba-nu-cua-tran-thanh-a559257.html&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABAb",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcolorme.vn%2Fblog%2F129928%3Fsuggestion%3Dafter-post&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABAl",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Flaodongtre.laodong.vn%2Fphim-anh%2Fhoa-hau-tieu-vy-xuat-hien-ma-mi-trong-poster-phim-ve-thien-linh-cai-1089731.ldo&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABA5",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgaumedia.vn%2F5-buoc-co-ban-thiet-ke-poster-phim-that-su-an-tuong%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABBD",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Farena.fpt.edu.vn%2Fposter-phim%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABBN",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Finnovavietnam.vn%2Fcac-yeu-to-thiet-ke-poster-phim-don-gian%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABBX",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbazaarvietnam.vn%2Fphim-em-va-trinh-tung-poster-chinh-thuc-tiet-lo-kinh-phi-50-ty%2F&psig=AOvVaw08fTLv2kFqxq1_HHqHFs7z&ust=1685584439101000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDB3L65nv8CFQAAAAAdAAAAABBr",
];

function Contents(props) {
  return (
    <MoviesRowContainer>
      <h1 className="heading">Boo Movie Originals</h1>
      <MoviesSlider>
        {movies.map((movie, index) => {
          <div key={index} className="movie-item">
            <img src={movie} alt="" />
            <div className="movie-name">Movie Name</div>
          </div>;
        })}
      </MoviesSlider>
      <div className="btnLeft">
        <FiChevronLeft />
      </div>
      <div className="btnRight">
        <FiChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default Contents;

const MoviesRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-black);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 1.5rem;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: repeat(${movies.length}, 360px);
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth; // smooth scrolling

  &:hover .moive-item {
    opacity: 0.5;
  }

  .moive-item {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movie-name {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;
