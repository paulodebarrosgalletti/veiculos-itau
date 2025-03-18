import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../styles/Vehicles.css";

export default function VehicleCard({ vehicle, onContact }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = vehicle.images.length;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  return (
    <div className="vehicle-card-box">
      <div className="vehicle-image-box">
        <div className="vehicle-image-counter">{currentImageIndex + 1} / {totalImages}</div>

        <button className="vehicle-carousel-btn left" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img src={vehicle.images[currentImageIndex]} alt={vehicle.model} />
        <button className="vehicle-carousel-btn right" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="vehicle-body">
        <div className="vehicle-header-box">
          <h3 className="vehicle-name">{vehicle.model}</h3>
          <button 
            className={`vehicle-favorite-btn ${isFavorite ? "active" : ""}`} 
            onClick={toggleFavorite}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <p className="vehicle-details">{vehicle.version}</p>

        <hr className="vehicle-divider" />

        <p className="vehicle-price-label">{vehicle.price}</p>

        <div className="vehicle-data-box">
          <div className="vehicle-column">
            <p><a href="#" className="dealer-link">{vehicle.locadora}</a></p>
            <p className="location-info">{vehicle.cidade}</p>
          </div>
          <div className="vehicle-column">
            <p className="vehicle-year-label">{vehicle.anoModelo}</p>
            <p className="vehicle-km-label">{vehicle.kmtragem}</p>
          </div>
        </div>

        <button className="vehicle-contact-btn" onClick={() => onContact(vehicle)}>
          Contato
        </button>
      </div>
    </div>
  );
}
