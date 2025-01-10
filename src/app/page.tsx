import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";


const posts = [
  {
    image: "/images/post1.jpg",
    title: "Loudest à la Madison #1 (L'integral)",
    category: "Google",
    date: "22 April 2021",
    comments: "10",
    tags: ["Google", "Trending", "New"],
    link: "#",
  },
  {
    image: "/images/post2.jpg",
    title: "Loudest à la Madison #2 (L'integral)",
    category: "Trending",
    date: "22 April 2021",
    comments: "5",
    tags: ["Trending", "New"],
    link: "#",
  },
  {
    image: "/images/post3.jpg",
    title: "Loudest à la Madison #3 (L'integral)",
    category: "New",
    date: "22 April 2021",
    comments: "8",
    tags: ["Google", "New"],
    link: "#",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero-section bg-[#00B5DA]">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 h-[700px]">
          <div className="w-full md:w-[46%] space-y-[30px]">
            <h2 className="text-white text-[16px] font-extrabold tracking-widest uppercase">
              SUMMER 2024
            </h2>
            <h1 className="text-white text-[57px] font-semibold leading-[1.2]">
              NEW COLLECTION
            </h1>
            <p className="text-white text-[20px]">
              We know how large objects will act,
              <span className="hidden md:inline-block"> <br /></span>
              but things on a small scale.
            </p>
            <a
              href="#shop"
              className="custom-btn font-semibold text-[23px] uppercase bg-green-400 text-white py-3 px-9 rounded-md hover:bg-green-500 inline-block"
            >
              Shop Now
            </a>
          </div>

          <div className="hidden md:block md:w-[54%]">
            <Image
              src="/images/fashion.png"
              alt="Men"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-3">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black">EDITOR&apos;S PICK</h2>
            <p className="text-gray-600 mt-2">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Image (Men) */}
            <div className="relative col-span-2 lg:col-span-2">
              <Image
                src="/images/men.jpg"
                alt="Men"
                width={800}
                height={600}
                className=" w-full h-auto object-cover men-size  "
              />
              <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-md shadow-md">
                <p className="text-black font-bold">MEN</p>
              </div>
            </div>

            <div className="  relative">
              <Image
                src="/images/women.jpg"
                alt="Women"
                width={400}
                height={400}
                className=" w-full h-auto object-cover women-size"
              />

              <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-md shadow-md">
                <p className="text-black font-bold ">WOMEN</p>
              </div>
            </div>

            {/* Accessories */}
            <div className="relative accessories">
              <div className="relative">
                <Image
                  src="/images/accessories.jpg"
                  alt="Accessories"
                  width={400}
                  height={400}
                  className=" w-full h-auto accessories"
                />
                <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-md shadow-md">
                  <p className="text-black font-bold">ACCESSORIES</p>

                </div>
              </div>
              <br />
              <div className="relative">
                <Image
                  src="/images/kids.jpg"
                  alt="Kids"
                  width={400}
                  height={400}
                  className=" w-full h-auto kid"
                />
                <div className="absolute bottom-4 left-4 bg-white px-6 py-2 rounded-md shadow-md">
                  <p className="text-black font-bold">KIDS</p>
                </div>
              </div>
            </div>

            {/* Kids */}

          </div>
        </div>


      </section>

      <section className="py-10 bg-white gap-20">
        <div className="container mx-auto px-8">
          <div className="custom-container">


            <div className="text-center mb-8 space-y-[10px]">
              <h4 className="text-[#737373] font-regular text-[20px] tracking-[0.2px]">Featured Products</h4>
              <h3 className="text-3xl font-bold text-[#252B42] text-[24px] tracking-[0.1px]">BESTSELLER PRODUCTS</h3>
              <p className="text-[#737373] font-regular text-[14px] tracking-[0.2px]">
                Problems trying to resolve the conflict between
              </p>
            </div>
            <div />
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Cards */}
            {[
              { src: '/images/graphicdesign.jpg' },
              { src: '/images/graphicdesign2.jpg' },
              { src: '/images/graphicdesign3.jpg' },
              { src: '/images/p4.jpg' },
            ].map((product, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded-lg shadow-md `}
              >
                {/* Product Image */}
                <Image
                  src={product.src}
                  alt={`Product ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover mb-4"
                />

                {/* Product Details */}
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Graphic Design
                </h4>
                <p className="text-sm text-gray-600 mb-2">English Department</p>

                {/* Pricing */}
                <div className="flex items-center mb-3">
                  <span className="text-gray-400 line-through mr-2">$16.48</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="w-4 h-4 rounded-full bg-red-500"></span>
                  <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  <span className="w-4 h-4 rounded-full bg-gray-500"></span>
                </div>
              </div>


            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Product Cards */}
            {[
              { src: '/images/p5.jpg' },
              { src: '/images/p6.jpg' },
              { src: '/images/p7.jpg' },
              { src: '/images/p8.jpg' },
            ].map((product, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded-lg shadow-md  `}
              >
                {/* Product Image */}
                <Image
                  src={product.src}
                  alt={`Product ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover mb-4"
                />

                {/* Product Details */}
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Graphic Design
                </h4>
                <p className="text-sm text-gray-600 mb-2">English Department</p>

                {/* Pricing */}
                <div className="flex items-center mb-3">
                  <span className="text-gray-400 line-through mr-2">$16.48</span>
                  <span className="text-green-600 font-bold">$6.48</span>
                </div>

                {/* Color Options */}
                <div className="flex space-x-2">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="w-4 h-4 rounded-full bg-red-500"></span>
                  <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                  <span className="w-4 h-4 rounded-full bg-gray-500"></span>
                </div>
              </div>


            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#23856D]">
        <div className="container mx-auto h-[700px]">

          <div className="custom-container flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">

            <div className="w-full md:w-[45%] space-y-[35px]">
              <h2 className="text-white text-[16px] font-bold uppercase">
                SUMMER 2024
              </h2>
              <h1 className="text-white text-[58px] font-bold leading-[80px]">
                Vita Classic Product
              </h1>
              <p className="text-white text-[14px] font-regular">
                We know how large objects will act, We know
                <span className="hidden md:inline"> <br /></span>
                how objects will act, We know
              </p>

              <div className="flex justify-between items-center w-[60%]">
                <span className="font-bold text-[24px] tracking-[0.1px]">$16.48</span>

                <a
                  href="#"
                  className="cstm-btn font-bold text-[14px] uppercase bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 inline-block tracking-[0.2px]"
                >
                  ADD TO CART
                </a>
              </div>
            </div>

            <div className="w-full md:w-[55%]">
              <Image
                src="/images/hero-sec-two-image.png"
                alt="Shop Hero"
                width={450}
                height={300}
                className="w-[450px] h-auto ml-auto -mb-[170px]"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#fff]">
        <div className="container mx-auto h-[680px]">

          <div className="custom-container flex flex-col md:flex-row items-center justify-between space-y-8 gap-20 md:space-y-0">

            <div className="w-full md:w-[55%] h-[100%]">
              <Image src="/images/hero-three.png" alt="Shop Hero"
                width={600} height={400}
                className="w-[auto] h-[100%] object-cover object-bottom mr-auto hero-img-style"
              />
            </div>

            <div className="w-full md:w-[45%] space-y-[35px]">
              <h2 className="text-[#BDBDBD] text-[16px] font-bold uppercase">
                SUMMER 2024
              </h2>
              <h1 className="text-[#252B42] text-[40px] font-bold leading-[50px]">
                Part of the Neural Universe
              </h1>
              <p className="text-[#737373] text-[14px] font-regular">
                We know how large objects will act,
                <span className="hidden md:inline"> <br /></span>
                but things on a small scale.
              </p>

              <div className="flex justify-between items-center w-[75%]">
                <a href="#" className="cstm-btn font-bold text-[14px] uppercase bg-green-500 text-white py-3 px-8 rounded inline-block tracking-[0.2px]">
                  BUY NOW
                </a>
                <a href="#" className="cstm-btn-transparent font-bold text-[14px] uppercase bg-green-500 text-white py-3 px-8 rounded inline-block tracking-[0.2px]">
                  Read More
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-blue-600 text-lg font-semibold uppercase tracking-widest">
              Practice Advice
            </h2>
            <h3 className="text-3xl font-bold text-gray-800">Featured Posts</h3>
            <p className="text-gray-600 mt-2">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-[200px] object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${tag === "Google" ? "text-blue-600 font-semibold" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mt-2">{post.title}</h4>
                  <p className="text-gray-500 mt-2 text-sm">
                    Problems trying to resolve the conflict between the two major realms of Classical physics.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
                    <span>{post.date}</span>
                    <span>{post.comments} comments</span>
                  </div>
                  <a
                    href={post.link}
                    className="inline-block mt-4 text-blue-500 font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <Footer/>


    </>

  );
};

export default Home;