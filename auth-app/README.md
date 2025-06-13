# PopX Authentication Mockup

This project implements a mobile application UI for an authentication flow, designed based on Adobe XD screenshots. It features a responsive design, user authentication via local storage, and seamless navigation.

## Tech Stack

-   **React.js**: Frontend library for building user interfaces.
-   **Vite**: Fast development build tool.
-   **Tailwind CSS**: Utility-first CSS framework for rapid styling.
-   **React Router**: For declarative routing in React applications.
-   **Local Storage**: To persist user account details.

## Features

-   **Welcome Screen**: Landing page with options to create an account or login.
-   **Create Account**: Form to register new users with validation.
-   **Login**: Form to sign in existing users with validation and local storage credential checking.
-   **Account Settings**: Displays logged-in user's details retrieved from local storage.
-   **Responsive Design**: Mobile-first approach with the app interface centered on the webpage.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have Node.js (which includes npm) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <your-repository-url>
    cd auth-app
    ```
    (Assuming you have already initialized the project and are in the `auth-app` directory)

2.  **Install dependencies:**
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    ```

    This will start the Vite development server, usually at `http://localhost:5173/`. Open this URL in your browser.

## Project Structure

```
auth-app/
├── public/             # Static assets
├── src/
│   ├── assets/         # Application-specific assets (e.g., images)
│   │   ├── AccountSettingsPage.jsx
│   │   ├── CreateAccountPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── WelcomePage.jsx
│   ├── App.css         # Main application CSS (currently empty, using Tailwind)
│   ├── App.jsx         # Main application component with React Router setup
│   ├── index.css       # Global CSS for Tailwind and mobile app framing
│   └── main.jsx        # Entry point of the React application
├── .gitignore
├── index.html          # Main HTML file
├── package.json        # Project metadata and dependencies
├── package-lock.json   # Exact dependency versions
├── postcss.config.js   # PostCSS configuration for Tailwind CSS
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite build configuration
```

## Design Notes & Assumptions

-   **Font**: Assumed system default fonts similar to sans-serif for simplicity.
-   **Colors**: Derived from the screenshots using a color picker where possible. Exact hex codes were assumed for subtle variations.
-   **Mobile Viewport**: The application is designed to be centered with a `max-width` of `375px` to mimic a typical mobile device, with a subtle box shadow and rounded corners.
-   **Animations**: Basic CSS transitions are applied for button hover effects. More advanced animations (e.g., page transitions) could be implemented using libraries like Framer Motion if required.
-   **Accessibility**: Semantic HTML elements are used, and form inputs include `label` and `htmlFor` attributes for basic accessibility. Further ARIA attributes and keyboard navigation testing would enhance this.
