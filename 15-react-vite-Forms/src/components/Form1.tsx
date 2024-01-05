import { useId, useState } from "react";

const Form1: React.FC<any> = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isFriendly: true,
		employment: "full-time",
		favColor:""
	});

  const id = useId()

	const handleChange = (event: any) => {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			//ES6 - computed properties [variable] as propertie name
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (event:any)=>{
    event.preventDefault()
    console.log(formData)
	}

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label htmlFor={id+"firstName"}>First Name</label>
      <input
				type="text"
				name="firstName"
				id={id+"firstName"}
				className="form-input"
				onChange={handleChange}
				value={formData.firstName}
        required
			/>
			<label htmlFor={id+"lastName"}>Last Name</label>
      <input
				type="text"
				name="lastName"
				id={id+"lastName"}
				className="form-input"
				onChange={handleChange}
				value={formData.lastName}
        required
			/>
			<label htmlFor={id+"email"}>e-Mail</label>
      <input
				type="email"
				name="email"
				id={id+"email"}
				className="form-input"
				onChange={handleChange}
				value={formData.email}
        required
			/>
      <label htmlFor={id+"comments"}>Comments</label>
			<textarea
				name="comments"
				id={id+"comments"}
				className="form-input"
				onChange={handleChange}
				value={formData.comments}
        required
			/>
			<div className="form-input-checkbox">
				<input
					type="checkbox"
					name="isFriendly"
					id={id+"isFriendly"}
					checked={formData.isFriendly}
					onChange={handleChange}
				/>
				<label htmlFor={id+"isFriendly"}>Are you friendly? {!formData.isFriendly && "I can't believe you are a bad person :("}</label>
			</div>
			<fieldset className="form-input-fieldset">
				<legend>Current employment status</legend>
				<div>
					<input 
						type="radio" 
						name="employment" 
						id={id+"unemployed" }
						value="unemployed" 
						onChange={handleChange} 
						checked={formData.employment==="unemployed"}
					/>
					<label htmlFor={id+"unemployed"}>Unemployed</label>
				</div>
				<div>
					<input 
						type="radio" 
						name="employment" 
						id={id+"part-time" }
						value="part-time" 
						onChange={handleChange} 
						checked={formData.employment==="part-time"}
					/>
					<label htmlFor={id+"part-time"}>Part-time</label>
				</div>
				<div>
					<input 
						type="radio" 
						name="employment" 
						id={id+"full-time" }
						value="full-time" 
						onChange={handleChange} 
						checked={formData.employment==="full-time"}
					/>
					<label htmlFor={id+"full-time"}>Full-time</label>
				</div>
			</fieldset>
      <label htmlFor={id+"favColor"}>Favorite Color</label>
			<select 
        name="favColor" 
        id={id+"favColor" }
        className="form-input-select" 
        value={formData.favColor} 
        onChange={handleChange}
        required
      >
				<option value="" disabled>-- Choose --</option>
				<option value="red">Red</option>
				<option value="orange">Orange</option>
				<option value="yellow">Yellow</option>
				<option value="green">Green</option>
				<option value="blue">Blue</option>
				<option value="indigo">Indigo</option>
				<option value="violet">Violet</option>
			</select>
			<button className="form-input-button">Submit</button>
		</form>
	);
};
export default Form1;
