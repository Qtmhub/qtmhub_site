"use client";

import  Button  from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BudgetAllocationSection() {
  return (
    <section id ='services' className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/budgetallocation.png"
                alt="Professionals collaborating on budget planning"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 bg-gray-100 p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#001428] mb-6">
              Improved Budget Allocation
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We have streamlined the budget development process, reducing the time and effort required to create a
              comprehensive AOP
            </p>
            <Link href="#contact">
            <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-6 py-4 flex items-center gap-2">
              Work With Us
              <ArrowRight size={16} />
            </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}