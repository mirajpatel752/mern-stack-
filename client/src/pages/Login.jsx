import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const URL = `${API}/api/auth/login`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-[89vh] bg-gray-100 flex justify-center items-center">
      <main>
        <div className="container">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl mb-3 text-black">Login Form</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};
