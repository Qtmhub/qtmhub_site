import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function SimplifyingDataSection() {
  return (
    <section className="w-full py-16 bg-[#002A3A] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content Side */}
          <div className="w-full md:w-2/5">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Simplifying Data</h2>
            <p className="text-lg leading-relaxed mb-8">
              We collect, process, analyze, curate and visualize multidimensional datasets to enable evidence-based
              insights that inform decision making and policy <span className="italic">formulation</span>.
            </p>
           <Link href="#contact">
            <Button className="bg-[#00E676] hover:bg-[#00C853] text-black font-medium rounded-md px-8 py-4 text-lg">
              Work with us
            </Button>
            </Link>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-3/5 md:mt-0 mt-10">
            <div className="relative w-full h-[350px]">
              <Image
                src="/images/stairs.svg"
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
  );
}
