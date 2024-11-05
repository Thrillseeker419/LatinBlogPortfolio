import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactModal from 'react-modal';

// Assuming your root element has the id 'root'
if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
  }
  

interface Achievement {
  icon: string;
  title: string;
  description: string;
  details?: string; // Optional field for more details
}

const achievementsData: Achievement[] = [
  {
    icon: '🎓',
    title: 'Latin Expert Certification',
    description: 'Received certification in Latin proficiency from a recognized online language institute.',
    details: 'Achieved on January 1, 2024, through the top online platform for Latin language certification.',
  },
  {
    icon: '✍️',
    title: 'Published 100+ Posts',
    description: 'Contributed over 100 posts to the Latin Blog, sharing insights and ideas.',
    details: 'Reached the 100-post milestone on February 14, 2024. Your contributions have sparked over 100 discussions!',
  },
  {
    icon: '🏆',
    title: 'Writing Challenge Champion',
    description: 'Won the community’s first Latin writing challenge with an original poem.',
    details: 'Victory secured during the March 2024 competition with a poem inspired by classical themes.',
  },
  {
    icon: '🌍',
    title: 'Global Collaboration',
    description: 'Organized a cross-cultural Latin event connecting users across 5 continents.',
    details: 'Held on June 24, 2024, with participants from Europe, South America, and beyond.',
  },
];

const Achievements: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  
  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="achievements-container">
      <h2 className="achievements-header">Achievements</h2>
      <div className="achievement-list">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="achievement-card"
            onClick={() => openModal(achievement)}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && openModal(achievement)}
            tabIndex={0} // Make focusable for accessibility
            role="button"
            aria-label={`Learn more about ${achievement.title}`}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>

      {selectedAchievement && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel={selectedAchievement.title}
          className="achievement-modal"
          overlayClassName="achievement-modal-overlay"
          closeTimeoutMS={200} // Smooth closing animation
          ariaHideApp={process.env.NODE_ENV !== 'test'}
        >
          <div
            className="modal-content"
            // Remove tabIndex from here
            >
            <h2 tabIndex={0}>{selectedAchievement.title}</h2>
            <div className="achievement-icon" tabIndex={0} aria-hidden="true">
                {selectedAchievement.icon}
            </div>
            <p className="modal-description" tabIndex={0}>
                {selectedAchievement.description}
            </p>
            <p className="modal-details" tabIndex={0}>
                {selectedAchievement.details}
            </p>
            <button onClick={closeModal} className="modal-close-button">
                Close
            </button>
        </div>

        </Modal>
      )}
    </div>
  );
};

export default Achievements;
