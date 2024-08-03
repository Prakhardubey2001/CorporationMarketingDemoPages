import Image from "next/image";
import homeImg from "../../public/home.jpg"
import Prebuild from "@/components/prebuild";


export default function Home() {
  return (
    <Prebuild imgData={homeImg} imgAlt="car factory" title="Proffesional Hosting" />

  );
}
