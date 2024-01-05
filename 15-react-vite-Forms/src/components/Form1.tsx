import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);

  const handleChange = (event: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      //ES6 - computed properties [variable] as propertie name
      [event.target.name]: event.target.value,
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
    </form>
  );
};
export default Form1;
