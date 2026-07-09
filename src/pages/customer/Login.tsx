import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, } from "lucide-react";

import bg from "@/assets/images/bg.jpg";
import logo from "@/assets/images/logo.png"

import PrivacyPolicy from "@/components/PrivacyPolicy";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          `url(${bg})`,
      }}
    >
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

      {/* Logo */}
      <div className="absolute left-6 top-6 z-20">
        <img
          src={logo}
          alt="Mottu Claims Logo"
          className="h-14 w-auto object-contain md:h-16"
        />
      </div>
      <div className="absolute left-6 bottom-0 z-20">
            <h4 className="text-white/50"> Designed and Developed by Swetha Udayakumar</h4>
      </div>
      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden flex-col justify-center text-white lg:flex">
            <h1 className="text-6xl font-bold leading-tight">
              Welcome Back!
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-200">
              Sign in to continue managing your claims with a
              beautiful, secure and modern experience.
            </p>
          </div>
          

          {/* Login Card */}
          <div className="flex items-center justify-center">
            <div
              className=" w-full max-w-md rounded-3xl border border-white/20 bg-white/15 p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="mb-8 flex flex-col items-center">
                <img
                  src={logo}
                  alt="Mottu Claims Logo"
                  className="h-16 w-auto object-contain"
                />

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Sign In
                </h2>

                <p className="mt-2 text-center text-gray-200">
                  Enter your details below.
                </p>
              </div>
              {/* Email */}
              <div className="mt-8">
                <label className="mb-2 block text-sm font-medium text-white">
                  Email
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/20 px-4">
                  <Mail className="text-white" size={18} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-300 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-white">
                  Password
                </label>

                <div className="flex items-center rounded-xl border border-white/20 bg-white/20 px-4">
                  <Lock className="text-white" size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full bg-transparent px-3 py-4 text-white placeholder:text-gray-300 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="text-white" size={18} />
                    ) : (
                      <Eye className="text-white" size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Privacy Card */}
              <div  className="mt-8 rounded-2xl  border  border-white/20  bg-white/10  p-5  backdrop-blur-xl" >
                <div className="flex items-start gap-3">
                  <div>
                    <p className="mt-1 text-sm text-gray-200">
                      Please review and accept our Privacy
                      Policy before continuing.
                    </p>
                  </div>
                </div>

                <label className="mt-5 flex items-center gap-3 text-white">
                  <input
                    type="checkbox"
                    checked={acceptedPolicy}
                    onChange={(e) =>
                      setAcceptedPolicy(e.target.checked)
                    }
                  />
                  <span className="text-sm">
                      I have read the{" "}
                      <button
                        type="button"
                        onClick={() => setOpenPolicy(true)}
                        className="font-medium text-[#00C853] underline hover:text-[00B84A]"
                      >
                        Privacy Policy
                        <PrivacyPolicy
                          open={openPolicy}
                          onOpenChange={setOpenPolicy}
                        />
                      </button>
                    </span>
                </label>
              </div>

              {/* Remember */}
              <div className="mt-5 flex items-center justify-between">
                <label className="flex items-center gap-2 text-white">
                  <input type="checkbox" />

                  <span className="text-sm">
                    Remember me
                  </span>
                </label>

                <button className="text-sm text-[#00C853] hover:underline hover:text-[#00B84A]">
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button disabled ={!acceptedPolicy} 
                className={` mt-8 w-full rounded-xl py-3 font-semibold transition
                ${
                    acceptedPolicy ?
                      "bg-[#00c853] text-white hover:bg-[#00B84A] " :
                      "bg-[#00c853] text-white cursor-not-allowed"
                }
              `}>
                Sign In
              </button>

              {/* Divider */}
              <div className="my-7 flex items-center">
                <div className="h-px flex-1 bg-white/30" />

                <span className="px-3 text-white">OR</span>

                <div className="h-px flex-1 bg-white/30" />
              </div>

              {/* Google */}
              <button
                className={` flex w-full items-center justify-center gap-3
                rounded-xl border border-white/20 py-3 font-medium transition
                ${
                  acceptedPolicy ?
                    "bg-white/10 text-white hover:bg-[#00C853] hover:text-white" :
                    "bg-white/10 cursor-not-allowed"
                }
                `}
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="google"
                  className="h-5 w-5"
                />

                Continue with Google
              </button>

              {/* Footer */}
              <p className="mt-8 text-center text-sm text-gray-200">
                Don't have an account?{" "}
                <button className="font-semibold text-[#00C853] hover:underline hover:text-[#00B84A]">
                  Register
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;