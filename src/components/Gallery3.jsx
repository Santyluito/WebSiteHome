import { useEffect, useState } from "react";
import GalleryData from "../modules/galleryData";
import HeadersComponents from "../modules/HeadersComponents";
import ModalImage from "../modules/ModalImage";

export const Gallery3 = () => {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imgSelected, setImgSelected] = useState(0);

  const galleryFilter = (itemData) => {
    setData(GalleryData.filter((item) => item.title === itemData));
  };

  const handleClick = (id) => {
    const newIndex = data.findIndex((it) => it.id === id);
    setImgSelected(newIndex);
    setShowModal(true);
  };

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);

  return (
    <section id="gallery" className=" h-full mx-auto px-5 py-2 lg:px-24">
      <HeadersComponents title="Galeria" />
      <div className="flex">
        <ul className="flex my-4 mx-auto">
          <li>
            <button
              className="shadow py-2 px-3 text-sm md:text-lg md:py-4 md:px-8 hover:shadow-md hover:text-pink-700 hover:shadow-pink-700/20 transition duration-200"
              onClick={() => setData(GalleryData)}
            >
              All
            </button>
          </li>
          {collection.map((col) => (
            <div key={col}>
              <button
                className={`capitalize shadow py-2 px-3 text-sm md:text-lg md:py-4 md:px-8 hover:shadow-md hover:text-pink-700 hover:shadow-pink-700/10 transition duration-200 `}
                onClick={() => galleryFilter(col)}
              >
                {col}
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
        {data.slice(0, 16).map((item) => (
          <div className="w-full" key={item.id}>
            <img
              className="w-full h-56 object-cover rounded-none md:rounded-lg scale-100 skew-y-2 md:transform-none filter hover:contrast-125 cursor-pointer"
              onClick={() => handleClick(item.id)}
              src={item.image}
              alt={item.title}
            />
          </div>
        ))}

        <ModalImage
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          imageData={imgSelected}
          data={data}
        />
      </div>
    </section>
  );
};
