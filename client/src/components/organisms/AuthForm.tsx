import { ChangeEvent, FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import { login, signup } from "../../api/apiService";
import bgImg from "../../assets/logo-bg-536x536.png";
import logo from "../../assets/logo-40x40.svg";

const AuthForm: FC<AuthFormProps> = ({ type }) => {
  let navigate = useNavigate();
  const [loadingState, setLoadingState] = useState<
    "registering" | "logging" | ""
  >("");

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });

  const [notification, setNotification] = useState<Notification>({
    message: "",
    type: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleAuth = async (type: "login" | "sign-up") => {
    const { email, password } = formValues;
    let errors: Errors = {};

    // Validation checks
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors = { ...errors, email: "Please enter a valid email address" };
    }

    if (!password || password.length < 6) {
      errors = {
        ...errors,
        password: "Password must be at least 6 characters long",
      };
    }

    if (Object.keys(errors).length === 0) {
      try {
        setErrors({
          email: "",
          password: "",
        });
        setNotification({
          message: "",
          type: "",
        });

        if (type === "login") {
          setLoadingState("logging");
          const response = await login(email, password);
          // console.log("🚀 ~ handleAuth ~ response:", response);

          if (response?.error)
            throw new Error(
              response?.error?.message || "Error encountered logging in"
            );

          if (response?.success) {
            localStorage.setItem("user", JSON.stringify(response.data));
            setNotification({
              message: "Logged in successfully",
              type: "error",
            });

            setLoadingState("");
            navigate("/");
          } else {
            setNotification({ message: response.message, type: "error" });
            setLoadingState("");
          }
        } else if (type === "sign-up") {
          setLoadingState("registering");
          const response = await signup(email, password);
          // console.log("🚀 ~ handleAuth ~ response:", response);

          if (response?.error)
            throw new Error(
              response?.error?.message || "Error encountered signing up"
            );

          if (response?.success) {
            setNotification({
              message: "Account created successfully",
              type: "success",
            });

            setLoadingState("");
            navigate("/login");
          } else {
            setNotification({ message: response.message, type: "error" });
            setLoadingState("");
          }
        }
      } catch (err) {
        setNotification({
          message:
            (err as any)?.message || "An error occurred. Please try again.",
          type: "error",
        });
        setLoadingState("");
        console.error(err);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div
      className="relative h-screen w-full bg-dark overflow-hidden px-[16px]"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "500px top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "800px",
      }}
    >
      <div className="filter-blur"></div>
      <div className="sm:w-[559px] h-full mx-auto flex flex-col items-center justify-center text-light text-center gap-y-10 ">
        <div className="flex flex-col gap-y-5">
          <h2 className="sm:text-[2.25rem] text-[1.5rem] leading-[2.723125rem] font-bold ">
            Welcome to Textuary
          </h2>
          <p className="text-base font-normal">
            Textuary is a personal AI-powered assistant, ready to help you
            generate image through local language text input. Let’s get started
            on this amazing journey together.
          </p>
        </div>

        <div className="sm:w-[416px] w-full bg-[rgba(25,25,25,0.1)] flex flex-col items-center justify-center border border-solid border-[rgba(254,254,254,0.1)] rounded-[20px] px-[20.5px] py-[28px]">
          <img className="pointer mb-[25px]" src={logo} alt="logo" />
          <h4 className="text-2xl font-bold mb-[40px]">
            {type === "sign-up" ? "Sign Up" : " Login "}
          </h4>

          {/* Notification */}
          {notification.message && (
            <div className={`mb-4 text-${notification.type}`}>
              {notification.message}
            </div>
          )}

          <div className="flex flex-col justify-start text-left  w-full">
            <div className=" flex flex-col justify-start gap-[2px] mb-[16px]">
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleChange}
              />
              <span className="text-error">{errors.email}</span>
            </div>
            <div className=" flex flex-col justify-start gap-[2px]mb-[28px]">
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span className="text-error mb-2">{errors.password}</span>
            </div>
            <CustomButton onClick={() => handleAuth(type)}>
              {type === "sign-up" && loadingState === "" && "Sign Up"}
              {type === "login" && loadingState === "" && "Login"}
              {loadingState === "registering" && "Signing Up..."}
              {loadingState === "logging" && "Logging in..."}
            </CustomButton>

            <p className="text-left text-gray mt-[12px]">
              {type === "sign-up" ? (
                <>
                  Already have an account?{" "}
                  <Link to="/login" className="text-left text-light">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-left text-light">
                    Sign Up
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

interface AuthFormProps {
  type: "sign-up" | "login";
}

interface Errors {
  email?: string;
  password?: string;
}

interface Notification {
  message: string;
  type: "success" | "error" | "";
}
