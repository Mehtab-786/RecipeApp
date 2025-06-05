import Navbar from "./components/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-12 ">
      <Navbar />

      <MainRoutes />
    </div>
  );
};

export default App;
