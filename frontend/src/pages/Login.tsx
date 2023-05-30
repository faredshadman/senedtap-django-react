import { FormEvent, useId, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../lib/axios";
interface IUser {
  access: string;
  refresh: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === "username" ? setUsername(value) : setPassword(value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    try {
      const response = await axiosInstance.post("/login/", body);
      const user: IUser = response.data;
      localStorage.setItem("ST_Atoken", user.access);
      localStorage.setItem("ST_Rtoken", user.refresh);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const usernameId = useId();
  const passwordId = useId();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={usernameId}></label>
          <input
            type="text"
            placeholder="username"
            name="username"
            id={usernameId}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={passwordId}></label>
          <input
            type="password"
            placeholder="password"
            name="password"
            id={passwordId}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
