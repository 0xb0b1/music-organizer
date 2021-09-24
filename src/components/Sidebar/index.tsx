import {
  RiFolderMusicFill,
  RiHome2Fill,
  RiPlayList2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="hidden md:flex px-2 py-2 w-80 bg-gradient-to-t from-gray-800 h-home">
      <ul className="flex flex-col gap-2 text-white py-4">
        <li>
          <Link
            className="bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer"
            // activeStyle={{ color: "red" }}
            to="/"
          >
            <RiHome2Fill size={22} />
            <span className="font-semibold text-sm text-gray-200">Home</span>
          </Link>
        </li>
        <li>
          <Link
            className="bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer"
            to="/myplaylists"
          >
            <RiPlayList2Fill size={22} />
            <span className="font-semibold text-sm text-gray-200">
              My Playlists
            </span>
          </Link>
        </li>
        <li>
          <Link
            className="bg-gray-800 w-auto h-12 flex items-center gap-2 px-4 rounded-3xl cursor-pointer"
            to="/categories"
          >
            <RiFolderMusicFill size={22} />
            <span className="font-semibold text-sm text-gray-200">
              Browse Categories
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
