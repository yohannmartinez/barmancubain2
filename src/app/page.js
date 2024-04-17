import Loader from "@/components/loader";
import Navbar from "@/components/navbar";
import PageWrapper from "@/components/pageWrapper";
import Booking from "@/templates/home/booking";
import HomeHeader from "@/templates/home/header";
import Reviews from "@/templates/home/reviews";
import ServicesCards from "@/templates/home/servicesCards";
import { imagesToLoad } from "./imagesToLoad";

export default function Home() {
  return (
    <PageWrapper>
      <Loader images={imagesToLoad} />
      <Navbar />
      <HomeHeader />
      <ServicesCards />
      <Booking />
      <Reviews />
    </PageWrapper>
  );
}
