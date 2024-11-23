import React, { useState } from 'react';
import { WhiteLogo } from '../assets/image';
import { Link, useNavigate } from 'react-router-dom';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const respon = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      localStorage.setItem("token", respon.data.token);
      navigate("/?success=Login Berhasil");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Ada Kesalahan!");
        toast.error(error.response.data.message || "Login gagal :(");
      } else {
        setError("Login gagal :(");
        toast.error("Login gagal :(");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
  {/* Left Section */}
  <div className="w-1/2 px-6 py-10 md:px-20 md:py-20 flex flex-col justify-center h-full">
    <h1 className="text-4xl text-[#114232] font-bold mb-4">
      Selamat Datang !
    </h1>
    <p className="text-[#326B59] text-lg mb-8">
      Ayo tingkatkan produktivitas pertanian anda dengan Teknologi Modern
    </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label className="block mb-2 text-[#114232]">Username</label>
            <input
              type="text"
              className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-[#326B59] text-[#114232]"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-[#114232]">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-[#326B59] text-[#114232] pr-10"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#114232]"
              >
                {showPassword ? (
                  <RiEyeOffLine size={20} />
                ) : (
                  <RiEyeLine size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link to="#" className="text-[#114232] text-sm hover:underline">
              Lupa Kata Sandi ?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full bg-[#114232] text-white py-3 rounded-full hover:bg-[#326B59] transition duration-300 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <div className="text-center text-[#114232]">
            Tidak memiliki akun?{" "}
            <Link
              to="/Pages/SignUp"
              className="text-[#114232] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>

  {/* Right Section */}
  <div className="w-1/2 h-full">
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
  <ToastContainer />
    </div>
  );
};
  
export default Login;