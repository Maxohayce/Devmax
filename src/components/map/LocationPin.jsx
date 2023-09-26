import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const LocationPin = ({ text }) => (
  <div className="pin">
    <FontAwesomeIcon icon={faLocation} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)


export default LocationPin;

