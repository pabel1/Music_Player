import { Link } from "react-router-dom";
import logo from "../../assets/images/music.png";
const Topbar = () => {
  return (
    <nav className="">
      <div>
        <Link to="/" className="flex items-center py-5 px-2 text-white">
          <img className="w-10 h-8" src={logo} alt="logo" />
          <span className="font-bold ml-2 text-xl">Music Player</span>
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
