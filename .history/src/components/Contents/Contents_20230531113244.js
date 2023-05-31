import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../utils";

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
  const [showBtnLeft, setShowBtnLeft] = useState(false);
  const silderRef = useRef();
  const movieRef = useRef();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(0);

  const handleScrollRight = () => {
    const maxScrollLeft =
      silderRef.current.scrollWidth - silderRef.current.clientWidth;
    console.log(maxScrollLeft);
    if (silderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        silderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        silderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (silderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        silderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        silderRef.current.scrollLeft
      );
    }
  };

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) {
        handleScrollRight();
      }
      if (dragMove > dragDown) {
        handleScrollLeft();
      }
    }
  }, [dragMove, dragDown, isDrag]);

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };

  const onDragEnd = (e) => {
    setIsDrag(false);
  };

  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  return (
    <MoviesRowContainer draggable="false">
      <h1 className="heading">Boo Movie Originals</h1>
      <MoviesSlider
        ref={silderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
      >
        {movies.map((movie, index) => (
          <div
            key={index}
            className="movie-item"
            ref={movieRef}
            draggable="false"
          >
            <img src={movie} alt="" />
            <div className="movie-name">Movie Name</div>
          </div>
        ))}
      </MoviesSlider>

      <div className="btnLeft" onClick={handleScrollLeft}>
        <FiChevronLeft />
      </div>

      <div className="btnRight" onClick={handleScrollRight}>
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
    color: white;

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

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
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
    color: white;

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

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(${movies.length}, 300px);
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(${movies.length}, 250px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(${movies.length}, 200px);
  }

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
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
    }
  }
`;
