import { ReactElement, ReactEventHandler } from 'react';
import { X } from 'lucide-react';

interface FishModalProps {
  onClose: ReactEventHandler;
}

const FishModal: React.FC<FishModalProps> = ({ onClose }): ReactElement => {
  const technologies = ['JS.webp', 'NextJs.webp', 'React.webp', 'Convex.webp', 'MongoDB.webp', 'ShadcnUI.webp', 'StyledComponents.webp', 'Tailwindcss.webp', 'Threejs.webp', 'ReactNative.webp', 'Python.webp', 'OpenCV.webp', 'Azure.webp', 'Blender.webp', 'Unity.webp'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="relative z-10 bg-white p-8 rounded-3xl max-w-xl w-96 max-h-openCard overflow-y-auto flex flex-col items-center">
        <div className="flex justify-between w-full mb-4">
          <h2 className="text-2xl font-bold">
            Technology Stack
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900"
            aria-label="Close Modal"
          >
            <X size={25} />
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <div key={index} className="w-8 h-8 bg-gray-200 rounded-md m-1">
              <img src={tech} alt={tech} className="w-full h-full object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FishModal;
