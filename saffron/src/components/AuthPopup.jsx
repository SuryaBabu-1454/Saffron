
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const AuthPopup = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl p-6 z-[999] 
      transform transition-transform duration-300 
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
    
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-xl font-bold text-[#C47F00]">Welcome</h2>
        <FiX className="text-2xl cursor-pointer" onClick={() => setOpen(false)} />
      </div>

    
      <div className="mt-6 space-y-8">

        {/* LOGIN SECTION */}
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold">ALREADY HAVE AN ACCOUNT?</h3>
          <p className="text-gray-600 mt-1">
            Log in for a personalised experience and benefit from all your advantages and offers.
          </p>

          <Link
            to="/login"
            className="block mt-4 text-center bg-[#C47F00] text-white py-2 rounded-md font-semibold
            hover:bg-[#a56900] transition"
            onClick={() => setOpen(false)}
          >
            LOGIN
          </Link>
        </div>

        {/* REGISTER SECTION */}
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold">NOT REGISTERED YET?</h3>
          <p className="text-gray-600 mt-1">
            Join and take advantage of exclusive benefits!
          </p>

          <Link
            to="/register"
            className="block mt-4 text-center bg-white text-[#C47F00] border border-[#C47F00] py-2 rounded-md font-semibold
            hover:bg-[#FFF0D9] transition"
            onClick={() => setOpen(false)}
          >
            REGISTER
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AuthPopup;
