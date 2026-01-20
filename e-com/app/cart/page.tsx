import Image from "next/image";

const ProductPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/slider1.avif"
              alt="Product Image"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-3">
            <h2 className="text-2xl font-bold">Product Name</h2>
            <p className="text-gray-600">
              High-quality product with premium materials and modern design.
            </p>
            <p className="text-xl font-semibold text-indigo-600">$99.99</p>

            {/* Quantity */}
            <div className="flex items-center">
            <div className="flex items-center space-x-4 border border-gray-300 rounded-lg">
              <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                -
              </button>
              <span className="text-lg font-semibold">1</span>
              <button className="cursor-pointer px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                +
                </button>
              </div>
              <i className="fas fa-trash text-2xl ml-4 text-black hover:text-red-600 hover:scale-110 cursor-pointer"></i>
            </div>

            <hr className="my-2" />
            <hr className="my-2" />

            {/* price */}
            <div className="flex flex-col space-y-2 uppercase font-semibold">
              <p className="">subtotal: $99.99</p>
              <p>shipping: $9.99</p>
              <p>total: $109.99</p>
            </div>

            {/* Add to Cart Button */}
            <button className="uppercase mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
