import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TimelinePage from './TimelinePage';
import userEvent from '@testing-library/user-event';

describe('TimelinePage Component', () => {
  test('displays the Timeline component by default', () => {
    render(<TimelinePage />);

    const timelineHeader = screen.getByText('Milestones of Our Latin Journey', { selector: 'h2' });
    expect(timelineHeader).toBeInTheDocument();
  });

  test('switches to Achievements component when Achievements button is clicked', () => {
    render(<TimelinePage />);

    const achievementsButton = screen.getByText('Achievements');
    fireEvent.click(achievementsButton);

    // Specifically target the <h2> header for the Achievements component
    const achievementsHeader = screen.getByText('Achievements', { selector: 'h2' });
    expect(achievementsHeader).toBeInTheDocument();
  });

  test('switches back to Timeline component when Milestones button is clicked', () => {
    render(<TimelinePage />);

    // First, switch to Achievements
    const achievementsButton = screen.getByText('Achievements');
    fireEvent.click(achievementsButton);

    // Now, switch back to Milestones
    const milestonesButton = screen.getByText('Milestones');
    fireEvent.click(milestonesButton);

    const timelineHeader = screen.getByText('Milestones of Our Latin Journey', { selector: 'h2' });
    expect(timelineHeader).toBeInTheDocument();
  });

  test('keyboard accessibility works for switching to Achievements component with Space key', async () => {
    const { container } = render(<TimelinePage />);
    
    // Select the Achievements button by its class name
    const achievementsButton = container.querySelector('.achievements-button') as HTMLButtonElement;
  
    // Simulate Space key press on the Achievements button
    await userEvent.type(achievementsButton, '{space}');
  
    // Wait for the achievements header to appear, selecting it by class name
    await waitFor(() => {
      const achievementsHeader = container.querySelector('.achievements-header') as HTMLElement;
      expect(achievementsHeader).toBeInTheDocument();
    });
  });
  

  test('keyboard accessibility works for switching back to Milestones component', async () => {
    const { getByText, getByRole } = render(<TimelinePage />);
  
    // Select the buttons
    const milestonesButton = getByText('Milestones') as HTMLButtonElement;
    const achievementsButton = getByText('Achievements') as HTMLButtonElement;
  
    // First, simulate keyboard press (Enter) on the Achievements button to switch components
    fireEvent.keyDown(achievementsButton, { key: 'Enter', code: 'Enter', charCode: 13 });
  
    // Then, simulate keyboard press (Space) on the Milestones button to switch back
    fireEvent.keyDown(milestonesButton, { key: ' ', code: 'Space', charCode: 32 });
  
    // Wait for the timeline header to appear
    await waitFor(() => {
      const timelineHeader = getByRole('heading', { name: 'Milestones of Our Latin Journey' });
      expect(timelineHeader).toBeInTheDocument();
    });
  });
  
});
