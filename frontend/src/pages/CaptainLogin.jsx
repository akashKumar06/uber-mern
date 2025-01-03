import { useState } from "react";
import { Link } from "react-router";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // do login logic
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="/uber-logo.png" alt="Uber" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-2 font-medium">What&apos; your email</h3>
          <input
            className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet?
          <Link to="/captain-signup" className="text-blue-600">
            Register as a captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/user-login"
          className="bg-[#e3e620ea] inline-block text-center text-black font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;
