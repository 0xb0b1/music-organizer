// import { useState, useEffect } from "react";
import play from "../../assets/play.svg";

import { categories } from "../../categories.js";

// interface CategoriesProps {
//   items: Array<{
//     href: string;
//     icons: Array<{
//       url: string;
//     }>;
//     id: string;
//     name: string;
//   }>;
// }

export const Categories = () => {
  // const [categories, setCategories] = useState<CategoriesProps>();

  // useEffect(() => {
  //   const getCategories = async () => {
  //     const response = await axios.get("http://localhost:3333/categories");

  //     setCategories(response.data);
  //   };
  //   getCategories();
  // }, []);

  // console.log(categories?.items.forEach((item) => console.log(item.name)));
  // console.log(categories?.items.forEach((item) => console.log(item)));

  return (
    <div className="py-4 px-2 h-home w-full box-border overflow-y-scroll no-scrollbar">
      <section className="text-gray-50 h-full">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full ">
          {categories?.items.map((item) => (
            <div
              className="relative flex items-end rounded-full mx-2 my-2 max-h-72 max-w-69"
              key={item.id}
            >
              <img
                src={item.icons[0].url}
                alt=""
                className="relative object-cover h-72 w-auto rounded-3xl filter blur-none hover:blur-sm"
              />

              <div className="absolute flex items-center m-4">
                <img src={play} alt="" className="bg-green-500 rounded-full" />
                <span className="m-2 font-black text-sm">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
