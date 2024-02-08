import performanceImg from "/public/performance.jpg";
import Hero from "@/components/Hero";

export default function Performance() {
  const title = "Welcome, we measure performance"
  return (
    <div className="relative h-screen w-screen">
      <Hero img={performanceImg} title={title} />
    </div>
  );
}
