// components/Hero.tsx
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface HeroProps {
  img: StaticImageData;
  title: string;
}

const Hero: React.FC<HeroProps> = ({ img, title }) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src={img}
          alt="home img"
          layout="fill"
          objectFit="cover"
          className="w-full h-full filter grayscale-[50%]"
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-white ">
        <h1 className="text-4xl bg-black rounded-lg p-2 bg-opacity-50">{title}</h1>
      </div>
    </div>
  );
}

export default Hero;
