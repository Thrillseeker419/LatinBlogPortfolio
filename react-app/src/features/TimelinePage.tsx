import React, { useState } from 'react';
import Timeline from '../components/Timeline';
import Achievements from '../components/Achievements'; // Example of another swappable component

const TimelinePage: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'timeline' | 'achievements'>('timeline');

  return (
    <div className="parallax-container">
      <div className="component-switcher">
        <button className="timeline-button" onClick={() => setActiveComponent('timeline')}>Our Timeline</button>
        <button className="achievements-button" onClick={() => setActiveComponent('achievements')}>Achievements</button>
      </div>

      <div className="component-display">
        {activeComponent === 'timeline' && <Timeline />}
        {activeComponent === 'achievements' && <Achievements />}
      </div>
    </div>
  );
};

export default TimelinePage;
