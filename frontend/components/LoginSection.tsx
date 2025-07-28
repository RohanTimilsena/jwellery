"use client"
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function LoginSection() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://jwellery-f68r.onrender.com/api/users/login",{
          email: email,
          password: password,
        });
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
      toast.success("Login successfull");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Something went wrong", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="border border-gray-200 p-8 rounded-md space-y-6 w-full max-w-sm mx-auto"
      >
        <h1 className="text-3xl font-semibold text-center">Login</h1>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="border border-gray-200 outline-none rounded-md px-4 py-2 w-full"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="border border-gray-200 outline-none rounded-md px-4 py-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600 transition-colors duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
