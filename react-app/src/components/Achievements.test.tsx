import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Achievements from './Achievements';
import Modal from 'react-modal';

// Mock react-modal to prevent actual DOM rendering of modal
jest.mock('react-modal', () => {
  return {
    __esModule: true,
    default: ({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) => {
      return isOpen ? <div role="dialog">{children}</div> : null;
    },
  };
});

describe('Achievements Component', () => {
  test('renders the achievements header', () => {
    render(<Achievements />);
    const headerElement = screen.getByText(/Achievements/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders all achievement cards', () => {
    render(<Achievements />);
    const achievementTitles = [
      'Latin Expert Certification',
      'Published 100+ Posts',
      'Writing Challenge Champion',
      'Global Collaboration',
    ];

    achievementTitles.forEach((title) => {
      const cardElement = screen.getByText(title, { selector: 'h3' });
      expect(cardElement).toBeInTheDocument();
    });
  });

  test('opens modal with correct content when achievement is clicked', () => {
    render(<Achievements />);
    
    // Click on the "Latin Expert Certification" achievement card
    const achievementCard = screen.getByLabelText('Learn more about Latin Expert Certification');
    fireEvent.click(achievementCard);

    // Check if modal opened and displays correct content within the modal
    const modal = screen.getByRole('dialog');
    const modalTitle = within(modal).getByText('Latin Expert Certification', { selector: 'h2' });
    const modalDescription = within(modal).getByText('Received certification in Latin proficiency from a recognized online language institute.');
    const modalDetails = within(modal).getByText('Achieved on January 1, 2024, through the top online platform for Latin language certification.');

    expect(modal).toBeInTheDocument();
    expect(modalTitle).toBeInTheDocument();
    expect(modalDescription).toBeInTheDocument();
    expect(modalDetails).toBeInTheDocument();
  });

  test('closes the modal when the close button is clicked', () => {
    render(<Achievements />);

    const achievementCard = screen.getByLabelText('Learn more about Latin Expert Certification');
    fireEvent.click(achievementCard);

    const closeButton = screen.getByText(/Close/i);
    fireEvent.click(closeButton);

    // Check if modal is removed from the DOM
    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  test('opens modal with Enter key', () => {
    render(<Achievements />);

    const achievementCard = screen.getByLabelText('Learn more about Writing Challenge Champion');

    // Simulate pressing Enter key
    fireEvent.keyPress(achievementCard, { key: 'Enter', code: 'Enter', charCode: 13 });

    const modal = screen.getByRole('dialog');
    const modalTitle = within(modal).getByText('Writing Challenge Champion', { selector: 'h2' });
    expect(modalTitle).toBeInTheDocument();
  });

  test('opens modal with Space key', () => {
    render(<Achievements />);

    const achievementCard = screen.getByLabelText('Learn more about Writing Challenge Champion');

    // Simulate pressing Space key
    fireEvent.keyPress(achievementCard, { key: ' ', code: 'Space', charCode: 32 });

    const modal = screen.getByRole('dialog');
    const modalTitle = within(modal).getByText('Writing Challenge Champion', { selector: 'h2' });
    expect(modalTitle).toBeInTheDocument();
  });
});
