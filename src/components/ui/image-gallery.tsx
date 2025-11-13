import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="w-full flex flex-col items-center justify-start py-12">
        <div className="max-w-3xl text-center px-4">
          <div className="inline-block px-3 py-1 mb-4 text-sm border rounded-full border-accent text-accent">
            Our Work
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-accent">Our Latest Work</h2>
          <p className="text-sm text-muted-foreground mt-2">
            At Precision Signs, we take pride in delivering high-quality signage solutions that help businesses stand out. As a leading signage company in Houston Texas, we've worked with a wide range of clients from local shops to large corporations creating impactful signs that grab attention and leave a lasting impression.
          </p>
        </div>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={src}
                alt={`Signage work ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
