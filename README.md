# Portfolio React TypeScript

Modern, responsive portfolio website built with React, TypeScript, Redux, and Tailwind CSS.

## Features

- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Axios** for API communication
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Particle background animation**
- **Responsive design**
- **Glassmorphism effects**
- **Smooth scrolling**
- **Project modal system**
- **Contact form with API integration**
- **Toast notifications**

## Project Structure

```
src/
├── api/
│   ├── axios.ts              # Axios configuration
│   └── portfolioApi.ts       # API endpoints
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── Modal.tsx             # Project modal
│   ├── Navigation.tsx        # Navigation bar
│   ├── Particles.tsx         # Particle background
│   ├── Projects.tsx          # Projects section
│   ├── Resume.tsx            # Resume section
│   └── Toast.tsx            # Toast notifications
├── hooks/
│   └── useIntersectionObserver.ts # Intersection observer hook
├── store/
│   ├── index.ts              # Redux store configuration
│   └── slices/
│       ├── portfolioSlice.ts   # Portfolio data slice
│       └── uiSlice.ts        # UI state slice
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                  # Main App component
├── index.css                # Global styles
└── index.tsx                # Entry point
```

## API Integration

The application integrates with a backend API based on the OpenAPI specification. Key endpoints include:

- `GET /api/main` - Fetch all portfolio data
- `POST /api/contact/add` - Submit contact form
- `PUT /api/{resource}/update/{id}` - Update various resources

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_API_URL=http://localhost:8080
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Technologies Used

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Build Tool:** Create React App

## Features Explained

### Navigation
- Fixed navigation bar with smooth scrolling
- Active section highlighting
- Responsive design

### Hero Section
- Animated entrance effects
- Gradient text effects
- Social media links

### About Section
- Profile image with hover effects
- Skills display with tags
- Statistics display

### Resume Section
- Timeline-based experience display
- Education history
- Icon-based section headers

### Projects Section
- Grid layout with hover effects
- Modal system for project details
- Technology tags and features

### Contact Section
- Form validation
- API integration
- Toast notifications for feedback

### UI/UX Features
- Glassmorphism design
- Particle background animation
- Smooth transitions
- Responsive layout
- Toast notification system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
