import { iContact } from "../interfaces/iContact";

export function Contact(contact:iContact) {
  const {name, phone, email}= contact;
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