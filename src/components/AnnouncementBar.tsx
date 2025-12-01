import { motion } from "framer-motion";
import { X } from "lucide-react";

interface AnnouncementBarProps {
  onClose: () => void;
}

const AnnouncementBar = ({ onClose }: AnnouncementBarProps) => {
  
  return (
    <div className="w-full absolute top-0 left-0 right-0 overflow-hidden h-12 border-b border-gray-200 z-50" style={{ backgroundColor: '#fff3e4' }}>
      {/* Sliding text container */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <motion.div
          className="flex items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate the content for seamless loop */}
          {[...Array(2)].map((_, groupIndex) => (
            <span key={groupIndex} className="inline-flex">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="text-orange-500 text-sm px-8">
                  <span className="font-bold">Black Friday Season Sale:</span> Get your first service with a 30% service charge discount.
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Close announcement"
      >
        <X className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
};

export default AnnouncementBar;
