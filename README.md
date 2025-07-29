# Museum App

This project is a Vue.js application that displays a grid of tiles, each linking to a detail page. The application is structured to provide a responsive layout and a clean user interface.

## Project Structure

- **src/**
  - **App.vue**: Main component of the application that includes the Home component.
  - **main.js**: Entry point of the application that initializes the Vue app and sets up the router.
  - **components/**
    - **Tile.vue**: Defines the tile component displaying a number, a short text, and a link to the detail page.
    - **TileGrid.vue**: Organizes tiles in a responsive layout and renders multiple Tile components.
  - **views/**
    - **Home.vue**: The homepage of the application that contains a heading and uses the TileGrid component to display 27 tiles.
    - **Detail.vue**: The detail page that shows information about a specific tile, accessed via the link in the tile.
  - **router/**
    - **index.js**: Configures the Vue router, defining routes for the Home and Detail pages.
  - **assets/**
    - **styles.css**: Contains global CSS styles for the application.

## Installation

To install the project dependencies, run:

```
npm install
```

## Running the Application

To start the development server, use:

```
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.# museum
