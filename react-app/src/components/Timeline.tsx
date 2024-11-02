import React, { useState, KeyboardEvent } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  { date: '2023-12-15', title: 'Community Launch', description: 'The Latin Blog community officially launches to connect Latin learners and enthusiasts worldwide.' },
  { date: '2024-01-10', title: 'First Monthly Writing Challenge', description: 'Members submit stories and poems in Latin for the first community writing challenge.' },
  { date: '2024-02-14', title: 'Valentine’s Day Collaboration', description: 'A collaborative poetry event celebrating love with classical and modern Latin verses.' },
  { date: '2024-04-21', title: 'Cultural Exchange: Latin & Romance Languages', description: 'Members explore the evolution of Latin into modern Romance languages through essays and discussions.' },
  { date: '2024-06-24', title: 'Latin and Music Workshop', description: 'An interactive workshop exploring the influence of Latin on modern music and hymns.' },
  { date: '2024-08-01', title: 'Latin Phrase of the Day Launch', description: 'The community introduces a daily Latin phrase to inspire members and enrich vocabulary.' },
  { date: '2024-09-10', title: 'Live Q&A with Latin Scholars', description: 'A live-streamed event where experts answer questions and discuss interesting topics in classical Latin.' },
  { date: '2024-10-31', title: 'Latin Halloween Special', description: 'Members share spooky Latin-themed stories, poems, and art to celebrate the season.' },
  { date: '2024-12-25', title: 'Holiday Celebration: Christmas in Latin', description: 'Community members come together to share Latin holiday greetings, carols, and stories.' },
];

const Timeline: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItem((prev) => (prev === index ? null : index));
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLLIElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleExpand(index);
    }
  };

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Historical Timeline of Our Community</h2>
      <ul className="timeline-list" role="list">
        {timelineData.map((item, index) => (
          <li
            key={index}
            className={`timeline-item ${expandedItem === index ? 'expanded' : ''}`}
            role="button"
            tabIndex={0}
            aria-expanded={expandedItem === index}
            onClick={() => toggleExpand(index)}
            onKeyDown={(e) => handleKeyPress(e, index)}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="timeline-date">{item.date}</p>
              {expandedItem === index && (
                <p className="timeline-description">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
