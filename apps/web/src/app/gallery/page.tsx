import {
  HeaderSection,
  GallerySection,
  CTASection,
} from "@/components/sections/gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <GallerySection />
      <CTASection />
    </div>
  );
}
