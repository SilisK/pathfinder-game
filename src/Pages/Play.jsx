import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayModal.css';


function Play() {
  const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // Trigger the modal to open after mounting the component
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // navigate('/'); // Uncomment to navigate back to home when modal is closed
  };

  return (
    <div className="text-white max-w-7xl m-auto flex flex-col items-center justify-center h-screen">
  
      <h2 className="text-primary text-5xl tracking-wider text-center font-bold mb-12">Choose Your Adventure</h2>
      
      <div className="grid grid-cols-3 gap-4 w-full px-10">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 1 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">THE GREAT ESCAPE</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 2 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">ON GALAXY'S EDGE</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 3 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">THE LOVE OF MY LIFE</p>
        </div>
      </div>

      <div className={`modal-backdrop ${showModal ? 'modal-visible' : 'modal-hidden'}`}>
        <div className="modal-content">
          <h3 className="text-white text-7xl mb-5 text-center uppercase tracking-wider">How to Play</h3>
          <div className="modal-icon"></div>
          {/* content */}
          <button onClick={handleCloseModal} className="bg-primary text-white uppercase tracking-wider font-semibold py-5 px-56 text-4xl rounded mt-12">PLAY</button>
        </div>
      </div>

    </div>
  );
}

export default Play;
