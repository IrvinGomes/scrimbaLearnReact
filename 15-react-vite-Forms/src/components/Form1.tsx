import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

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
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        className="form-input"
        placeholder="Last Name"
        onChange={handleChange}
      />
    </form>
  );
};
export default Form1;
