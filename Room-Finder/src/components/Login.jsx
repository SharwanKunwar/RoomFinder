import { AnimatedTooltipPreview } from "../components/ui/AnimatedTooltipPreview";
import { Button,Input } from "antd";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



function Login() {
  const [role, setRole] = useState("seeker");

  const handleLogin = (e) => {
  e.preventDefault();

  if (!role) {
    return alert("Please select a role");
  }

  // later connect API
  console.log("Role:", role);
};

const handleGoogleLogin = () => {
  // call Google OAuth
  console.log("Google login clicked");
};

const handleFacebookLogin = () => {
  // call Facebook OAuth
  console.log("Facebook login clicked");
};



  return (
    <div className="bg-[#D0D5D7] w-screen h-screen flex justify-center items-center">
      <div className="w-[70%] h-[90%] flex shadow-xl rounded-2xl">
        
        {/* Left image section */}
        <div className="w-6/12 relative">
          <img
            src="/images/RoomFinderIntro.jpg"
            alt="img"
            className="object-cover w-full h-full object-center rounded-l-2xl"
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full rounded-l-2xl h-full bg-linear-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end px-10 py-6"></div>

          <div className="bg-black/5 absolute top-0 left-0 w-full h-full rounded-l-2xl backdrop-blur-[0.8px] flex justify-center items-end">
            <div className="h-[50%] w-full  flex flex-col gap-3 px-10">
              
              {/* people tooltip */}
              <div className=" w-full h-10 flex items-center">
                <AnimatedTooltipPreview />
                <p className="text-neutral-400">Verified community members</p>
              </div>

              {/* title */}
              <div>
                <h1 className="text-4xl text-white font-medium leading-10">Find a place where you belong.</h1>
              </div>

              {/* description */}
              <div>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quisquam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, commodi.</p>
              </div>
            </div>
          </div>
        </div>

        
        
        {/* Right login section */}
         <div className="w-6/12 bg-gray-50 rounded-r-2xl flex justify-center items-center">
        <div className="w-[80%] h-[90%] flex flex-col justify-center gap-6">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="/vite.svg" alt="logo" className="bg-indigo-400/30 p-1 rounded-sm shadow backdrop-blur-sm"/>
      <h2 className="text-2xl font-medium text-slate-600">
        RoomFinder
      </h2>
    </div>

    {/* Heading */}
    <div>
      <h2 className="text-3xl font-semibold text-gray-800">
        Welcome Back 👋
      </h2>
      <p className="text-gray-500 text-sm mt-1">
        Login as Seeker or Owner
      </p>
    </div>

    {/* Role Selection */}
    <div className="flex gap-4">
      <div
        onClick={() => setRole("seeker")}
        className={`flex-1 text-center py-2 rounded-lg border cursor-pointer transition-all
          ${role === "seeker"
            ? "border-black/50 bg-indigo-400 text-white shadow-md"
            : "border-gray-300 hover:border-indigo-400"}
        `}
      >
        Seeker
      </div>

      <div
        onClick={() => setRole("owner")}
        className={`flex-1 text-center py-2 rounded-lg border cursor-pointer transition-all
          ${role === "owner"
            ? "border-black/50 bg-indigo-400 text-white shadow-md"
            : "border-gray-300 hover:border-indigo-400"}
        `}
      >
        Owner
      </div>
    </div>

    {/* FORM */}
    <form onSubmit={handleLogin} className="flex flex-col gap-5">

      <div>
        <label className="text-sm text-gray-600">Email</label>
        <Input
          type="email"
          placeholder="example@email.com"
          size="large"
          className="mt-1 rounded-lg"
          required
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Password</label>
        <Input.Password
          placeholder="••••••••"
          size="large"
          className="mt-1 rounded-lg"
          required
        />
      </div>

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        className="bg-black hover:bg-gray-800 active:scale-95 transition-all"
        block
      >
        Login
      </Button>
    </form>

    {/* Or divider */}
    <div className="flex items-center gap-2 text-gray-400 mt-2 mb-2">
      <hr className="flex-1 border-gray-300" />
      <span className="text-sm">OR</span>
      <hr className="flex-1 border-gray-300" />
    </div>

    {/* Social Login */}
    <div className="flex gap-5 justify-center">
      <Button
        onClick={handleGoogleLogin}
        size="large"
        className="flex justify-center items-center border hover:bg-gray-100 text-gray-700 w-[40%]!"
      >
         <FcGoogle size={20} /> Google
      </Button>


      <Button
        onClick={handleFacebookLogin}
        size="large"
        className="flex justify-center items-center border hover:bg-gray-100 text-gray-700 w-[40%]!"
      >
        <FaFacebook size={20} /> Facebook
      </Button>
    </div>

    {/* Footer */}
    <p className="text-sm text-center text-gray-500 mt-2">
      Don’t have an account?{" "}
      <span className="text-black cursor-pointer font-medium hover:underline">
        Register
      </span>
    </p>

  </div>
</div>



              </div>
            </div>
  );
}

export default Login;
