import React, { useEffect } from "react";
import { useFormContext, useLoginContext } from "../Components/Context";
import { useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";

type Props = {};

let inputs = [
	{
		id: 1,
		name: "name",
		type: "text",
		placeholder: "Full Name",
		label: "Full Name",
		required: true,
	},
	{
		id: 2,
		name: "age",
		type: "text",
		placeholder: "Age",
		label: "Age",
		required: true,
	},
	{
		id: 3,
		name: "birthday",
		type: "date",
		placeholder: "Date of Birth",
		label: "Date of Birth",
		required: true,
	},
	{
		id: 4,
		name: "email",
		type: "text",
		placeholder: "Email",
		label: "Email",
		required: true,
	},
	{
		id: 5,
		name: "password",
		type: "password",
		placeholder: "Password",
		label: "Password",
		autoComplete: "on",
		required: true,
	},
	{
		id: 6,
		name: "confirmPassword",
		type: "password",
		placeholder: "Confirm Password",
		label: "Confirm Password",
		autoComplete: "on",
		required: true,
	},
];

const Login = (props: Props) => {
	let { loggedIn } = useLoginContext();
	let { formData, setFormData } = useFormContext(); 

	const navigate = useNavigate();
	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const updateForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (setFormData) {
      setFormData(prev => {
        const { name, value } = e.target as HTMLInputElement;
        return {
          ...prev,
          [name]: value
        };
      });
    }

    console.log(formData)
  };
		

	return (
		<section className="loginPage">
      <div>
      <h1>Login</h1>
			{/* <p>{loggedIn ? "true" : "false"}</p> */}
      </div>
		
			<form onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<FormInput key={input.id} {...input} onChange={updateForm} />
				))}

				<button className="submit">Submit</button>
			</form>
		</section>
	);
};

export default Login;
