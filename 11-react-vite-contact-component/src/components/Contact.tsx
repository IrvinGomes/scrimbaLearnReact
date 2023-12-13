import { iContact } from "../interfaces/iContact";

interface ContactProps extends iContact { };

const Contact: React.FC<ContactProps> = ({ name, phone, email }) => {
  return (
    <div className="contact-card">
      <img src="vite.svg" />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="vite.svg" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="vite.svg" />
        <p>{email}</p>
      </div>
    </div>
  )
}
export default Contact;