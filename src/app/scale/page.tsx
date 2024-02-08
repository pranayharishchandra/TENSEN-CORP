import homeImg from "/public/scale.jpg";
import Hero from "@/components/Hero";

export default function Scale() {
  const title = "Welcome, we are Scaleable "
  return (
    <div className="relative h-screen w-screen">
      <Hero img={homeImg} title={title} />
    </div>
  );
}
