
import Footer from '@/components/Footer';
import PartnerLogos from '@/components/PartnerLogos';
import Image from 'next/image';

const CategoryCard = [
  {
    image: "/images/media-bg-cover1.png",
    title: "CLOTHS",
    items: 5,
  },
  {
    image: "/images/media-bg-cover2.png",
    title: "CLOTHS",
    items: 5,
  },
  {
    image: "/images/media-bg-cover3.png",
    title: "CLOTHS",
    items: 5,
  },
  {
    image: "/images/media-bg-cover4.png",
    title: "CLOTHS",
    items: 5,
  },
  {
    image: "/images/media-bg-cover5.png",
    title: "CLOTHS",
    items: 5,
  },
];

const products = [
    {
      image: "/images/p1.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p2.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p3.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p4.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p5.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p6.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p7.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p8.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p9.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p10.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p11.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
      image: "/images/p12.jpg",
      title: "Graphic Design",
      category: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
  ];
  

const Shop = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-6">
          <div className="py-8 px-8 bg-[#FAFAFA]">
            <div className="container mx-auto flex justify-between items-center px-8 mb-6">
              <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
              <div className="text-gray-500">
                <span className="text-[#737373] font-bold">Home</span>
                <span className="mx-2 text-[#737373]">&gt;</span>
                <span className="text-[#BDBDBD] font-bold">Shop</span>
              </div>
            </div>
          </div>
        </section>


        <section className="mb-6">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {CategoryCard.map((category, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="w-full h-auto rounded-lg"
                    width={300}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white rounded-lg">
                    <h2 className="text-lg font-bold">{category.title}</h2>
                    <p>{category.items} Items</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="flex items-center justify-between bg-[#FAFAFA] py-4 px-6 rounded-md mb-6">
          <div className="text-gray-600 text-sm">
            Showing all <span className="font-bold">12</span> results
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm">Views:</span>
              <button
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                aria-label="Grid View"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h4m6 0h6M4 10h4m6 0h6m-10 4h10M4 14h4m6 0h6M4 18h16"
                  />
                </svg>
              </button>
              <button
                className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                aria-label="List View"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div>
              <select
                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-500"
                aria-label="Sort by Popularity"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
              Filter
            </button>
          </div>
        </section>
        <PartnerLogos/>
        <Footer />
        <section className="bg-gray-100 py-20">
  <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-[70px]">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
            width={200}
            height={200}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <div className="flex items-center space-x-2 my-3">
              {product.colors.map((color, colorIndex) => (
                <span
                  key={colorIndex}
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 line-through">
                {product.originalPrice}
              </span>
              <span className="text-green-500 font-bold">
                {product.discountedPrice}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

            
      </div>
    </>
  );
};

export default Shop;