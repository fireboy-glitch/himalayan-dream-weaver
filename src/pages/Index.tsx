
import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import ExcessNowCta from "@/components/home/ExcessNowCta";
import BlogPreview from "@/components/home/BlogPreview";
import Affiliations from "@/components/home/Affiliations";
import CollaborationSection from "@/components/home/CollaborationSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedTreks />
      <WhyChooseUs />
      <CollaborationSection />
      <Testimonials />
      <ExcessNowCta />
      <BlogPreview />
      <Affiliations />
    </Layout>
  );
};

export default Index;
