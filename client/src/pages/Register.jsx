import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();

  const URL = `${API}/api/auth/register`;

  // handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
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
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register ", error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 text-black min-h-screen flex items-center justify-center py-12">
        <main className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username"
                required
                value={user.username}
                onChange={handleInput}
                className="mt-1 w-full px-3 py-2  border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                value={user.email}
                onChange={handleInput}
                className="mt-1 w-full px-3 py-2  border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
                value={user.phone}
                onChange={handleInput}
                className="mt-1 w-full px-3 py-2  border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
                value={user.password}
                onChange={handleInput}
                className="mt-1 w-full px-3 py-2  border border-gray-700 rounded shadow-sm focus:outline-none focus:ring focus:ring-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-white text-black font-semibold rounded shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Register Now
            </button>
          </form>
        </main>
      </section>
    </>
  );
};
