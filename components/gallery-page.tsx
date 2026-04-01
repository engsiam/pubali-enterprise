"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
};

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Works");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [visibleCount, setVisibleCount] = useState<number>(9);

  // Gallery data with your existing image paths
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
      src: "/images/Unloading-Coal.jpg",
      alt: "Sand and aggregate operations",
      category: "Day Work",
      title: "Sand & Aggregates",
      description: "Bulk material unloading with modern equipment",
    },

    // Night Work
    {
      id: "night-1",
      src: "/images/barge-loading.jpg",
      alt: "Night operations setup",
      category: "Night Work",
      title: "Night Operations Setup",
      description: "24/7 operations with industrial LED lighting systems",
    },
    {
      id: "night-2",
      src: "/images/can-holding.jpg",
      alt: "Night coal unloading",
      category: "Night Work",
      title: "Night Coal Unloading",
      description: "Efficient night-time coal handling with safety protocols",
    },
    {
      id: "night-3",
      src: "/images/cargo-unloading.jpg",
      alt: "Night fertilizer operations",
      category: "Night Work",
      title: "Night Fertilizer Operations",
      description: "Specialized night operations for bulk fertilizer",
    },

    // Heavy Equipment
    {
      id: "heavy-1",
      src: "/images/crane-operations.jpg",
      alt: "Crane operations",
      category: "Heavy Equipment",
      title: "Crane Operations",
      description: "Up to 500-ton capacity crane for heavy lifting",
    },
    {
      id: "heavy-2",
      src: "/images/crane-operations.jpg",
      alt: "Loader systems",
      category: "Heavy Equipment",
      title: "Loader Systems",
      description: "High-capacity bulk material loading equipment",
    },
    {
      id: "heavy-3",
      src: "/images/hero-cargo-ship.jpg",
      alt: "Heavy machinery unloading",
      category: "Heavy Equipment",
      title: "Heavy Machinery",
      description: "Industrial equipment unloading services",
    },

    // River Projects
    {
      id: "river-1",
      src: "/images/barge-loading.jpg",
      alt: "Barge loading operations",
      category: "River Projects",
      title: "Barge Loading",
      description: "River barge loading and logistics operations",
    },
    {
      id: "river-2",
      src: "/images/port-operations.jpg",
      alt: "River port operations",
      category: "River Projects",
      title: "River Port Work",
      description: "Complete river logistics and cargo handling",
    },
    {
      id: "river-3",
      src: "/images/river-barge.jpg",
      alt: "Container transfer operations",
      category: "River Projects",
      title: "Container Transfer",
      description: "River-based container transfer operations",
    },
  ];

  const categories = useMemo(() => {
    const counts = {
      "All Works": galleryImages.length,
      "Day Work": galleryImages.filter((item) => item.category === "Day Work")
        .length,
      "Night Work": galleryImages.filter(
        (item) => item.category === "Night Work",
      ).length,
      "Heavy Equipment": galleryImages.filter(
        (item) => item.category === "Heavy Equipment",
      ).length,
      "River Projects": galleryImages.filter(
        (item) => item.category === "River Projects",
      ).length,
    };

    return [
      { name: "All Works", count: counts["All Works"] },
      { name: "Day Work", count: counts["Day Work"] },
      { name: "Night Work", count: counts["Night Work"] },
      { name: "Heavy Equipment", count: counts["Heavy Equipment"] },
      { name: "River Projects", count: counts["River Projects"] },
    ];
  }, [galleryImages]); // Added galleryImages as a dependency just to be safe

  const filteredImages =
    selectedCategory === "All Works"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(9);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      id="gallery"
      className="bg-gradient-to-b from-white to-slate-50 py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Portfolio Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-lg">
            Explore our extensive work portfolio showcasing real operations,
            equipment, and projects across Bangladesh&apos;s ports.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {category.name}
              <span
                className={`text-[11px] ${
                  selectedCategory === category.name
                    ? "text-white/80"
                    : "text-slate-400"
                }`}
              >
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3"
        >
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.10)]"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] w-full bg-slate-200">
                {imageErrors.has(image.id) ? (
                  <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-500">
                    <p className="text-sm font-medium">Image not available</p>
                  </div>
                ) : (
                  <>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={() => handleImageError(image.id)}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute right-3 top-3 z-10">
                      <span className="rounded-full bg-blue-600/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
                        {image.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                      <h3 className="text-sm font-semibold leading-snug md:text-lg">
                        {image.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-[11px] text-white/85 md:text-sm">
                        {image.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Load More */}
        {visibleCount < filteredImages.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="cursor-pointer inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
            >
              Load More Images
            </button>
          </div>
        )}

        {/* Footer Count */}
        <p className="mt-6 text-center text-sm text-slate-500">
          Showing {Math.min(visibleCount, filteredImages.length)} of{" "}
          {filteredImages.length} projects
        </p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {(() => {
            const img = selectedImage;
            return (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/65"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
                <div className="relative aspect-[16/10] w-full bg-slate-100">
                  {imageErrors.has(img.id) ? (
                    <div className="flex h-full w-full items-center justify-center text-slate-500">
                      Image not available
                    </div>
                  ) : (
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 900px"
                      priority
                      onError={() => handleImageError(img.id)}
                    />
                  )}
                </div>
                <div className="p-5 md:p-7">
                  <span className="inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-600">
                    {img.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {img.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                    {img.description}
                  </p>
                </div>
              </motion.div>
            );
          })()}
        </motion.div>
      )}
    </motion.section>
  );
}
