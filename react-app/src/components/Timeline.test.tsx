import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Timeline from './Timeline';

describe('Timeline Component', () => {
  test('renders the timeline header', () => {
    render(<Timeline />);
    const headerElement = screen.getByText(/Milestones of Our Latin Journey/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders all timeline items', () => {
    render(<Timeline />);
    const timelineItems = [
      'Community Launch',
      'First Monthly Writing Challenge',
      'Valentine’s Day Collaboration',
      'Cultural Exchange: Latin & Romance Languages',
      'Latin and Music Workshop',
      'Latin Phrase of the Day Launch',
      'Live Q&A with Latin Scholars',
      'Latin Halloween Special',
      'Holiday Celebration: Christmas in Latin',
    ];

    timelineItems.forEach((title) => {
      const timelineItem = screen.getByText(title, { selector: 'h3' });
      expect(timelineItem).toBeInTheDocument();
    });
  });

  test('expands and collapses timeline items when clicked', () => {
    render(<Timeline />);

    // Click on the "Community Launch" item
    const timelineItem = screen.getByText('Community Launch', { selector: 'h3' });
    fireEvent.click(timelineItem);

    // Check if the description is visible after clicking
    const description = screen.getByText('The Latin Blog community officially launches to connect Latin learners and enthusiasts worldwide.');
    expect(description).toBeInTheDocument();

    // Click again to collapse
    fireEvent.click(timelineItem);
    expect(description).not.toBeInTheDocument();
  });

  test('expands timeline item with Enter key', () => {
    render(<Timeline />);

    const timelineItem = screen.getByText('First Monthly Writing Challenge', { selector: 'h3' });

    // Simulate pressing Enter key
    fireEvent.keyDown(timelineItem, { key: 'Enter', code: 'Enter', charCode: 13 });

    const description = screen.getByText('Members submit stories and poems in Latin for the first community writing challenge.');
    expect(description).toBeInTheDocument();
  });

  test('expands timeline item with Space key', () => {
    render(<Timeline />);

    const timelineItem = screen.getByText('Valentine’s Day Collaboration', { selector: 'h3' });

    // Simulate pressing Space key
    fireEvent.keyDown(timelineItem, { key: ' ', code: 'Space', charCode: 32 });

    const description = screen.getByText('A collaborative poetry event celebrating love with classical and modern Latin verses.');
    expect(description).toBeInTheDocument();
  });

  test('closes an expanded timeline item when a different item is clicked', () => {
    render(<Timeline />);

    // Click on "Latin and Music Workshop" to expand
    const timelineItem = screen.getByText('Latin and Music Workshop', { selector: 'h3' });
    fireEvent.click(timelineItem);

    const description = screen.getByText('An interactive workshop exploring the influence of Latin on modern music and hymns.');
    expect(description).toBeInTheDocument();

    // Click on another item "Cultural Exchange"
    const anotherTimelineItem = screen.getByText('Cultural Exchange: Latin & Romance Languages', { selector: 'h3' });
    fireEvent.click(anotherTimelineItem);

    // The previous description should be collapsed
    expect(description).not.toBeInTheDocument();

    const newDescription = screen.getByText('Members explore the evolution of Latin into modern Romance languages through essays and discussions.');
    expect(newDescription).toBeInTheDocument();
  });
});
