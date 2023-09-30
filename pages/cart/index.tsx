import { CartItems } from "@/components/CartItems";
import { FeaturedItems } from "@/components/FeaturedItems";


export default function Home() {
  return (
    <main className="px-10 py-8">
      <CartItems/>
      <FeaturedItems/>
    </main>
  );
}
