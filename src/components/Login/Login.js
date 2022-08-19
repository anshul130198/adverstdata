import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonService from "../../services/Common";
import strings from "../../utils/localization/localization";
import to from "../../utils/to";
import styles from "./Login.module.scss";
import BrandLogo from "../../assets/brandLogo.png";
import VisibilityOn from "../../assets/visibility_on.png";
import VisibilityOff from "../../assets/visibility_off.png";

const Login = () => {
  const navigate = useNavigate();
  const commonService = new CommonService();

  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
    loginError: "",
    passwordError: "",
    isValid: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // const validate = () => {
  //   const { login, password } = loginData;

  //   if (!login) {
  //     console.log('login', login)
  //     setLoginData({
  //       ...loginData,
  //       loginError: "login is Required",
  //       isValid: false,
  //     });
  //     return false;
  //   } else {
  //     setLoginData({
  //       ...loginData,
  //       loginError: "",
  //       isValid: true
  //     });
  //   }
  //   if (!password) {
  //     setLoginData({
  //       ...loginData,
  //       passwordError: "Password is Required",
  //       isValid: false,
  //     });
  //     return false;
  //   } else {
  //     setLoginData({
  //       ...loginData,
  //       passwordError: "",
  //       isValid: true
  //     });
  //   }
  //   return loginData.isValid;
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!validate()) {
    //   console.log("valid", validate());
    //   return;
    // } else {
    const body = [loginData];
    const [error, res] = await to(commonService.login(body));
    if (error && !res) {
      console.log("error", error);
      alert("Invalid password");
    } else {
      console.log("res", res);
      console.log("res[0]", res[0]);
      localStorage.removeItem("token");
      localStorage.setItem("token", JSON.stringify(res[0]));
      alert("login success");
      navigate("/jobs");
    }
    // }
  };

  const handleLoginData = ({ name, value }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div>
      <div className={styles["container"]}>
        <form>
          <div className={styles["brandContainer"]}>
            <img src={BrandLogo} className={styles["brandHeader"]} />
            <h1>{strings.LOGIN.toUpperCase()}</h1>
          </div>
          <div className={styles["loginContainer"]}>
            <input
              required={true}
              className={styles["login"]}
              type="text"
              id="login"
              name="login"
              placeholder="Enter Login"
              value={loginData.login}
              onChange={(e) => {
                handleLoginData({ name: "login", value: e.target.value });
              }}
            />
            {loginData.loginError && (
              <p className={styles["error"]}>{loginData.loginError}</p>
            )}
          </div>
          <br />
          <div className={styles["passwordContainer"]}>
            <input
              required={true}
              className={styles["password"]}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={(e) => {
                handleLoginData({ name: "password", value: e.target.value });
              }}
            />
            <img
              className={styles["passwordIcon"]}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              src={showPassword ? VisibilityOn : VisibilityOff}
            />
            {loginData.passwordError && (
              <p className={styles["error"]}>{loginData.passwordError}</p>
            )}
          </div>
          <br />
          <Link to="/jobs">
            <button className={styles["loginButton"]} onClick={handleSubmit}>
              login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
