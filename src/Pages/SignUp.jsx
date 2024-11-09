import React, { useState } from 'react'
import { WhiteLogo } from '../assets/image'
import { Link, useNavigate } from 'react-router-dom'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'
import { RiGoogleFill } from "react-icons/ri"

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Pages/Login');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex bg-white">
      {/* Left Section */}
      <div className="w-1/2 px-6 py-10 md:px-20 md:py-20 flex flex-col justify-center">
        <h1 className="text-4xl text-[#114232] font-bold mb-4">
          Selamat Datang Kembali !
        </h1>
        <p className="text-[#326B59] text-lg mb-8">
          Ayo tingkatkan produktivitas pertanian anda dengan Teknologi Modern
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label className="block mb-2 text-[#114232]">
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-[#326B59] text-[#114232]"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#114232]">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-[#326B59] text-[#114232]"
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label className="block mb-2 text-[#114232]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-[#326B59] text-[#114232] pr-10"
                placeholder="Masukkan password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#114232]"
              >
                {showPassword ? <RiEyeOffLine size={20} /> : <RiEyeLine size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#114232] text-white py-3 rounded-full hover:bg-[#326B59] transition duration-300"
          >
            Create Account
          </button>

          <div className="text-center text-[#114232] font-bold">
            OR
          </div>

          <button
            type="button"
            className="group w-full border-2 border-[#114232] text-[#114232] py-3 rounded-full hover:bg-[#114232] hover:text-white transition duration-300 flex items-center justify-center gap-2"
          >
            <RiGoogleFill size={24} className="text-[#114232] group-hover:text-white transition duration-300" />
            Sign Up with Google
          </button>

          <div className="text-center text-[#114232]">
            Sudah memiliki akun? {" "}
            <Link to="/Pages/Login" className="text-[#114232] font-bold hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <div className="bg-[#114232] h-full rounded-l-[25px] flex items-center justify-center">
          <div className="flex items-center gap-4">
            <img
              src={WhiteLogo}
              alt="Logo Petani GO"
              className="w-48 h-48"
            />
            <h2 className="text-white text-5xl font-bold">
              Petani GO
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp