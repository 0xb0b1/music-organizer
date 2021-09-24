import { RiHeart3Line, RiAddFill } from "react-icons/ri";
import playGreen from "../../assets/play-green.svg";

export const Recommendations = () => {
  return (
    <section className="pb-8">
      <h2 className="mt-8 mb-2 font-semibold">Recomended songs</h2>

      <table className="w-full bg-gray-800 rounded-3xl overflow-y-scroll">
        <thead>
          <tr>
            <th></th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Song
            </th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Artist
            </th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left"></th>
            <th className="px-4 py-3 text-gray-200 uppercase font-medium text-xs text-left">
              Duration
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ width: 72 }} className="px-4 py-3 text-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Ocean_Eyes_%28Official_Single_Cover%29_by_Billie_Eilish.png"
                alt=""
                className="w-8 h-8 rounded-sm"
              />
            </td>
            <td>
              <a
                className="text-gray-100 font-semibold text-none leading-6 text-base hover:underline"
                href="/"
              >
                Ocean Eyes
              </a>
            </td>
            <td className="px-4 py-3 text-sm">Billie Eilish</td>
            <td style={{ width: 100 }} className="px-4 py-3 text-sm"></td>
            <td className="px-4 py-3 text-sm">4:15</td>
            <td className="px-4 py-3 text-sm flex gap-1">
              <button type="button">
                <RiHeart3Line color="white" size={22} />
              </button>
              <button type="button">
                <RiAddFill size={28} />
              </button>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center  bg-gray-700 rounded-lg"
              >
                <img
                  className="w-5 h-5 hover:brightness-95"
                  src={playGreen}
                  alt="Play song"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <span className="text-sm font-semibold underline cursor-pointer">
        show more
      </span>
    </section>
  );
};
