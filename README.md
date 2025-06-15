TaskMaster-LocalStorage

A modern, responsive todo application built with React and Vite, featuring local storage persistence and beautiful animations.

Demo:- https://shreytodo.vercel.app

🚀 Features

- **Task Management**: Create, edit, delete, and mark tasks as complete
- **Local Storage**: All tasks are automatically saved to your browser's local storage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth transitions and animations powered by Framer Motion and GSAP
- **Modern UI**: Clean and intuitive interface with Heroicons
- **Real-time Updates**: Instant feedback and updates without page refresh

🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth transitions
- **GSAP** - Professional-grade animation library
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Local Storage API** - Browser-based data persistence

📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shreyas162004/TaskMaster-LocalStorage.git
   cd TaskMaster-LocalStorage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

🎯 Usage

Adding Tasks
- Click the "+" button or press Enter in the input field
- Type your task description
- Your task will be automatically saved to local storage

Managing Tasks
- **Complete**: Click the checkbox to mark a task as done
- **Edit**: Click the edit icon to modify task text
- **Delete**: Click the trash icon to remove a task
- **Filter**: Use the filter buttons to view all, active, or completed tasks

Data Persistence
- All tasks are automatically saved to your browser's local storage
- Your tasks will persist between browser sessions
- No account or internet connection required

🏗️ Project Structure

```
TaskMaster-LocalStorage/
├── public/              # Static assets
├── src/                 # Source code
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md          # Project documentation
```

📱 Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript
- Local Storage API
- CSS Grid and Flexbox

🚀 Deployment

Build for Production
```bash
npm run build
# or
pnpm build
```

Preview Production Build
```bash
npm run preview
# or
pnpm preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

📄 License

This project is licensed under the MIT License - see the (LICENSE) file for details.

🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [GSAP](https://greensock.com/gsap/) for professional animations
- [Heroicons](https://heroicons.com/) for beautiful icons

---

**Made with ❤️ by Shreyas**
