import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TimelinePage from './TimelinePage';
import userEvent from '@testing-library/user-event';

describe('TimelinePage Component', () => {
  test('displays the Timeline component by default', () => {
    render(<TimelinePage />);

    const timelineHeader = screen.getByText('Historical Timeline of Our Community', { selector: 'h2' });
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

  test('switches back to Timeline component when Timeline button is clicked', () => {
    render(<TimelinePage />);

    // First, switch to Achievements
    const achievementsButton = screen.getByText('Achievements');
    fireEvent.click(achievementsButton);

    // Now, switch back to Timeline
    const ourTimelineButton = screen.getByText('Our Timeline');
    fireEvent.click(ourTimelineButton);

    const timelineHeader = screen.getByText('Historical Timeline of Our Community', { selector: 'h2' });
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
  

  test('keyboard accessibility works for switching back to Timeline component', async () => {
    const { getByText, getByRole } = render(<TimelinePage />);
  
    // Select the buttons
    const ourTimelineButton = getByText('Our Timeline') as HTMLButtonElement;
    const achievementsButton = getByText('Achievements') as HTMLButtonElement;
  
    // First, simulate keyboard press (Enter) on the Achievements button to switch components
    fireEvent.keyDown(achievementsButton, { key: 'Enter', code: 'Enter', charCode: 13 });
  
    // Then, simulate keyboard press (Space) on the Timeline button to switch back
    fireEvent.keyDown(ourTimelineButton, { key: ' ', code: 'Space', charCode: 32 });
  
    // Wait for the timeline header to appear
    await waitFor(() => {
      const timelineHeader = getByRole('heading', { name: 'Historical Timeline of Our Community' });
      expect(timelineHeader).toBeInTheDocument();
    });
  });
  
});
