"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import LoginSection from "@/components/LoginSection ";


     

export default function LoginPage() {
  const [fullName, setFullName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number>(9876543210);
  const [password, setPassword] = useState<string>("");

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jwellery-f68r.onrender.com/api/users/register",
        {
          fullName: fullName,
          userName: userName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          role: "user",
        }
      );
      toast.success("Registration successful! Please login to continue.");
      console.log("Registration response:", response.data);

      // Reset form fields after successful registration
      setFullName("");
      setUserName("");
      setEmail("");
      setPhoneNumber(9876543210);
      setPassword("");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.msg);
        console.error("Error during registration:", error.response?.data.msg);
      }
    }
  };

  return (
    <div>
    <form
      onSubmit={registerUser}
      className="w-4/12 mx-auto my-15 shadow-lg border rounded-md py-10 px-4 flex flex-col gap-4 "
    >
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        type="text"
        placeholder="Enter your full name"
        className="border border-gray-200 outline-none rounded-md p-2 w-full"
      />
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        type="text"
        placeholder="Enter your username"
        className="border border-gray-200 outline-none rounded-md p-2 w-full"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        placeholder="Enter your email"
        className="border border-gray-200 outline-none rounded-md p-2 w-full"
      />
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.valueAsNumber)}
        required
        type="number"
        placeholder="Enter your phonenumber"
        className="border border-gray-200 outline-none rounded-md p-2 w-full"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        placeholder="Enter your password"
        className="border border-gray-200 outline-none rounded-md p-2 w-full"
      />
      <div className="flex justify-end ">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-6 py-2 hover:bg-blue-600 cursor-pointer  "
        >
          Signup{" "}
        </button>
      </div>
    </form>
      

<LoginSection />


    </div>
    
  );
}
