import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Woo Panel</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/orders" className="text-blue-600 hover:underline">Orders</Link>
        <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
      </nav>
    </div>
  );
}
