import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName, lastName)

  const handleChangeFirst = (event: any) => {
    setFirstName(event.target.value)
  };
  const handleChangeLast = (event: any) => {
    setLastName(event.target.value)
  };

  return (
    <form className="form">
      <input
        type="text"
        name="firstName"
        id="firstName"
        className="form-input"
        placeholder="First Name"
        onChange={handleChangeFirst}
      />
      <input
        type="text"
        name="lasttName"
        id="lasttName"
        className="form-input"
        placeholder="Last Name"
        onChange={handleChangeLast}
      />
    </form>
  );
};
export default Form1;
