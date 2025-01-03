import { useState } from "react";
import { Link } from "react-router";

function CaptainSignup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // do signup

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="/uber-logo.png" alt="Uber" />
        <form onSubmit={handleSubmit}>
          <h3 className="text-base mb-2 font-medium">
            What&apos; our captain&apos;s name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              className="bg-[#eee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-base"
              type="text"
              required
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="bg-[#eee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-base"
              type="text"
              required
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <h3 className="text-base mb-2 font-medium">
            What&apos; our captain&apos; email
          </h3>
          <input
            className="bg-[#eee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-base mb-2 font-medium">Enter Password</h3>
          <input
            type="password"
            required
            placeholder="password"
            className="bg-[#eee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
      </div>
    </div>
  );
}

export default CaptainSignup;
