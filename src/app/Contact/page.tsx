"use client";
import Footer from "@/components/Footer"
import Image from 'next/image';
const Contact = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
         
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
  <h4 className="text-blue-500 uppercase tracking-wide mb-2">Contact Us</h4>
  <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
    Get in touch <br /> today!
  </h1>
  <p className="text-gray-600 mb-8">
    We know how large objects will act, <br/> but things on a small scale.
  </p>
  <div className="mb-8">
    <p className="text-gray-800 text-lg font-bold mb-2">
      Phone: <span className="font-bold">+451 215 215</span>
    </p>
    <p className="text-gray-800 text-lg font-bold">
      Fax: <span className="font-bold">+451 215 215</span>
    </p>
  </div>
  
  <div className="flex justify-center md:justify-start space-x-4">
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/twitter.png" alt="Twitter"   width={32} 
  height={32} className="" />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/facebook.png" alt="Facebook"  width={32} 
  height={32} className="" />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/insta.png" alt="Instagram"  width={32} 
  height={32}  className="" />
    </a>
    <a href="#" className="text-gray-500 hover:text-gray-800">
      <Image src="/images/linkdin.png" alt="LinkedIn"  width={32} 
  height={32}  className="" />
    </a>
  </div>
</div>


      
        <div className="md:w-1/2 ">
          <Image
            src="/images/shopping4.jpg"
            alt="Family Shopping"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="py-12 bg-white">
  <div className="container mx-auto text-center">
     
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">Visit Our Office</h2>
      <p className="text-gray-600 mt-2">
        We help small businesses with big ideas.
      </p>
    </div>

  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
      <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg">
        <div className="text-blue-500 text-4xl mb-4">
          <Image
            src="/images/phone.png"
            alt="Phone Icon"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 mb-2">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
        <p className="text-gray-800 font-semibold mb-4">Get Support</p>
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100">
          Submit Request
        </button>
      </div>

   
      <div className="flex flex-col items-center p-6 bg-blue-900 text-white rounded-lg shadow-lg ">
        <div className="text-4xl mb-4">
          <Image
            src="/images/location.png"
            alt="Location Icon"
            width={44}
            height={44}
            className="w-11 h-11"
          />
        </div>
        <p className="mb-2">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
        <p className="font-semibold mb-4">Get Support</p>
        <button className="px-6 py-2 border border-white bg-transparent rounded-lg hover:bg-white hover:text-blue-900">
          Submit Request
        </button>
      </div>

     
      <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg">
        <div className="text-blue-500 text-4xl mb-4">
          <Image
            src="/images/email.png"
            alt="Email Icon"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        <p className="text-gray-600 mb-2">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
        <p className="text-gray-800 font-semibold mb-4">Get Support</p>
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100">
          Submit Request
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="container mx-auto px-4 py-16 text-center">
        <div className="relative mb-6">
          <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-blue-500 text-2xl">
            <Image
              src="/images/Arrow 2.png"
              alt="email"
              width={64}
              height={64}
            />
          </span>
          <br />
          <h4 className="text-gray-500 uppercase text-sm font-bold tracking-widest">
            WE Can&apos;t WAIT TO MEET YOU
          </h4>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Let&apos;s Talk</h1>


        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Try it free now
        </button>
      </section>
      <Footer />
    </>

  );
};

export default Contact;