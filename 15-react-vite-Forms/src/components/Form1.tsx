import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
  const [formData, setFormData] = useState({
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@email.com",
    comments: "My Comments",
    isFriendly: true,
    employment: "full-time",
    favColor:""
  });

  console.log(formData.favColor)

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
        <label htmlFor="isFriendly">Are you friendly? {!formData.isFriendly && "I can't believe you are a bad person :("}</label>
      </div>
      <fieldset className="form-input-fieldset">
        <legend>Current employment status</legend>
        <div>
          <input 
            type="radio" 
            name="employment" 
            id="unemployed" 
            value="unemployed" 
            onChange={handleChange} 
            checked={formData.employment==="unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>
        <div>
          <input 
            type="radio" 
            name="employment" 
            id="part-time" 
            value="part-time" 
            onChange={handleChange} 
            checked={formData.employment==="part-time"}
          />
          <label htmlFor="part-time">Part-time</label>
        </div>
        <div>
          <input 
            type="radio" 
            name="employment" 
            id="full-time" 
            value="full-time" 
            onChange={handleChange} 
            checked={formData.employment==="full-time"}
          />
          <label htmlFor="full-time">Full-time</label>
        </div>
      </fieldset>
      <select name="favColor" id="favColor" className="form-input-select" value={formData.favColor} onChange={handleChange}>
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </form>
  );
};
export default Form1;
