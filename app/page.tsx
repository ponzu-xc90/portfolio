import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import ComedyVisualization from "@/components/ComedyVisualization";
import ComedyLab from "@/components/ComedyLab";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ComedyVisualization />
        <Works />
        <ComedyLab />
        <About />
      </main>
      <Footer />
    </>
  );
}
