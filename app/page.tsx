import Hero  from "@/modules/hero/components/Hero";
import Skills from "@/modules/skills/Skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-4 py-8 px-16">
      <Hero/>

      <Skills/>
    </div>
  );
}
