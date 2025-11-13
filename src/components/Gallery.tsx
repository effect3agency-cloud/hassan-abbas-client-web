import ImageGallery from "@/components/ui/image-gallery";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

  return <ImageGallery images={images} />;
};

export default Gallery;
