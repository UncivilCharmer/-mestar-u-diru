import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}