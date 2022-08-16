import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CommonService from "../../services/Common";
import strings from "../../utils/localization/localization";
import to from "../../utils/to";
import styles from "./Login.module.scss";
import BrandLogo from "../../assets/brandLogo.png";

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

  const validate = () => {
    const { login, password } = loginData;

    if (!login) {
      console.log('login', login)
      setLoginData({
        ...loginData,
        loginError: "login is Required",
        isValid: false,
      });
      return false;
    } else {
      setLoginData({
        ...loginData,
        loginError: "",
        isValid: true
      });
    }
    if (!password) {
      setLoginData({
        ...loginData,
        passwordError: "Password is Required",
        isValid: false,
      });
      return false;
    } else {
      setLoginData({
        ...loginData,
        passwordError: "",
        isValid: true
      });
    }
    return loginData.isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      console.log("valid", validate());
      return;
    } else {
      console.log("vali", validate());
      const body = [loginData];

      const [error, res] = await to(commonService.login(body));
      if (error) {
        console.log("error", error);
        alert("login fail");
      } else {
        console.log("res", res);
        alert("login success");
        navigate("/jobs");
      }
    }
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
            {loginData.loginError && <p className={styles["error"]}>{loginData.loginError}</p>}
          </div>
          <br />
          <div className={styles["passwordContainer"]}>
            <input
              className={styles["password"]}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={(e) => {
                handleLoginData({ name: "password", value: e.target.value });
              }}
            />
            {loginData.passwordError && <p className={styles["error"]}>{loginData.passwordError}</p>}
          </div>
          <br />
          <Link to="/jobs">
            <button onClick={handleSubmit}>login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
