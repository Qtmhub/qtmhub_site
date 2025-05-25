import  Button  from "@/components/ui/Button"
import Image from "next/image";
import Link from "next/link";

export default function InnovatingTechnologySection() {
  return (
    <section className="w-full py-16 bg-[#002A3A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Side */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Innovating Technology</h2>
            <p className="text-lg leading-relaxed mb-8">
              We design, develop and deploy emerging and innovative technologies in simple ways to improve service
              delivery, cybersecurity and data integrity.
            </p>
            <Link href="#contact">
            <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-8 py-4 text-lg">
              Let's Talk
            </Button>
            </Link>
          </div>

          {/* Visualization Side */}
          <div className="w-full lg:w-3/5 mt-8 lg:mt-0 relative">
            <div className="relative w-full h-[350px]">
              {/* Base circles/rings */}
              <Image
                src="/images/technology.svg"
                alt="Data processing steps visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
