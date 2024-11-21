"use client";

import { Auth0Provider } from "@auth0/auth0-react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

const AppWrapper = () => (
  <Auth0Provider
    domain="dev-qum5nqab770ducws.us.auth0.com"
    clientId="85VDks3C4mN4u5g5gPU7ot1SEqj27H9a"
    authorizationParams={{
      redirect_uri: typeof window !== "undefined" ? window.location.origin : "",
    }}
  >
    <Home />
  </Auth0Provider>
);

export default AppWrapper;
