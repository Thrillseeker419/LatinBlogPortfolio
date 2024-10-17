import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import AddPostForm from './AddPostForm';
import { MemoryRouter } from 'react-router-dom';
import { addNewPost } from '../redux/postsSlice'; 

// Mock the postsSlice module
jest.mock('../redux/postsSlice', () => ({
  ...jest.requireActual('../redux/postsSlice'),
  addNewPost: jest.fn(),
}));

// Define types for the mock store
type DispatchExts = ThunkDispatch<{}, {}, AnyAction>;
const mockStoreInstance = configureMockStore<{}, DispatchExts>([thunk]);

// Cast the mocked addNewPost to a jest.Mock with appropriate types
const mockedAddNewPost = addNewPost as unknown as jest.Mock;


// If the above still causes issues, use `as any` as a last resort:
const mockedAddNewPostAny = addNewPost as any;

describe('AddPostForm', () => {
  let store: ReturnType<typeof mockStoreInstance>;

  beforeAll(() => {
    // Mock window.alert before all tests
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore window.alert after all tests
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    store = mockStoreInstance({
      posts: {
        posts: [],
        status: 'idle',
        error: null,
      },
    });
    // Clear all instances and calls to the mocked addNewPost
    mockedAddNewPost.mockClear();
  });

  it('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddPostForm />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Post title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Post content/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save post/i })).toBeInTheDocument();
  });

  it('allows typing into the form inputs', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddPostForm />
        </MemoryRouter>
      </Provider>
    );

    const titleInput = screen.getByLabelText(/Post title/i);
    const contentInput = screen.getByLabelText(/Post content/i);

    fireEvent.change(titleInput, { target: { value: 'New Post Title' } });
    fireEvent.change(contentInput, { target: { value: 'This is the post content.' } });

    expect(titleInput).toHaveValue('New Post Title');
    expect(contentInput).toHaveValue('This is the post content.');
  });

  it('disables save button when title or content is invalid', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddPostForm />
        </MemoryRouter>
      </Provider>
    );

    // Initially, both inputs are empty but we don't want to show and error yet,
    // so the button should not be disabled
    const saveButton = screen.getByRole('button', { name: /Save post/i });
    expect(saveButton).not.toBeDisabled(); // Should be enabled initially

    // Entering bad title should disable the save button
    const titleInput = screen.getByLabelText(/Post title/i);
    fireEvent.change(titleInput, { target: { value: 'Valid Title' } });
    expect(saveButton).not.toBeDisabled(); //still shouldn't be disabled
    fireEvent.change(titleInput, { target: { value: '' } }); //however an empty field again should disable it
    expect(saveButton).toBeDisabled(); // Still disabled because content is empty

    // Having at least one bad input keeps the button disabled
    const contentInput = screen.getByLabelText(/Post content/i);
    fireEvent.change(contentInput, { target: { value: 'Valid Content' } });
    expect(saveButton).toBeDisabled(); // Should still be disabled because there is atleast one bad input

    // Entering good content should enable the save button
    fireEvent.change(titleInput, { target: { value: 'Valid Title' } }); //enter a good title to remove other disabling
    expect(saveButton).not.toBeDisabled(); // Now button should be enabled

    // bad content value should disable the button
    fireEvent.change(contentInput, { target: { value: '' } });
    expect(saveButton).toBeDisabled(); // Now button should be disabled
    fireEvent.change(contentInput, { target: { value: 'Valid Content' } });
    expect(saveButton).not.toBeDisabled(); // Now button should be enabled again
  });

  it('dispatches addNewPost when save button is clicked with valid data', async () => {
    // Mock the resolved value of addNewPost
    mockedAddNewPostAny.mockResolvedValue({
      payload: {}, // Define the payload as needed
      type: 'posts/addNewPost/fulfilled',
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddPostForm />
        </MemoryRouter>
      </Provider>
    );

    const titleInput = screen.getByLabelText(/Post title/i);
    const contentInput = screen.getByLabelText(/Post content/i);
    const saveButton = screen.getByRole('button', { name: /Save post/i });

    fireEvent.change(titleInput, { target: { value: 'Valid Title' } });
    fireEvent.change(contentInput, { target: { value: 'Valid Content' } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(addNewPost).toHaveBeenCalledWith({
        title: 'Valid Title',
        body: 'Valid Content',
        userId: 2,
      });
    });
  });
  
});
