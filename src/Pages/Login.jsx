import React from 'react'
import { WhiteLogo } from '../assets/image'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <section>
      <div className="flex min-h-screen">
        {/* Left Section */}
        <div className="flex-1 bg-white px-6 py-10 md:px-20 md:py-20 flex flex-col justify-center items-center mx-auto">
          <h1 className="text-4xl md:text-4xl text-[#114232] font-bold mb-4 text-left">
            Selamat Datang Kembali!
          </h1>
          <p className="text-[#326B59] text-lg md:text-lg mb-6 text-left">
            Ayo tingkatkan produktivitas pertanian anda dengan Teknologi Modern
          </p>

          <form className="w-full max-w-sm space-y-4 text-left">
            <div>
              <label className="block mb-2  font-medium text-[#114232]">
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-[#114232]">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border-2 border-[#114232] rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-[#114232] text-sm md:text-md">
                Lupa Kata Sandi?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-lg font-bold bg-[#114232] text-white py-3 rounded-full hover:bg-green-800 transition duration-300 ease-in-out"
            ><Link to='/Pages/Home'>Login</Link></button>
          </form>

          <p className="mt-6 text-left text-[#114232]">
            Tidak memiliki akun?{" "}
            <a className="text-[#114232] font-bold">
              <Link to='/Pages/SignUp'>Sign Up </Link>
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex flex-1 bg-[#114232] items-center rounded-l-3xl justify-center">
          <div className="flex items-center text-white">
            <img
              src={WhiteLogo}
              alt="Logo Petani GO"
              className="w-56 h-56 mb-4 mr-4"
            />

            <div className="text-center">
              <h1 className="text-5xl font-bold">Petani GO</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login