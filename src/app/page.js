import Navbar from "@/components/navbar";
import PageWrapper from "@/components/pageWrapper";
import HomeHeader from "@/templates/home/header";

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <HomeHeader />
    </PageWrapper>
  );
}
