import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { FeaturedItems } from "@/components/FeaturedItems";
import { LatestRelease } from "@/components/LatestRelease";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Header />
      <FeaturedItems />
      <LatestRelease />
    </main>
  );
}
