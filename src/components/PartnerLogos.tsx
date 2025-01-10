import Image from "next/image";
const PartnerLogos = () => {
  return (
    <div className="py-4 bg-gray-100">
      <div className="container mx-auto flex justify-center space-x-20">
        <Image src="/images/hooli.png" alt="Partner 1" width={80} height={80} />
        <Image src="/images/lyft.png" alt="Partner 2" width={80} height={80} />
        <Image src="/images/leaf.png" alt="Partner 3" width={80} height={80} />
        <Image src="/images/aws.png" alt="Partner 4" width={80} height={80} />
        <Image src="/images/stripe.png" alt="Partner 5" width={80} height={80} />
        <Image src="/images/dis.png" alt="Partner 6" width={80} height={80} />
      </div>
    </div>
  );
};

export default PartnerLogos;