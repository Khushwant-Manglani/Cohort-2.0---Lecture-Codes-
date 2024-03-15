import Image from "next/image";
import { Inter } from "next/font/google";
import { VidioCard } from "@/components/VidioCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VidioCard></VidioCard>
    </div>
  );
}
