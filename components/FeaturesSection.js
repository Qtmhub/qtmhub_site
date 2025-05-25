import React from "react";
import FeatureBox from "@/components/FeatureBox";

const features = [
  {
    icon: "/images/feat1.svg",
    title: "M&E Frameworks",
    bgColor: "bg-blue-50",
  },
  {
    icon: "/images/feat2.svg",
    title: "Simplifying Data",
    bgColor: "bg-yellow-50",
  },
  {
    icon: "/images/feat3.svg",
    title: "Sustainable Finance",
    bgColor: "bg-blue-50",
  },
  {
    icon: "/images/feat4.svg",
    title: "Innovative Technology",
    bgColor: "bg-orange-50",
  },
];

export default function FeaturesSection() {
  return (
    <section className="hidden sm:block w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <FeatureBox
              key={index}
              icon={<img src={feat.icon} alt={feat.title} width={36} height={36} />}
              title={feat.title}
              bgColor={feat.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

