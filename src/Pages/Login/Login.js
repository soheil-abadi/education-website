import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Menu/Menu";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    if (name == "sp" && pass == "1234") {
      document.cookie =
        "username=sp; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
      navigate("/Panel");
    } else {
      Swal.fire({
        title: "ناموفق!",
        text: "نام کاربری یا رمز عبور اشتباه میباشد",
        icon: "error",
        confirmButtonText: "بستن",
      });
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Menu />
      
      <div className="base-login">
      <p style={{fontSize:"14px"}} className="text-center">با یوزرنیم sp و پسورد 1234 وارد صفحه پنل شوید</p>
        <div className="login-page">
          <div className="form">
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="password" placeholder="password" />
              <input type="text" placeholder="email address" />
              <button>create</button>
              <p className="message">
                Already registered? <a href="#">Sign In</a>
              </p>
            </form>
            <form className="login-form" onSubmit={onFormSubmit}>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPass(e.target.value)}
              />

              <button type="submit" onClick={submitHandler}>
                login
              </button>

              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
