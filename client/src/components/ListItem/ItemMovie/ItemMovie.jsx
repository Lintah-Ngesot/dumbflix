import "./ItemMovie.scss";

import { images } from "../../../contstans";
import { useState } from "react";
import { Link } from "react-router-dom";

// const cardImages = [images.movie1, images.movie2, images.movie3, images.movie4, images.movie5, images.movie6, images.movie7, images.movie8, images.movie9, images.movie10, images.movie11];

const ListItem = ({ MovieImg, title, year, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = [images.video];

  return (
    <div className="app__listItem" style={{ left: isHovered && index * 225 - 50 + index * 2.5 }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="app__listItem-card">
        <img src={MovieImg} alt="movies" />

        {isHovered && (
          <>
            <Link to="/detail-movies">
              <video src={trailer} autoPlay={true} loop />
            </Link>
            <div className="itemInfo">
              <span>{title}</span>
              <span className="item__year">{year}</span>
            </div>
          </>
        )}
      </div>
      {/* {cardImages.map((image, index) => (
        <div className="app__listItem-card" key={`app__image-${index + 1}`}>
          <img src={image} alt="images-card" />
        </div>
      ))} */}
    </div>
  );
};

export default ListItem;
