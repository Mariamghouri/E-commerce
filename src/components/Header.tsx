
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <>
    
      {/* Top Bar */}
      <div className="bg-blue-950 text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/call.png" alt="Phone" width={16} height={16} />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/images/mail.png" alt="Email" width={16} height={16} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
  <span>Follow Us and get a chance to win 80% off</span>
  <div className="flex space-x-3">
    <Image src="/images/insta3.png" alt="Instagram" width={16} height={16} />
    <Image src="/images/youtube.png" alt="youtube" width={16} height={16} />
    <Image src="/images/facebook3.png" alt="Facebook" width={16} height={16} />
    <Image src="/images/twitter3.png" alt="Twitter" width={16} height={16} />
  </div>
</div>

        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-900">
            Bandage
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-7 text-sm font-medium text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/Shop">
              <span className="flex items-center space-x-1">
                Shop <span>▼</span>
              </span>
            </Link>
            <Link href="/About">About</Link>
            <Link href="/Blog">Blog</Link>
            <Link href="/Pricing">Pricing</Link>
            <Link href="/Product">Product</Link>
           <Link href="/Contact">Contact</Link>

          </div>

          {/* Action Items */}
          <div className="flex items-center space-x-6">
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Login / Register
            </Link>
            <div className="flex space-x-3">
              <Link href="/search">
                <Image src="/images/glass.png" alt="Search" width={20} height={20} />
              </Link>
              <Link href="/cart">
                <Image src="/images/bluecart.png" alt="Cart" width={50} height={50} />
              </Link>
              <Link href="/blueheart">
                <Image src="/images/blueheart.png" alt="Wishlist" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    
    </>
  );
};

export default Header;
