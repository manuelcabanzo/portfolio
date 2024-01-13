import { ReactElement, ReactEventHandler } from 'react';
import { X } from 'lucide-react';

interface BananaModalProps {
  onClose: ReactEventHandler;
}

const BananaModal: React.FC<BananaModalProps> = ({ 
  onClose 
}): ReactElement => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="relative z-10 bg-white p-8 rounded-3xl max-w-xl w-96 max-h-openCard overflow-y-auto flex flex-col items-center">
        <div className="flex justify-between w-full mb-4">
          <h2 className="text-2xl font-bold">
            More Projects
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900"
            aria-label="Close Modal"
          >
            <X size={25} />
          </button>
        </div>
        <p>
          This is not an exhaustive list of my projects. <br />
          These are just the ones I believe represent me the best.
        </p>
      </div>
    </div>
  );
};

export default BananaModal;