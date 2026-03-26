import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  basics: {
    name: "Sayali Vaidya",
    title: "AI & ML Engineer | Data Scientist Enthusiast",
    summary: "Aspiring AI/ML Engineer with hands-on experience in Python, Machine Learning, data preprocessing, and feature engineering. Passionate about building scalable data-driven solutions and predictive analytics initiatives.",
    location: "Wardha, Maharashtra, India",
    email: "sayalivadya1654@gmail.com",
    phone: "8767881176",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sayali-vaidya-369a6b279" },
      { name: "GitHub", url: "https://github.com/sayalivadya1654-cell" },
      { name: "Portfolio", url: "https://sayalivadya1654-cell.github.io/portfolio/" }
    ]
  },
  experience: [
    {
      company: "Infotact Solution",
      role: "Data Science & Machine Learning Intern",
      dates: "Dec 2025 - Present",
      location: "Bengaluru (Remote)",
      bullets: [
        "Data engineering and preprocessing for IoT safety project.",
        "Hyperparameter tuning and predictive modeling.",
        "Explainable AI pipeline implementation.",
        "Real-time monitoring and alert system development."
      ]
    },
    {
      company: "Codec Technologies Pvt. Ltd",
      role: "Python Developer Intern",
      dates: "Sept 2025",
      location: "Mumbai (Remote)",
      bullets: [
        "Worked on Python-based application development and automation tasks.",
        "Hands-on experience with Python libraries and real-time workflows."
      ]
    },
    {
      company: "Cognifyz Technologies",
      role: "Python Development Intern",
      dates: "July 2025 - Aug 2025",
      location: "Nagpur (Remote)",
      bullets: [
        "Developed Python applications and ML solutions.",
        "Applied machine learning techniques to real-world data."
      ]
    },
    {
      company: "Cognifyz Technologies",
      role: "Machine Learning Intern",
      dates: "June 2025 - July 2025",
      location: "Nagpur (Remote)",
      bullets: [
        "Worked on Python programming and applied ML for real-world data analysis.",
        "Developed and tuned ML models for prediction tasks."
      ]
    },
    {
      company: "Dnnovate Technologies Pvt. Ltd",
      role: "Gaming & Augmented Reality Intern",
      dates: "Jan - Apr 2024",
      location: "Pune (Remote)",
      bullets: [
        "Designed 3D environments, animations, and user interactions.",
        "Practical experience in game development logic and scene design."
      ]
    }
  ],
  projects: [
    {
      title: "Lexiscanauto (Legal Entity Extractor)",
      stack: ["Python", "OCR", "NER", "PDF Parsing", "Scikit-Learn", "PyPDF2"],
      bullets: [
        "Automatic legal entity extractor from unstructured PDF using OCR & NER pipelines.",
        "Implemented advanced PDF parsing techniques for high accuracy.",
        "Duration: 2 months"
      ],
      links: [
        { name: "GitHub Repo", url: "https://github.com/anjalipatel2025/LexiScanAuto" },
        { name: "View README", url: "https://github.com/anjalipatel2025/LexiScanAuto/blob/main/README.md" }
      ]
    },
    {
      title: "Factory Guard AI-IOT Based Industrial Safety System",
      stack: ["Python", "ML", "IoT", "Dashboard", "Flask", "TensorFlow"],
      bullets: [
        "IoT-based system monitoring real-time sensor data to predict workplace hazards.",
        "Developed a real-time dashboard for safety monitoring.",
        "Duration: 2 months"
      ],
      links: [
        { name: "GitHub Repo", url: "https://github.com/sayalivadya1654-cell/FactoryGuard-AI.git" },
        { name: "View README", url: "https://github.com/sayalivadya1654-cell/FactoryGuard-AI/blob/main/README.md" }
      ]
    },
    {
      title: "ML & Blockchain Fraud Detection System",
      stack: ["Python", "ML", "Blockchain", "Chatbot", "Dashboard", "Visualization"],
      bullets: [
        "ML-based fraud detection chatbot with multilingual voice support and blockchain logging.",
        "Integrated secure transaction logging using blockchain technology.",
        "Duration: 3 months"
      ],
      links: [
        { name: "GitHub Repo", url: "https://github.com/sayalivadya1654-cell/Fraud-Detection-Chatbot-.git" },
        { name: "View README", url: "https://github.com/sayalivadya1654-cell/Fraud-Detection-Chatbot-/blob/main/README.md" }
      ]
    },
    {
      title: "Early Detection of Anemia Using SVM",
      stack: ["Python", "SVM", "OpenCV", "GUI", "Scikit-Learn"],
      bullets: [
        "SVM-based model to detect anemia from eye images with preprocessing and GUI.",
        "Used OpenCV for image processing and feature extraction.",
        "Duration: 2 months"
      ],
      links: [
        { name: "GitHub Repo", url: "https://github.com/sayalivadya1654-cell/ImageClassification-.git" },
        { name: "View README", url: "https://github.com/sayalivadya1654-cell/ImageClassification-/blob/main/README.md" }
      ]
    },
    {
      title: "3D Immersive Game Environments",
      stack: ["Unity", "C#", "AR/VR", "3D Modeling", "Animation"],
      bullets: [
        "Designed 3D environments, animations, and user interactions for AR/VR applications.",
        "Implemented game development logic and scene design for immersive experiences.",
        "Duration: 4 months"
      ],
      links: []
    }
  ],
  skills: [
    { category: "Programming", items: ["Python", "SQL"] },
    { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Preprocessing"] },
    { category: "Web Development", items: ["Flask", "FastAPI", "Streamlit"] },
    { category: "Tools", items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "PyCharm", "Google Colab"] },
    { category: "Databases", items: ["SQLite", "MySQL"] },
    { category: "Soft Skills", items: ["Analytical Thinking", "Problem-Solving", "Team Collaboration", "Communication"] }
  ],
  education: [
    {
      institution: "Kavikulguru Institute of Technology and Science (KITS), Ramtek",
      degree: "Bachelor of Technology - BTech, Information Technology",
      dates: "November 2022 - June 2026",
      details: "Pursuing | CGPA: 8.1"
    },
    {
      institution: "Deepchand Chaudhary Vidyalaya, Seloo, Wardha",
      degree: "Higher Secondary Education",
      dates: "",
      details: ""
    }
  ],
  certifications: [
    "Employability Skills Workshop Certificate by KEYOR",
    "Internship Common Aptitude Test Certificate by ICAT",
    "Learn Python Masterclass Certificate by Preplnsta Prime",
    "Introduction to Image Generation by Simplilearn and Google Cloud",
    "AWS Networking Basic by Simplilearn and Microsoft",
    "Introduction to Generation AI Studio by Skillup and Google Cloud",
    "Advanced Artificial Intelligence with Python by Luster Mind"
  ],
  achievements: [
    { item: "CGPA: 8.1 in B.Tech IT", context: "Academic Excellence at KITS, RTMNU Nagpur" }
  ],
  extra: [
    "Passionate about building scalable data-driven solutions and predictive analytics initiatives.",
    "Strong belief in continuous learning and practical implementation."
  ]
};
