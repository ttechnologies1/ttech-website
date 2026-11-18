import { HomeFocus } from "@/components/home-focus";
import { ClientsSection, HomeHero, ServicesSection, TestimonialSection, WorkSection } from "@/components/sections";
import { clients, testimonials } from "@/lib/site";

export default function Home() {
  return <><HomeHero/>{clients.length > 0 && <ClientsSection/>}<ServicesSection preview/><WorkSection preview/>{testimonials.length > 0 && <TestimonialSection/>}<HomeFocus/></>;
}
