import React, { Component } from "react";
import FormInput from "../FormInput/FormInput.jsx";
import CustomButton from "../CustomButton/CustomButton.jsx";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already got an account 🤠 😎</h2>
        <span>sign-in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <CustomButton type="submit" value="submit ">
            Sign-In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
