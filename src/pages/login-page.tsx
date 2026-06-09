import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-[#F7F9F4]">

        <div className="w-[420px] bg-white p-10 rounded-[24px] shadow-lg">

          <h1 className="text-3xl font-bold mb-2">
            Selamat Datang Kembali
          </h1>

          <p className="text-gray-500 mb-8">
            Masuk untuk mengakses fitur premium.
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="nama@email.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-200 rounded-xl px-4 py-3"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#2F5E2F] text-white py-3 rounded-xl hover:bg-[#244824]"
          >
            Masuk
          </button>

        </div>

      </div>
    </>
  );
}

export default LoginPage;