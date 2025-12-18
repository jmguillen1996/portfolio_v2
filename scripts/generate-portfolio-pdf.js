const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Portfolio data extracted from your components
const portfolioData = {
  name: "Josef Guillen",
  title: "Software Developer",
  email: "josefmguillen@gmail.com",
  location: "Manila, Philippines",
  portfolioUrl: "https://josef-guillen.vercel.app/",
  about: [
    "I have 8 years of hands-on experience in the tech industry. Most of my professional roles here in the Philippines have been centered around mobile development. Over the years, I've worked with various programming languages, but I now primarily focus on Flutter because I truly enjoy its cross-platform capabilities.",
    "I've always been eager to explore technologies beyond mobile, which has led me to take on freelance work. Through this, I had the chance to lead a team, handle client communications, and dive into web and backend development—building everything from scratch.",
    "One of the most fulfilling parts of my journey has been mentoring junior developers. Being able to guide and support others in their growth has been incredibly rewarding.",
    "As I move forward, I'm excited to keep evolving as a senior developer while staying open to new technologies and challenges."
  ],
  skills: {
    frontend: ["React", "Angular", "Flutter", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"],
    backend: ["Node.js", "MongoDB", "Firebase", "Supabase", "SQL"],
    mobile: ["Flutter", "Kotlin (Android Native)", "Java (Android Native)", "Xamarin", ".NET MAUI", "Android", "iOS"],
    others: ["Git", "Github", "Maestro", "Postman"]
  },
  projects: [
    {
      title: "Jumpspeak",
      description: "Jumpspeak is an AI-powered language learning app that helps you actually speak a new language from day 1. With over 1 million users, it teaches 20+ languages like Spanish, French, German, and Korean through real conversations with AI chatbots. You get instant feedback on your pronunciation and grammar, making it feel like having a personal tutor available 24/7.",
      tech: ["Flutter", "Bloc", "Android", "iOS", "AI", "Maestro"],
      dateRange: "November 2025",
      url: "https://www.jumpspeak.com/",
      portfolioUrl: "https://josef-guillen.vercel.app/projects/jumpspeak"
    },
    {
      title: "heyhun",
      description: "heyhun is an AI companion you reach through your phone number, just like anyone else in your life. Text her, call her, send photos, share what's on your mind—she remembers, learns your preferences, and responds in a way that feels personal and real. Behind the scenes, the heyhun web dashboard lets you see and manage everything: memories, preferences, conversation history, calendars, and more.",
      tech: ["React Js", "Redux", "Tailwind CSS", "Node.js", "RESTFUL APIs", "Firebase", "Supabase"],
      dateRange: "August 2025 - September 2025",
      url: "https://heyhun.com/",
      portfolioUrl: null
    },
    {
      title: "TourneyKey",
      description: "Tourneykey is a basketball tournament management platform that helps organizers streamline league operations. It supports creating tournaments, registering teams and coaches, managing event locations, setting up game schedules, and tracking scores and standings.",
      tech: ["Angular", "CSS", "RxJs", "Spring Boot", "Java"],
      dateRange: "Sep 2024 - Nov 2024",
      url: "https://tourneykey.com/",
      portfolioUrl: "https://josef-guillen.vercel.app/projects/tourneykey"
    },
    {
      title: "Vision Frame AI",
      description: "VisionFrame AI is a digital frame powered by DALL-E 3 and ChatGPT-4, enabling interactive, voice-controlled art displays to transform your space into a dynamic gallery.",
      tech: ["Flutter", "Firebase", "Node.js", "RESTFUL APIs", "OPEN AI", "Android", "iOS"],
      dateRange: "Mar 2024 - Sep 2024",
      url: "https://visionframedisplay.web.app/",
      portfolioUrl: "https://josef-guillen.vercel.app/projects/visionframe"
    }
  ],
  experience: [
    {
      position: "Mobile App Developer",
      company: "Hitachi Digital Payment Solutions",
      address: "Makati City, PH",
      timeline: "November 2024 - November 2025",
      bullets: [
        "Contributed to the development and maintenance of PalawanPay, a widely used mobile e-wallet application in the Philippines.",
        "Implemented new features and resolved critical bugs to improve user experience and app stability.",
        "Utilized Flutter to build scalable and responsive UI components, ensuring cross-platform compatibility.",
        "Collaborated closely with QA and backend teams to ensure features were integrated correctly and released on schedule."
      ],
      tech: ["Flutter (Dart)", "RESTFUL APIs", "Firebase", "QR Code Integration", "Android", "iOS"]
    },
    {
      position: "Lead/Sr. Software Developer",
      company: "Vision Frame AI",
      address: "US (Project Based)",
      timeline: "January 2024 - July 2024",
      bullets: [
        "Managed the end-to-end development of an AI-powered digital art platform.",
        "Oversaw both the mobile and backend systems, ensuring seamless client communications, and mentoring junior developers.",
        "Played a pivotal role in guiding the project from concept to completion."
      ],
      tech: ["Flutter (Dart)", "RESTFUL APIs", "Firebase", "Node Js", "OPEN AI", "Android", "IOS"]
    },
    {
      position: "Associate Research & Development Engineer",
      company: "Advanced World Solutions Inc.",
      address: "Makati City, PH",
      timeline: "April 2022 - December 2023",
      bullets: [
        "Contributed to the development of a mobile application that enables healthcare professionals to remotely operate and monitor blood analyzer machines in real-time.",
        "Played a significant role in building key features, such as real-time machine status tracking and the \"Measurement\" functionality.",
        "Actively engaged in bug fixing and quality assurance efforts, and mentored junior developers."
      ],
      tech: ["Flutter", "SQLite", "RESTFUL APIs", "Android"]
    },
    {
      position: "Mobile Application Developer",
      company: "FPG Insurance Inc.",
      address: "Makati City, PH",
      timeline: "October 2020 - April 2022",
      bullets: [
        "Developed and maintained Android applications for FPG Insurance.",
        "Led projects from development to deployment, ensuring smooth user experiences and successful launches on the Google Play Store."
      ],
      tech: ["Kotlin", "Java", "SQLite", "RESTFUL APIs", "Firebase", "Android"]
    },
    {
      position: "Software Developer",
      company: "In1go Technologies Inc.",
      address: "Las Piñas City, PH",
      timeline: "July 2017 - October 2020",
      bullets: [
        "Primarily responsible for maintaining and enhancing existing applications for survey and logistics purposes.",
        "Worked on new feature development, bug resolution, and ensured a smooth user experience.",
        "Played a key role in app releases on the Google Play Store."
      ],
      tech: ["C#", "Java", "Xamarin", ".NET Webservices", "REST/SOAP APIs", "MSSQL", "SQLite", "Firebase", "Android", "IOS"]
    }
  ]
};

// Helper function to add section header
function addSectionHeader(doc, text) {
  doc.moveDown(0.5);
  doc.fontSize(16)
     .font('Helvetica-Bold')
     .fillColor('#2563eb')
     .text(text, { align: 'left' });
  doc.moveDown(0.3);
  doc.strokeColor('#2563eb')
     .lineWidth(2)
     .moveTo(72, doc.y)
     .lineTo(540, doc.y)
     .stroke();
  doc.moveDown(0.5);
}

// Helper function to add subsection
function addSubsection(doc, text) {
  doc.moveDown(0.3);
  doc.fontSize(12)
     .font('Helvetica-Bold')
     .fillColor('#1e40af')
     .text(text, { align: 'left' });
  doc.moveDown(0.2);
}

// Helper function to wrap text
function addWrappedText(doc, text, options = {}) {
  const opts = {
    width: 468,
    align: 'left',
    ...options
  };
  doc.fontSize(10)
     .font('Helvetica')
     .fillColor('#1f2937')
     .text(text, opts);
}

// Helper function to add bullet point
function addBullet(doc, text) {
  doc.fontSize(10)
     .font('Helvetica')
     .fillColor('#1f2937')
     .text('• ', { continued: true })
     .text(text, { width: 450, align: 'left' });
  doc.moveDown(0.15);
}

// Main function to create PDF
function createPDF() {
  // Ensure output directory exists
  const outputDir = path.join(__dirname, '..', 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const outputPath = path.join(outputDir, 'portfolio.pdf');
  const doc = new PDFDocument({ margin: 72 });
  
  // Pipe PDF to file
  doc.pipe(fs.createWriteStream(outputPath));
  
  // Header
  doc.fontSize(24)
     .font('Helvetica-Bold')
     .fillColor('#1e40af')
     .text(portfolioData.name, { align: 'center' });
  
  doc.fontSize(14)
     .font('Helvetica')
     .fillColor('#4b5563')
     .text(portfolioData.title, { align: 'center' });
  
  doc.fontSize(10)
     .text(`${portfolioData.email} | ${portfolioData.location}`, { align: 'center' });
  
  if (portfolioData.portfolioUrl) {
    doc.fontSize(10)
       .fillColor('#2563eb')
       .text(portfolioData.portfolioUrl, { 
         align: 'center',
         link: portfolioData.portfolioUrl,
         underline: true
       });
  }
  
  doc.moveDown(1);
  
  // About Me Section
  addSectionHeader(doc, 'About Me');
  portfolioData.about.forEach(para => {
    addWrappedText(doc, para);
    doc.moveDown(0.3);
  });
  
  // Skills Section
  addSectionHeader(doc, 'Skills & Technologies');
  
  addSubsection(doc, 'Frontend');
  addWrappedText(doc, portfolioData.skills.frontend.join(', '));
  
  addSubsection(doc, 'Backend');
  addWrappedText(doc, portfolioData.skills.backend.join(', '));
  
  addSubsection(doc, 'Mobile');
  addWrappedText(doc, portfolioData.skills.mobile.join(', '));
  
  addSubsection(doc, 'Others');
  addWrappedText(doc, portfolioData.skills.others.join(', '));
  
  // Projects Section
  addSectionHeader(doc, 'Projects');
  portfolioData.projects.forEach((project, index) => {
    if (index > 0) doc.moveDown(0.3);
    
    doc.fontSize(12)
       .font('Helvetica-Bold')
       .fillColor('#1e40af')
       .text(`${project.title} (${project.dateRange})`, { align: 'left' });
    
    doc.moveDown(0.2);
    addWrappedText(doc, project.description);
    doc.moveDown(0.15);
    
    // Add project URLs
    if (project.url || project.portfolioUrl) {
      doc.fontSize(9)
         .font('Helvetica-Bold')
         .fillColor('#4b5563')
         .text('Links: ', { continued: true })
         .font('Helvetica');
      
      if (project.portfolioUrl) {
        doc.fillColor('#2563eb')
           .text('Portfolio Page', { 
             link: project.portfolioUrl,
             underline: true,
             continued: project.url ? true : false
           });
        if (project.url) {
          doc.fillColor('#4b5563')
             .text(' | ', { continued: true });
        }
      }
      
      if (project.url) {
        doc.fillColor('#2563eb')
           .text('Project Website', { 
             link: project.url,
             underline: true
           });
      }
      
      doc.fillColor('#1f2937'); // Reset color
      doc.moveDown(0.15);
    }
    
    doc.fontSize(10)
       .font('Helvetica-Bold')
       .fillColor('#4b5563')
       .text('Technologies: ', { continued: true })
       .font('Helvetica')
       .text(project.tech.join(', '));
  });
  
  // Work Experience Section
  addSectionHeader(doc, 'Work Experience');
  portfolioData.experience.forEach((exp, index) => {
    if (index > 0) {
      doc.moveDown(0.5);
      // Add page break if needed
      if (doc.y > 700) {
        doc.addPage();
      }
    }
    
    doc.fontSize(12)
       .font('Helvetica-Bold')
       .fillColor('#1e40af')
       .text(exp.position, { align: 'left' });
    
    doc.fontSize(10)
       .font('Helvetica-Bold')
       .fillColor('#4b5563')
       .text(`${exp.company}, ${exp.address}`, { align: 'left' });
    
    doc.fontSize(9)
       .font('Helvetica')
       .fillColor('#6b7280')
       .text(exp.timeline, { align: 'left' });
    
    doc.moveDown(0.3);
    
    exp.bullets.forEach(bullet => {
      addBullet(doc, bullet);
    });
    
    doc.moveDown(0.2);
    doc.fontSize(9)
       .font('Helvetica-Bold')
       .fillColor('#4b5563')
       .text('Technologies: ', { continued: true })
       .font('Helvetica')
       .text(exp.tech.join(', '));
  });
  
  // Finalize PDF
  doc.end();
  
  console.log(`✅ Portfolio PDF file created successfully at: ${outputPath}`);
  console.log(`📄 You can open this file with any PDF reader`);
}

// Run the script
createPDF();

