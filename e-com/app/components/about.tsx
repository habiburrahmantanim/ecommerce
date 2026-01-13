import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about.avif"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 gap-2 flex flex-col">
          <h2 className="text-4xl font-bold pb-6 text-center text-gray-900 mb-4">Our Story</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Founded in 2010, FashionHub started as a small boutique with a
            passion for quality fashion. Today, we've grown into a trusted
            online destination for stylish, affordable clothing.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            We believe that everyone deserves to look their best without
            breaking the bank. That's why we carefully curate our collections to
            bring you the latest trends at prices that won't hurt your wallet.
          </p>

          {/* Stats */}
          <div className="flex justify-between text-center max-w-md">
            <div>
              <h3 className="text-3xl font-bold text-indigo-600">10K+</h3>
              <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">500+</h3>
              <p className="text-sm text-gray-600 mt-1">Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
              <p className="text-sm text-gray-600 mt-1">Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
