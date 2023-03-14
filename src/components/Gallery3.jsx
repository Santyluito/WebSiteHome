import { useEffect, useState } from "react";
import GalleryData from "../modules/galleryData";
import HeadersComponents from "../modules/HeadersComponents";

export const Gallery3 = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    console.log('first')
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, [GalleryData]);

  const galleryFilter = (itemData) => {
    setData(GalleryData.filter((item) => item.title === itemData));
  };
  console.log(data);

  return (
    <div className="container mx-auto px-5 py-2 lg:px-24 lg:pt-12">
      <HeadersComponents title='Galeria' />
      <div className="flex">
        <ul className="flex my-4 mx-auto">
          <li>
            <button
              className="shadow py-3 hover:shadow-md hover:text-pink-700 hover:shadow-pink-700/20 transition duration-200"
              onClick={() => setData(GalleryData)}
            >
              All
            </button>
          </li>
          {collection.map((col) => (
            <div key={col}>
              <button
                className={`capitalize shadow py-3 hover:shadow-md hover:text-pink-700 hover:shadow-pink-700/10 transition duration-200 `}
                onClick={() => galleryFilter(col)}
              >
                {col}
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {data.slice(0,16).map((item) => (
          <div className="w-full" key={item.id}>
            <img
              className="w-full h-56 object-cover rounded-lg scale-75 translate-x-2 skew-y-2 md:transform-none filter hover:contrast-125"
              src={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
