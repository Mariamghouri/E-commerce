"use client";

import PartnerLogos from "@/components/PartnerLogos";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from 'next/link';

    const faqs = [
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
    ];


const Pricing = () => {


  return (
    <>
     <section className="py-12 text-center">
  <h4 className="text-sm uppercase text-gray-500 mb-2">Pricing</h4>
  <h1 className="text-4xl font-bold text-gray-800">Simple Pricing</h1>
  <div className="mt-4 flex justify-center items-center space-x-2 text-sm text-gray-500">
  
<Link href="/" className="hover:text-gray-800">
  Home
</Link>
    <span>›</span>
    <span>Pricing</span>
  </div>
</section>
<section className="py-12 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing</h2>
  <p className="text-gray-500 max-w-2xl mx-auto mb-6">
    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
  </p>
  <div className="flex justify-center items-center space-x-4">
    
    <button className="px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition">
      Monthly
    </button>
    
    <button className="px-4 py-2 border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition">
      Yearly
    </button>
    
    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
      Save 25%
    </span>
  </div>
</section>
<section className="py-12 bg-gray-50">
  <div className="container mx-auto text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
      <div className="border border-gray-200 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">FREE</h3>
        <p className="text-gray-500">Organize across all apps by hand</p>
        <h4 className="text-4xl font-bold text-gray-800 mt-4">$0</h4>
        <p className="text-gray-500">Per Month</p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center justify-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> Unlimited product updates
          </li>
          <li className="flex items-center justify-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> Unlimited product updates
          </li>
        </ul>
      </div>
 
      <div className="border border-gray-200 rounded-lg p-6 shadow-lg bg-blue-950 text-white relative">
        <div className="absolute inset-x-0 -top-4 text-center">
          <span className="px-4 py-1 text-sm bg-blue-700 rounded-full">Most Popular</span>
        </div>
        <h3 className="text-xl font-bold mb-2">STANDARD</h3>
        <p className="text-blue-100">Organize across all apps by hand</p>
        <h4 className="text-4xl font-bold mt-4">$9.99</h4>
        <p className="text-blue-100">Per Month</p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center justify-center">
            <span className="text-green-300 mr-2">✔</span> Unlimited product updates
          </li>
          <li className="flex items-center justify-center">
            <span className="text-green-300 mr-2">✔</span> Unlimited product updates
          </li>
        </ul>
      </div>

     
      <div className="border border-gray-200 rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-2">PREMIUM</h3>
        <p className="text-gray-500">Organize across all apps by hand</p>
        <h4 className="text-4xl font-bold text-gray-800 mt-4">$19.99</h4>
        <p className="text-gray-500">Per Month</p>
        <ul className="mt-6 space-y-2">
          <li className="flex items-center justify-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> Unlimited product updates
          </li>
          <li className="flex items-center justify-center text-gray-600">
            <span className="text-green-500 mr-2">✔</span> Unlimited product updates
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

    <section className="container mx-auto py-12 px-4">
      
      <h2 className="text-center text-lg font-semibold text-gray-600 mb-8">
        Trusted By Over 4000 Big Companies
      </h2>

       
     <PartnerLogos/>
    </section>
    <section className="container mx-auto px-6 py-16">
      
      <div className="text-center mb-12">
        <h2 className="text-xl font-semibold text-gray-800">Pricing FAQs</h2>
        <p className="text-gray-500 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics
        </p>
      </div>

       
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="flex space-x-4">
            <div className="text-blue-500 text-xl">›</div>
            <div>
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <p className="text-gray-500 mt-1">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      
      <div className="text-center mt-12">
        <p className="text-gray-600">
          Haven’t got your answer?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Contact our support
          </a>
        </p>
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
    <Footer/>
    </>
  );
};

export default Pricing;
