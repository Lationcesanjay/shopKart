 import { Link } from 'react-router-dom';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const companyLogo = [
  { id: 1, img: "/Images/clogo1.png" },
  { id: 2, img: "/Images/clogo2.png" },
  { id: 3, img: "/Images/clogo3.png" },
  { id: 4, img: "/Images/clogo4.png" },
];

const bestSellers = [
  { id: 1, img: "/Images/summar shirt.jpg", title: "Summer Shirt", price: "$29.99" },
  { id: 2, img: "/Images/coat.jpg", title: "Winter Coat", price: "$99.99" },
  { id: 3, img: "/Images/jacket.jpg", title: "Stylish Jacket", price: "$59.99" },
  { id: 4, img: "/Images/shoe.jpg", title: "Running Shoes", price: "$79.99" },
  { id: 5, img: "/Images/hat.jpg", title: "Fashionable Hat", price: "$19.99" },
  { id: 6, img: "/Images/leather bag.jpg", title: "Leather Bag", price: "$129.99" },
];

export const Category = () => {
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <h2 className="text-3xl font-light text-center mb-10">Our Trusted Brands</h2>

      <div className="flex items-center justify-around bg-purple-200 gap-4 py-5 flex-wrap">
        {companyLogo.map(({ id, img }) => (
          <div key={id} className="flex justify-center items-center">
            <img
              src={img}
              alt={`Company logo ${id}`}
              className="max-h-16 max-w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold md:-rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          Explore new and popular styles
        </p>

        <div>
          <Link to="/">
            <img
              src="/Images/contant1.jpg"
              alt="Main Collection: Summer Fashion"
              className="w-80 rounded-lg shadow-lg hover:opacity-90 transition-all"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2 w-80">
          <Link to="/">
            <img
              src="/Images/contant2.jpg"
              alt="Collection 2: Trendy Apparel"
              className="rounded-lg shadow-lg hover:opacity-90 transition-all"
              loading="lazy"
            />
          </Link>
          <Link to="/">
            <img
              src="/Images/contant3.jpg"
              alt="Collection 3: Winter Wear"
              className="rounded-lg shadow-lg hover:opacity-90 transition-all"
              loading="lazy"
            />
          </Link>
          <Link to="/">
            <img
              src="/Images/contant4.jpg"
              alt="Collection 4: Accessories"
              className="rounded-lg shadow-lg hover:opacity-90 transition-all"
              loading="lazy"
            />
          </Link>
          <Link to="/">
            <img
              src="/Images/contant5.jpg"
              alt="Collection 5: Best Sellers"
              className="rounded-lg shadow-lg hover:opacity-90 transition-all"
              loading="lazy"
            />
          </Link>
        </div>

        <div>
          <p className="font-semibold md:rotate-90 uppercase text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
            Explore new and popular styles
          </p>
        </div>
      </div>

      <div>
        <div>
          <h2 className="title font-semibold text-2xl text-center mt-14">Best Sellers</h2>
          <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8 mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vivamus arcu nunc, fermentum quis
            sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
          </p>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {bestSellers.map(({ id, img, title, price }) => (
              <SwiperSlide key={id}>
                <div className="relative">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-72 object-contain rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-300 to-transparent text-white p-4">
                    <h3 className="font-semibold text-lg text-black">{title}</h3>
                    <p className="font-medium text-xl text-black">{price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;


