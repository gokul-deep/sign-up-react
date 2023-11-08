import React, { Component } from "react";
import "./Signup.css";
import image from "../../images/logo-white3.png";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (this.isFormValid()) {
      const userData = {
        name,
        email,
        password,
      };
      console.log(userData);
    } else {
      alert("Please fill in the form correctly.");
    }
  };

  isFormValid = () => {
    const { name, email, password } = this.state;

    const nameValid = name.length >= 4 && name.length <= 20;
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password);

    return nameValid && emailValid && passwordValid;
  };

  render() {
    const { name, email, password } = this.state;
    const isFormValid = this.isFormValid();

    return (
      <div>
        <div className="main container-fluid">
          <div className="row">
            <div className="col-lg-5 left">
              <img src={image} alt="" className="logo" />
              <div className="content">
                <h2>Welcome Back!</h2>
                <h5>
                  To keep connected with us please login with your personal info
                </h5>
                <div className="button-container">
                  <button className="btn btn-outline-light">SIGN IN</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 right">
              <div className="content">
                <h2>Create Account</h2>
                <div className="social-container">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-google-plus-g"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <p>or use your email for registration :</p>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-div">
                    <input
                      className="input-box"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleInputChange}
                      required
                    />
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <div className="input-div">
                    <input
                      className="input-box"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleInputChange}
                      required
                    />
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="input-div">
                    <input
                      className="input-box"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.handleInputChange}
                      required
                    />
                    <i className="fa-solid fa-lock"></i>
                  </div>
                  <div className="button-container">
                    <button
                      className="btn btn-success"
                      type="submit"
                      disabled={!isFormValid}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
