import { FULL_GALLERY_CATEGORIES } from "@/lib/hub-images";

export default function GallerySection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {FULL_GALLERY_CATEGORIES.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-lg font-bold text-[#172018] mb-5 pb-2 border-b-2 border-[#1b5e2b]">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg overflow-hidden border border-[#dfe6d7] hover:shadow-lg transition group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#172018] mb-1.5">{item.title}</h3>
                    <p className="text-[#61705d] text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
