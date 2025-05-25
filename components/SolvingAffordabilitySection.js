import Image from "next/image";


export default function SolvingAffordabilitySection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Circular Diagram */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <Image
              src="/images/circle.svg"
              alt="Professionals collaborating on budget planning"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#001428] mb-6">Solving Affordability</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We design health policies, health financing models and strategies with focus on costing, health research,
              development of strategic plans, investment cases and advocacy tool kits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
