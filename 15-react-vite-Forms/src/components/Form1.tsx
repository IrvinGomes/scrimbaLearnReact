import { useState } from "react";

const Form1: React.FC<any> = ({}) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		comments: "",
		isFriendly: true,
		employment: "full-time",
		favColor:""
	});

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
			<input
				type="text"
				name="firstName"
				id="firstName"
				className="form-input"
				placeholder="First Name"
				onChange={handleChange}
				value={formData.firstName}
        required
			/>
			<input
				type="text"
				name="lastName"
				id="lastName"
				className="form-input"
				placeholder="Last Name"
				onChange={handleChange}
				value={formData.lastName}
        required
			/>
			<input
				type="email"
				name="email"
				id="email"
				className="form-input"
				placeholder="e-Mail@something.com"
				onChange={handleChange}
				value={formData.email}
        required
			/>
			<textarea
				name="comments"
				id="comments"
				className="form-input"
				placeholder="Comments"
				onChange={handleChange}
				value={formData.comments}
        required
			/>
			<div className="form-input-checkbox">
				<input
					type="checkbox"
					name="isFriendly"
					id="isFriendly"
					checked={formData.isFriendly}
					onChange={handleChange}
          required
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
			<select 
        name="favColor" 
        id="favColor" 
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
