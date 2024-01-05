import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
  const [formData, setFormData] = useState({
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@email.com",
    comments: "My Comments",
    isFriendly: true,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      //ES6 - computed properties [variable] as propertie name
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form className="form">
      <input
        type="text"
        name="firstName"
        id="firstName"
        className="form-input"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        className="form-input"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="email"
        name="email"
        id="email"
        className="form-input"
        placeholder="e-Mail@something.com"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        name="comments"
        id="comments"
        className="form-input"
        placeholder="Comments"
        onChange={handleChange}
        value={formData.comments}
      />
      <div className="form-input-checkbox">
        <input
          type="checkbox"
          name="isFriendly"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
    </form>
  );
};
export default Form1;
