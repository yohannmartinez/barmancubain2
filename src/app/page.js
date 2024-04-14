import Navbar from "@/components/navbar";
import PageWrapper from "@/components/pageWrapper";
import HomeHeader from "@/templates/home/header";
import ServicesCards from "@/templates/home/servicesCards";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <HomeHeader />
      <ServicesCards />
    </PageWrapper>
  );
}
