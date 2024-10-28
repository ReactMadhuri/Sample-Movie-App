Project Documentation
App Name
Movie Explorer
Overview
The Movie Explorer is a React Native application designed to provide users with an engaging platform to browse popular movies and TV series. The main screen features carousels showcasing the most popular content, along with top-rated shows and currently airing shows, while detailed pages offer further insights and playback options.
Task #1: Main Screen Implementation
Objectives
Display a group of carousels featuring:
Most popular movies
Most popular TV series
Top Rated Shows
On Air Shows
Design Guidelines
Base the design on popular streaming services or create a unique design.
Each item in the carousel should display:
Poster image (example image path: https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg)
Title of the movie or TV series
Each item should be selectable, navigating to the detail page of the selected content.
Implementation Details
Utilized a carousel component to display items.
Fetched data from The Movie Database API for:
Most popular movies
Most popular TV series
Top rated shows
Currently airing shows
Implemented navigation using React Navigation.
Task #2: Details Page Implementation
Objectives
Create a "Watch Movie" button on the details page.
Functionality
When the button is pressed, the application displays a full-screen movie player that automatically starts playback.
Used the following hardcoded video URL for playback: https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4
Implemented the video player using react-native-video.
Search Functionality
Implemented a search bar that allows users to search for movies or TV series by title.
Used appropriate state management to handle search queries and display results dynamically.
Technologies Used
React Native
React Navigation
React Native Video
Axios (for API calls)
Redux (optional, for state management)
Installation Instructions
Clone the repository.
Navigate to the project directory.
Install dependencies:
bash
Copy code
npm install


Start the application:
bash
Copy code
npm start
Future Improvements
Add user authentication.
Implement favorite movies/series functionality.
Enhance search with filters (genre, release year).

