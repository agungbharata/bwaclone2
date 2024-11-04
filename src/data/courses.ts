export const courseData = [
  {
    id: 1,
    title: "Full-Stack Laravel React",
    description: "Learn to build modern web applications with Laravel and React. This comprehensive course covers everything from setting up your development environment to deploying your full-stack application.",
    image: "https://source.unsplash.com/800x600/?coding",
    price: 850000,
    category: "Web Development",
    level: "Intermediate",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    learningPoints: [
      "Master Laravel 10 fundamentals and advanced concepts",
      "Build real-world React applications with hooks and context",
      "Implement authentication and authorization",
      "Create RESTful APIs with Laravel",
      "Handle state management in React",
      "Deploy your application to production"
    ],
    modules: [
      {
        title: "Getting Started with Laravel",
        duration: "2h 30m",
        lessons: [
          { title: "Introduction to Laravel", duration: "15m" },
          { title: "Setting Up Development Environment", duration: "30m" },
          { title: "Laravel Project Structure", duration: "45m" },
          { title: "Basic Routing and Controllers", duration: "60m" }
        ]
      },
      {
        title: "Database Design and Migration",
        duration: "3h 15m",
        lessons: [
          { title: "Database Design Principles", duration: "45m" },
          { title: "Creating Migrations", duration: "45m" },
          { title: "Eloquent ORM Basics", duration: "45m" },
          { title: "Relationships in Laravel", duration: "60m" }
        ]
      },
      {
        title: "API Development with Laravel",
        duration: "4h 45m",
        lessons: [
          { title: "RESTful API Concepts", duration: "45m" },
          { title: "API Authentication", duration: "60m" },
          { title: "API Resources and Collections", duration: "60m" },
          { title: "API Testing", duration: "60m" }
        ]
      }
    ]
  },
  // ... other courses remain the same
];