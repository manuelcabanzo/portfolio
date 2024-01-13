import { useState } from 'react';
import { X } from 'lucide-react';

interface HalfProjectCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  technologies?: string[] | undefined;
}

const HalfProjectCard: React.FC<HalfProjectCardProps> = ({
  imageSrc,
  title,
  description,
  technologies = [],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='flex flex-col items-center mt-4'>
      <div
        className="flex-none w-36 h-14 p-4 bg-pardogray rounded-3xl overflow-hidden cursor-pointer"
        onClick={openModal}
      >
        {title && (
          <p className="font-bold text-center">
            {title}
          </p>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-75" />
          <div className="relative z-10 bg-white p-8 rounded-3xl max-w-xl w-full max-h-openCard overflow-y-auto flex">
            <div className="w-1/2 pr-4 h-full">
              {imageSrc && (
                <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-3xl" />
              )}
            </div>

            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{title}</h2>
                  <div className="flex space-x-4">
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-900">
                      <X size={25} />
                    </button>
                  </div>
                </div>
                <p className="mb-4">{description}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-end">
                  {technologies && technologies.length > 0 && (
                    technologies.map((tech, index) => (
                      <img key={index} src={tech} alt={tech} className="w-6 h-6 mr-2" />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HalfProjectCard;