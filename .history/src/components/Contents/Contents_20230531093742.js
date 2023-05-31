import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const movies = [
  "https://i.pinimg.com/564x/e7/25/a5/e725a5f134277a2e26480db498ebdf48.jpg",
  "https://i.pinimg.com/564x/a5/66/2d/a5662d6a1e6f5f196c34e2a9f3fabb1c.jpg",
  "https://i.pinimg.com/564x/31/21/53/3121534a54680876fbc01b9c16240fd1.jpg",
  "https://i.pinimg.com/564x/ce/e1/55/cee155bbc38c0b2dc1eae838ed510cc5.jpg",
  "https://i.pinimg.com/564x/c9/c1/cc/c9c1cc9ea31132b52327e8fc51eea6f1.jpg",
  "https://i.pinimg.com/736x/8b/98/e0/8b98e02ffd887e694ab1c53f733bea97.jpg",
  "https://i.pinimg.com/564x/ff/51/94/ff51944843c14ad15ea1fc1056ee3bce.jpg",
  "https://i.pinimg.com/564x/e0/cc/67/e0cc670c8b292b6eb77d406388d50835.jpg",
];

function Contents(props) {
  return (
    <MoviesRowContainer>
      <h1 className="heading">Boo Movie Originals</h1>
      <MoviesSlider>
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie} alt="" />
            <div className="movie-name">Movie Name</div>
          </div>
        ))}
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
    font-size: 18px;
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

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
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

  &:hover .movie-item {
    opacity: 0.5;
  }

  .movie-item {
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
      transform: scale(1.15);
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
