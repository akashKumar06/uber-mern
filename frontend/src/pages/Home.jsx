import { Link } from "react-router";
function Home() {
  return (
    <div>
      <div className="bg-[url('./home.jpg')] bg-cover bg-center pt-8 h-screen w-full flex  flex-col justify-between ">
        <img className="w-16 ml-8" src="/uber-logo.png" alt="Uber" />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link
            to="/user-login"
            className="inline-block text-center w-full bg-black text-white py-3 rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
