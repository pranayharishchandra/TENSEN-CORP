import homeImg from "/public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  const title = "Welcome to out home page"
  return (
    <div className="relative h-screen w-screen">
      <Hero img={homeImg} title={title} />
    </div>
  );
}
