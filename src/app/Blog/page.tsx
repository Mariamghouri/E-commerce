"use client";

import PartnerLogos from "@/components/PartnerLogos";
import Footer from "@/components/Footer";
import Image from "next/image";

const stats = [
    { value: "15K", label: "Happy Customers" },
    { value: "150K", label: "Monthly Visitors" },
    { value: "15", label: "Countries Worldwide" },
    { value: "100+", label: "Top Partners" },
  ];
  const teamMembers = [
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member6.png", 
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member7.png", 
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
    {
      name: "Username",
      profession: "Profession",
      image: "/images/member4.png",
      socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
      },
    },
  ];
const Blog = () => {

  return (
    <>
    <section className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:items-start ">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
        <h4 className="text-sm uppercase text-black font-medium tracking-wide mb-2">
          About Company
        </h4>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-6">
          We know how large objects will act,<br/> but things on a small scale.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Get Quote Now
        </button>
      </div>

     
      <div className="lg:w-1/2 relative">
      
        <div className=""></div>
        <Image
          src="/images/shopping3.jpg"
          alt="About Us"
          className="relative z-10"
          width={600}
          height={400}
        />
      </div>
    </section>

<section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
   
        <div>
          <h4 className="text-sm text-red-500 font-medium uppercase mb-2">
            Problems trying
          </h4>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Met minim Mollie non desert<br/> Alamo est sit cliquey dolor do  <br/> met sent.
          </h1>
        </div>

    
        <div>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-16 px-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto py-10 flex justify-center items-center">
      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Video */}
        <video
          className="w-full h-auto"
          controls
          poster="/images/video.png" 
        >
          <source src="/videos/sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      
        <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/images/button.png"
          alt="video"
          width={100}
          height={100}
        />
        </div>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
      
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between <br/> the two major realms
          of Classical physics: Newtonian mechanics.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center ">
              <Image
                src={member.image}
                alt={member.name}
                className="w-86 h-52 mx-auto  object-cover mb-4  "
                width={344}
                height={208}
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.profession}</p>
              <div className="flex justify-center space-x-4 mt-4 text-blue-500">
              <a href="#" className="text-gray-500 hover:text-gray-800 ">
      <Image src="/images/twitter2.png" alt="Twitter" className="w-5 h-5" width={20} height={20} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/facebook2.png" alt="Facebook" className="w-5 h-5" width={20} height={20} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/insta2.png" alt="Instagram" className="w-5 h-5" width={20} height={20} />
    </a>
   
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
       
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Big Companies Are Here
        </h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>

      
      </div>
      <PartnerLogos/>
    </section>

   

    <section className="grid grid-cols-1 md:grid-cols-2 items-center bg-blue-500">
 
  <div className="p-6 md:p-8 text-white">
    <h4 className="uppercase text-xs md:text-sm font-bold mb-2">Work With Us</h4>
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Now Let&apos;s grow Yours</h2>
    <p className="text-xs md:text-sm mb-4">
      The gradual accumulation of information about atomic and small-scale behavior during the
      first quarter of the 20th century.
    </p>
    <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-blue-500 transition duration-200">
      Button
    </button>
  </div>


  <div className="h-64 md:h-80 ">
    <Image
      src="/images/grapicdesign4.jpg"
      alt="Work With Us"
      className="object-cover  w-full h-full rounded-md"
      width={640}
      height={320}
    />
  </div>
</section>
<br/>

    <Footer/>
</>
    
  );
};

export default Blog;