"use client";
import { Loader, X } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Day Work" | "Night Work" | "Heavy Equipment" | "River Projects";
  title: string;
  description: string;
}

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageLoading, setImageLoading] = useState<{ [key: string]: boolean }>(
    {},
  );
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  // Gallery data with all images
  const galleryImages: GalleryImage[] = [
    // Day Work
    {
      id: "day-1",
      src: "/images/operations/1.jpg",
      alt: "Coal loading operations during daytime",
      category: "Day Work",
      title: "Coal Loading - Dhaka Port",
      description:
        "Professional coal loading operations with precision equipment",
    },
    {
      id: "day-2",
      src: "/images/port-operations.jpg",
      alt: "Port operations during day",
      category: "Day Work",
      title: "Port Operations",
      description: "Full-scale cargo handling during business hours",
    },
    {
      id: "day-3",
      src: "/images/can-holding.jpg",
      alt: "Container holding operations",
      category: "Day Work",
      title: "Container Holding",
      description: "Professional container management and holding services",
    },
    {
      id: "day-4",
      src: "/images/operations/3.jpg",
      alt: "Sand aggregates unloading",
      category: "Day Work",
      title: "Sand & Aggregates",
      description: "Bulk material unloading with modern equipment",
    },

    // Night Work
    {
      id: "night-1",
      src: "/images/operations/2.jpg",
      alt: "Night operations with LED lighting",
      category: "Night Work",
      title: "Night Operations Setup",
      description: "24/7 operations with industrial LED lighting systems",
    },
    {
      id: "night-2",
      src: "/images/Unloading-Coal.jpg",
      alt: "Coal unloading at night",
      category: "Night Work",
      title: "Night Coal Unloading",
      description: "Efficient night-time coal handling with safety protocols",
    },
    {
      id: "night-3",
      src: "/images/Unloading-Fertiliser.jpg",
      alt: "Fertilizer unloading night operations",
      category: "Night Work",
      title: "Night Fertilizer Operations",
      description: "Specialized night operations for bulk fertilizer",
    },

    // Heavy Equipment
    {
      id: "equipment-1",
      src: "/images/operations/1.jpg",
      alt: "Heavy crane operations",
      category: "Heavy Equipment",
      title: "Crane Operations",
      description: "Up to 500-ton capacity crane for heavy lifting",
    },
    {
      id: "equipment-2",
      src: "/images/port-operations.jpg",
      alt: "Loading system equipment",
      category: "Heavy Equipment",
      title: "Loader Systems",
      description: "High-capacity bulk material loading equipment",
    },
    {
      id: "equipment-3",
      src: "/images/Unloading-Coal.jpg",
      alt: "Heavy machinery handling",
      category: "Heavy Equipment",
      title: "Heavy Machinery",
      description: "Industrial equipment unloading services",
    },

    // River Projects
    {
      id: "river-1",
      src: "/images/operations/2.jpg",
      alt: "Barge loading on river",
      category: "River Projects",
      title: "Barge Loading",
      description: "River barge loading and logistics operations",
    },
    {
      id: "river-2",
      src: "/images/operations/3.jpg",
      alt: "River port operations",
      category: "River Projects",
      title: "River Port Work",
      description: "Complete river logistics and cargo handling",
    },
    {
      id: "river-3",
      src: "/images/can-holding.jpg",
      alt: "Container operations on river",
      category: "River Projects",
      title: "Container Transfer",
      description: "River-based container transfer operations",
    },
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const categories = [
    "all",
    "Day Work",
    "Night Work",
    "Heavy Equipment",
    "River Projects",
  ];

  const handleImageLoad = (id: string) => {
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
    setImageLoading((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return (
    <section id="gallery" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive work portfolio showcasing real operations,
            equipment, and projects across Bangladesh's ports
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-accent text-white shadow-lg"
                  : "bg-gray-100 text-foreground hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {category === "all" ? "All Works" : category}
              {category !== "all" && (
                <span className="ml-2 text-xs">
                  (
                  {
                    galleryImages.filter((img) => img.category === category)
                      .length
                  }
                  )
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
              style={{
                // Varying heights for masonry effect - every 3rd and 5th items span 2 rows
                gridRowEnd:
                  idx % 3 === 0
                    ? "span 2"
                    : idx % 5 === 0
                      ? "span 2"
                      : "span 1",
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full bg-gray-200">
                {imageErrors.has(image.id) ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gray-300">
                    <div className="text-gray-500 text-center">
                      <p className="text-sm font-medium">Image not available</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onLoad={() => handleImageLoad(image.id)}
                      onError={() => handleImageError(image.id)}
                    />

                    {/* Loading Spinner */}
                    {imageLoading[image.id] !== false &&
                      !imageErrors.has(image.id) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <Loader className="w-6 h-6 text-gray-600 animate-spin" />
                        </div>
                      )}
                  </>
                )}

                {/* Overlay */}
                {!imageErrors.has(image.id) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}

                {/* Category Badge */}
                {!imageErrors.has(image.id) && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {image.category}
                    </span>
                  </div>
                )}

                {/* Information */}
                {!imageErrors.has(image.id) && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No images found in this category. Try selecting another filter.
            </p>
          </div>
        )}

        {/* Image Count */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-60 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all"
          >
            <X size={24} />
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl max-h-screen overflow-y-auto bg-black rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-96 md:h-[500px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Info */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-gray-900 to-black text-white">
              <div className="mb-4">
                <span className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {selectedImage.category}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedImage.title}
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {selectedImage.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="flex-1 bg-accent hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Get Similar Services
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
