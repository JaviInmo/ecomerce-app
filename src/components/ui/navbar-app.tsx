import Link from "next/link";

export const NavbarApp = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/">My Ecomerce</Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/cart" className="hover:text-blue-600">
            Cart
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
};
