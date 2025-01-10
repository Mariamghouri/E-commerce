"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import PartnerLogos from '@/components/PartnerLogos';
import Image from "next/image";

const products = [
  {
    id: 1,
    image: "/images/design1.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 2,
    image: "/images/design2.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 3,
    image: "/images/design3.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 4,
    image: "/images/design4.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 5,
    image: "/images/design5.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 6,
    image: "/images/design6.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 7,
    image: "/images/design1.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
  {
    id: 8,
    image: "/images/design2.jpg",
    title: "Graphic Design",
    department: "English Department",
    oldPrice: "$16.48",
    newPrice: "$6.48",
  },
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState("/images/couch.jpg");

  const productImages = ["/images/chair.jpg", "/images/couch2.jpg"];

  const productColors = ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-gray-800"];

  return (
    <>
      <section className="container mx-auto max-w-5xl py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="flex flex-col">
            <div className="relative w-full h-[400px] border border-gray-200 rounded-lg overflow-hidden">
            <Image 
    src="/images/couch.jpg" 
    alt="Example" 
    fill 
    style={{ objectFit: 'cover' }} 
  />
            </div>

            <div className="flex space-x-4 mt-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 rounded-lg overflow-hidden border ${
                    selectedImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <nav className="text-sm mb-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                Home
              </a>{" "}
              <span className="text-gray-400">/</span>{" "}
              <a href="#" className="text-gray-800 font-medium">
                Shop
              </a>
            </nav>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">Floating Phone</h1>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">(10 Reviews)</span>
            </div>

            <p className="text-2xl font-bold text-gray-800 mb-4">$1,139.33</p>

            <p className="text-gray-500 text-sm mb-4">
              Availability: <span className="text-green-500 font-medium">In Stock</span>
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
              official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
              nostrum met.
            </p>

            <div className="flex items-center space-x-3 mb-6">
              {productColors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border border-gray-300 ${color}`}
                ></button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                Select Options
              </button>
              <button className="border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                ♥
              </button>
              <button className="border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                🛒
              </button>
              <button className="border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                👁️
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl py-10 px-4">
        <div className="border-b border-gray-300 mb-9">
          <ul className="flex justify-center space-x-4 text-gray-600">
            <li className="pb-2 border-b-2 border-blue-500 text-blue-500">
              <a href="#" className="font-medium">
                Description
              </a>
            </li>
            <li className="pb-2 hover:border-b-2 hover:border-blue-500">
              <a href="#" className="hover:text-blue-500">
                Additional Information
              </a>
            </li>
            <li className="pb-2 hover:border-b-2 hover:border-blue-500">
              <a href="#" className="hover:text-blue-500">
                Reviews (0)
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <Image
                src="/images/decor.jpg"
                alt="Description"
                width={400}
                height={300}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              The quick fox jumps over
            </h2>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
              official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
              nostrum met.
            </p>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
              official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
              nostrum met.
            </p>
            <p className="text-gray-600 mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT
              official consequent door ENIM RELIT Mollie. Excitation venial consequent sent
              nostrum met.
            </p>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              The quick fox jumps over
            </h2>
            <ul className="list-none space-y-2">
              {Array(4)
                .fill("The quick fox jumps over the lazy dog")
                .map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 space-x-2"
                  >
                    <span className="text-blue-500">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            <br />
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              The quick fox jumps over
            </h2>
            <ul className="list-none space-y-2">
              {Array(3)
                .fill("The quick fox jumps over the lazy dog")
                .map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 space-x-2"
                  >
                    <span className="text-blue-500">&gt;</span>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-5xl py-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Bestseller Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.department}</p>
                <div className="flex items-center mt-2">
                  <span className="text-gray-500 line-through mr-2">
                    {product.oldPrice}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {product.newPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <PartnerLogos/>
      <Footer/>
    </>
  );
};

export default About;