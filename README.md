# Kanban Board

A modern, responsive Kanban board application built with React, Redux, and react-beautiful-dnd. This application helps teams manage tasks across different stages of completion with a beautiful and intuitive user interface.

## Features

- **Drag and Drop**: Seamlessly move tasks between different stages
- **Real-time Search**: Filter tasks across all columns instantly
- **Responsive Design**: Works beautifully on both desktop and mobile devices
- **Modern UI**: Clean and intuitive interface with Tailwind CSS
- **Task Management**: Create and organize tasks with titles and descriptions

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Redux Toolkit**: State management
- **react-beautiful-dnd**: Drag and drop functionality
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Vite**: Next-generation frontend tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kanban-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/           # React components
│   ├── Board/           # Main board component
│   ├── Column/          # Column component for task stages
│   ├── Header/          # App header with actions
│   ├── SearchBar/       # Search functionality
│   ├── TaskCard/        # Individual task component
│   └── TaskList/        # List of tasks in a column
├── constants/           # Application constants
├── hooks/               # Custom React hooks
├── store/              # Redux store configuration
│   └── taskSlice.js    # Task-related reducers and actions
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## Features in Detail

### Task Management
- Create new tasks with title and description
- Tasks are automatically added to the "To Do" column
- Each task card displays a title and truncated description

### Columns
- Four default columns:
  - To Do
  - In Progress
  - Peer Review
  - Done
- Tasks can be dragged between any columns
- Minimum height ensures consistent layout

### Search Functionality
- Real-time search across all columns
- Searches through both task titles and descriptions
- Updates results as you type

### Drag and Drop
- Smooth drag and drop animations
- Visual feedback during drag operations
- Maintains task order within columns

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Best Practices

- **Component Organization**: Each component is in its own directory with associated styles
- **State Management**: Centralized state management with Redux Toolkit
- **Code Splitting**: Logical separation of concerns into different directories
- **Style Management**: Consistent styling with Tailwind CSS utility classes
- **Type Safety**: TypeScript for better development experience and fewer runtime errors

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint code with ESLint
