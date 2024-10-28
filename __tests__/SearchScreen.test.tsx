// src/screens/__tests__/SearchScreen.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchScreen from '../src/screens/SearchScreen';
// import SearchScreen from '../SearchScreen';

const mockStore = configureStore([]);

describe('SearchScreen', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      search: {
        movies: [],
        loading: false,
      },
    });
  });

  it('renders the SearchScreen correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    );

    // Check if the search input renders correctly
    expect(getByPlaceholderText('Search Movies')).toBeTruthy();

    // Check if the loading state is not visible
    expect(() => getByText('No movies found.')).toThrow();

    // If loading is false, ensure the loading placeholder is not displayed
    expect(() => getByText(/loading/i)).toThrow();
  });

  it('renders the loading state when loading is true', () => {
    store = mockStore({
      search: {
        movies: [],
        loading: true,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SearchScreen />
      </Provider>
    );

    // If loading is true, check for a loading message or placeholder
    // Assuming you have some loading indication, e.g., a spinner or placeholder
    expect(getByText('No movies found.')).toBeTruthy();
  });
});
