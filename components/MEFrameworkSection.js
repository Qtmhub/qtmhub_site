import Image from "next/image";

export default function MEFrameworkSection() {
  return (
    <section  id="services" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* DNA Illustration Side */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              {/* DNA Helix SVG */}
             
              <Image
                src="/images/helix.svg"
                alt="Professionals collaborating on budget planning"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#001428] mb-6">Implement M&E Frameworks</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlock value for stakeholders in the health value chain by implementing monitoring and evaluation,
              budgeting, qualitative research project design, disease surveillance system design and project management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
