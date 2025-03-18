import "../styles/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <FontAwesomeIcon icon={faTimes} className="close-btn" onClick={onClose} />

        <div className="user-section">
  <div className="profile-container">
    <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
    <p className="user-name"><strong>Nome:</strong> {vehicle.seller.name}</p>
  </div>
  <p className="user-phone"><strong>Telefone:</strong> {vehicle.seller.phone}</p>
</div>

        <p className="user-email"><strong>Email:</strong> {vehicle.seller.email}</p>
        <hr className="line" />

        <div className="info-section">
          <p className="info-title"><strong>Modelo:</strong> {vehicle.model}</p>
          <p className="info-year">{vehicle.anoModelo}</p>
        </div>

        <div className="info-extra">
          <p className="info-price">{vehicle.price}</p>
          <p className="info-km">{vehicle.kmtragem}</p>
        </div>

      </div>
    </div>
  );
}
