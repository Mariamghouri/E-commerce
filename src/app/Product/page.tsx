"use client";

import Footer from "@/components/Footer";
import Image from "next/image";

const Product = () => {
  const teamMembers = [
    {
      name: "Vanessa",
      role: "Developer",
      image: "/images/member1.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png"},
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
    {
      name: "Alexandra",
      role: "Designer",
      image: "/images/member2.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png"},
        { platform: "instagram", link: "#", src: "/images/insta2.png"},
        { platform: "twitter", link: "#", src: "/images/twitter2.png"},
      ],
    },
    {
      name: "Victoria",
      role: "Marketing",
      image: "/images/member3.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png"},
        { platform: "instagram", link: "#", src: "/images/insta2.png"},
        { platform: "twitter", link: "#", src: "/images/twitter2.png"},
      ],
    },
    {
      name: "Ethan",
      role: "Developer",
      image: "/images/member4.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
    {
      name: "Jackson",
      role: "Designer",
      image: "/images/member5.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
    {
      name: "Sophia",
      role: "HR",
      image: "/images/member6.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ]
    },
    {
      name: "Mia",
      role: "Support",
      image: "/images/member7.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
    {
      name: "Emily",
      role: "Sales",
      image: "/images/member8.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
    {
      name: "Olivia",
      role: "Designer",
      image: "/images/member9.png",
      socials: [
        { platform: "facebook", link: "#", src: "/images/facebook2.png" },
        { platform: "instagram", link: "#", src: "/images/insta2.png" },
        { platform: "twitter", link: "#", src: "/images/twitter2.png" },
      ],
    },
  ];
  return (
    <>
 
      <section className="bg-gray-50 py-12">

         <div className="text-center mb-12">
    <h4 className="text-sm uppercase text-gray-500 mb-2">What we do</h4>
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Innovation tailored for you
    </h1>
    <nav className="text-gray-600">
      <a href="#" className="hover:text-blue-500">Home</a> &nbsp;/&nbsp; <span>Team</span>
    </nav>
  </div>
  <div className="container mx-auto">
    <div className="grid grid-cols-2 gap-4">
     
      <div className="h-full">
        <Image
          src="/images/pic1.png"
          alt="Large Hero Image"
          className="w-full h-full object-cover rounded-lg"
          width={500}
          height={500}
        />
      </div>

      <div className="grid grid-rows-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
         
          <Image
            src="/images/pic2.png"
            alt="Top Right Image 1"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={250}
          />
          <Image
            src="/images/pic3.png"
            alt="Top Right Image 2"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={250}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
         
          <Image
            src="/images/pic4.png"
            alt="Bottom Right Image 1"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={250}
          />
          <Image
            src="/images/pic5.png"
            alt="Bottom Right Image 2"
            className="w-full h-full object-cover rounded-lg"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  </div>
</section>



      
<section className="py-12 bg-white">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-black">Meet Our Team</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center">
         
          <Image
            src={member.image}
            alt={member.name}
            className="w-86 h-32 mx-auto  object-cover"
            width={150}
            height={150}
          />
           
          <h3 className="text-lg font-bold mt-4">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
        
          <div className="flex justify-center space-x-4 mt-2">
            {member.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image 
                  src={social.src}  
                  alt={social.platform}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      
      <section className="bg-white text-black py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
          <p className="text-lg mb-6 text-gray-400">Met minim Mollie non desert Alamo est sit cliquey dolor <br/>
          do met sent. RELIT official consequent.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
            Try it free now
          </button>
          
       
        <div className="flex justify-center sm:justify-center space-x-6 pt-5 ">
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/twitter2.png" alt="Twitter" className="w-8 h-8" width={32} height={32} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/facebook.png" alt="Facebook" className="w-8 h-8" width={32} height={32} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/insta.png" alt="Instagram" className="w-8 h-8" width={32} height={32} />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/linkdin2.png" alt="LinkedIn" className="w-8 h-8" width={32} height={32} />
    </a>
  </div>
</div>

      </section>

      
      <Footer />
    </>
  );
};

export default Product;