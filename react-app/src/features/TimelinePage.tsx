import React, { useState, useEffect } from 'react';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements'; // Example of another swappable component

const TimelinePage: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'timeline' | 'achievements'>('timeline');

  // Set the document title based on the active component
  useEffect(() => {
    if (activeComponent === 'timeline') {
      document.title = 'Our Timeline - The Communal Latin Practice Blog';
    } else {
      document.title = 'Achievements - The Communal Latin Practice Blog';
    }
  }, [activeComponent]); // Runs when activeComponent changes

  return (
    <div className="parallax-container">
      <div className="component-switcher">
        <button
          className={`timeline-button ${activeComponent === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveComponent('timeline')}
        >
          Our Timeline
        </button>
        <button
          className={`achievements-button ${activeComponent === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveComponent('achievements')}
        >
          Achievements
        </button>
      </div>

      <div className="component-display">
        {activeComponent === 'timeline' && <Timeline />}
        {activeComponent === 'achievements' && <Achievements />}
      </div>
    </div>
  );
};

export default TimelinePage;
