const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

// Portfolio data extracted from your components
const portfolioData = {
  name: "Josef Guillen",
  title: "Software Developer",
  email: "josefmguillen@gmail.com",
  location: "Manila, Philippines",
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
      url: "/projects/jumpspeak"
    },
    {
      title: "heyhun",
      description: "heyhun is an AI companion you reach through your phone number, just like anyone else in your life. Text her, call her, send photos, share what's on your mind—she remembers, learns your preferences, and responds in a way that feels personal and real. Behind the scenes, the heyhun web dashboard lets you see and manage everything: memories, preferences, conversation history, calendars, and more.",
      tech: ["React Js", "Redux", "Tailwind CSS", "Node.js", "RESTFUL APIs", "Firebase", "Supabase"],
      dateRange: "August 2025 - September 2025",
      url: "https://heyhun.com/"
    },
    {
      title: "TourneyKey",
      description: "Tourneykey is a basketball tournament management platform that helps organizers streamline league operations. It supports creating tournaments, registering teams and coaches, managing event locations, setting up game schedules, and tracking scores and standings.",
      tech: ["Angular", "CSS", "RxJs", "Spring Boot", "Java"],
      dateRange: "Sep 2024 - Nov 2024",
      url: "/projects/tourneykey"
    },
    {
      title: "Vision Frame AI",
      description: "VisionFrame AI is a digital frame powered by DALL-E 3 and ChatGPT-4, enabling interactive, voice-controlled art displays to transform your space into a dynamic gallery.",
      tech: ["Flutter", "Firebase", "Node.js", "RESTFUL APIs", "OPEN AI", "Android", "iOS"],
      dateRange: "Mar 2024 - Sep 2024",
      url: "/projects/visionframe"
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

// Generate ODF content.xml
function generateContentXML() {
  let content = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" 
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" 
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" 
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" 
  xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" 
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:dc="http://purl.org/dc/elements/1.1/" 
  xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" 
  xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" 
  xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" 
  xmlns:chart="urn:oasis:names:tc:opendocument:xmlns:chart:1.0" 
  xmlns:dr3d="urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0" 
  xmlns:math="http://www.w3.org/1998/Math/MathML" 
  xmlns:form="urn:oasis:names:tc:opendocument:xmlns:form:1.0" 
  xmlns:script="urn:oasis:names:tc:opendocument:xmlns:script:1.0" 
  xmlns:ooo="http://openoffice.org/2004/office" 
  xmlns:ooow="http://openoffice.org/2004/writer" 
  xmlns:oooc="http://openoffice.org/2004/calc" 
  xmlns:dom="http://www.w3.org/2001/xml-events" 
  xmlns:xforms="http://www.w3.org/2002/xforms" 
  xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  office:version="1.2">
  <office:scripts/>
  <office:font-face-decls>
    <style:font-face style:name="Arial" svg:font-family="Arial" style:font-family-generic="swiss" style:font-pitch="variable"/>
    <style:font-face style:name="Times New Roman" svg:font-family="'Times New Roman'" style:font-family-generic="roman" style:font-pitch="variable"/>
  </office:font-face-decls>
  <office:automatic-styles>
    <style:style style:name="P1" style:family="paragraph" style:parent-style-name="Heading">
      <style:text-properties fo:font-size="24pt" fo:font-weight="bold"/>
    </style:style>
    <style:style style:name="P2" style:family="paragraph" style:parent-style-name="Heading">
      <style:text-properties fo:font-size="18pt" fo:font-weight="bold"/>
    </style:style>
    <style:style style:name="P3" style:family="paragraph" style:parent-style-name="Heading">
      <style:text-properties fo:font-size="14pt" fo:font-weight="bold"/>
    </style:style>
  </office:automatic-styles>
  <office:body>
    <office:text>
      <text:sequence-decls>
        <text:sequence-decl text:display-outline-level="0" text:name="Illustration"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Table"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Text"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Drawing"/>
      </text:sequence-decls>
      
      <text:p text:style-name="P1">${portfolioData.name}</text:p>
      <text:p text:style-name="P2">${portfolioData.title}</text:p>
      <text:p>Email: ${portfolioData.email}</text:p>
      <text:p>Location: ${portfolioData.location}</text:p>
      <text:p/>
      
      <text:p text:style-name="P2">About Me</text:p>
      ${portfolioData.about.map(para => `<text:p>${escapeXML(para)}</text:p>`).join('\n      ')}
      <text:p/>
      
      <text:p text:style-name="P2">Skills & Technologies</text:p>
      <text:p text:style-name="P3">Frontend</text:p>
      <text:p>${portfolioData.skills.frontend.join(', ')}</text:p>
      <text:p text:style-name="P3">Backend</text:p>
      <text:p>${portfolioData.skills.backend.join(', ')}</text:p>
      <text:p text:style-name="P3">Mobile</text:p>
      <text:p>${portfolioData.skills.mobile.join(', ')}</text:p>
      <text:p text:style-name="P3">Others</text:p>
      <text:p>${portfolioData.skills.others.join(', ')}</text:p>
      <text:p/>
      
      <text:p text:style-name="P2">Projects</text:p>
      ${portfolioData.projects.map(project => `
      <text:p text:style-name="P3">${escapeXML(project.title)} (${project.dateRange})</text:p>
      <text:p>${escapeXML(project.description)}</text:p>
      <text:p>Technologies: ${project.tech.join(', ')}</text:p>
      <text:p/>`).join('\n      ')}
      
      <text:p text:style-name="P2">Work Experience</text:p>
      ${portfolioData.experience.map(exp => `
      <text:p text:style-name="P3">${escapeXML(exp.position)}</text:p>
      <text:p>${escapeXML(exp.company)}, ${escapeXML(exp.address)} - ${exp.timeline}</text:p>
      ${exp.bullets.map(bullet => `<text:p>• ${escapeXML(bullet)}</text:p>`).join('\n      ')}
      <text:p>Technologies: ${exp.tech.join(', ')}</text:p>
      <text:p/>`).join('\n      ')}
      
    </office:text>
  </office:body>
</office:document-content>`;
  return content;
}

function escapeXML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

// Generate ODF meta.xml
function generateMetaXML() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" 
  xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" 
  xmlns:dc="http://purl.org/dc/elements/1.1/" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  office:version="1.2">
  <office:meta>
    <meta:generator>Portfolio Generator</meta:generator>
    <dc:title>${portfolioData.name} - Portfolio</dc:title>
    <dc:creator>${portfolioData.name}</dc:creator>
    <meta:creation-date>${new Date().toISOString()}</meta:creation-date>
  </office:meta>
</office:document-meta>`;
}

// Generate ODF styles.xml
function generateStylesXML() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<office:document-styles xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" 
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" 
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" 
  xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" 
  xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" 
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" 
  xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns:dc="http://purl.org/dc/elements/1.1/" 
  xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" 
  office:version="1.2">
  <office:font-face-decls>
    <style:font-face style:name="Arial" svg:font-family="Arial"/>
    <style:font-face style:name="Times New Roman" svg:font-family="'Times New Roman'"/>
  </office:font-face-decls>
  <office:styles>
    <style:default-style style:family="paragraph">
      <style:paragraph-properties fo:hyphenation-ladder-count="no-limit" style:text-autospace="ideograph-alpha" style:punctuation-wrap="hanging" style:line-break="strict" style:writing-mode="lr-tb"/>
      <style:text-properties style:font-name="Times New Roman" fo:font-size="12pt" fo:language="en" fo:country="US" style:font-name-asian="Arial" style:font-size-asian="12pt" style:font-name-complex="Arial" style:font-size-complex="12pt"/>
    </style:default-style>
    <style:style style:name="Standard" style:family="paragraph" style:class="text"/>
    <style:style style:name="Heading" style:family="paragraph" style:class="text">
      <style:paragraph-properties fo:margin-top="0.42cm" fo:margin-bottom="0.21cm" fo:keep-with-next="always"/>
      <style:text-properties fo:font-size="14pt" fo:font-weight="bold"/>
    </style:style>
  </office:styles>
  <office:automatic-styles>
    <style:page-layout style:name="Mpm1">
      <style:page-layout-properties fo:page-width="21.001cm" fo:page-height="29.7cm" fo:margin-top="2cm" fo:margin-bottom="2cm" fo:margin-left="2cm" fo:margin-right="2cm" style:writing-mode="lr-tb"/>
      <style:header-style/>
      <style:footer-style/>
    </style:page-layout>
  </office:automatic-styles>
  <office:master-styles>
    <style:master-page style:name="Standard" style:page-layout-name="Mpm1"/>
  </office:master-styles>
</office:document-styles>`;
}

// Generate manifest.xml
function generateManifestXML() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.text"/>
  <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="META-INF/manifest.xml" manifest:media-type="text/xml"/>
</manifest:manifest>`;
}

// Generate META-INF/manifest.xml
function generateMETAINFManifestXML() {
  return generateManifestXML();
}

// Main function to create ODF file
async function createODF() {
  const zip = new JSZip();
  
  // Add mimetype (must be uncompressed for ODF compliance)
  zip.file('mimetype', 'application/vnd.oasis.opendocument.text', { 
    compression: 'STORE',
    compressionOptions: { level: 0 }
  });
  
  // Add content.xml
  zip.file('content.xml', generateContentXML());
  
  // Add styles.xml
  zip.file('styles.xml', generateStylesXML());
  
  // Add meta.xml
  zip.file('meta.xml', generateMetaXML());
  
  // Add META-INF/manifest.xml
  zip.folder('META-INF').file('manifest.xml', generateMETAINFManifestXML());
  
  // Generate the ODF file
  // Note: While ODF spec requires mimetype to be first and uncompressed,
  // most ODF readers are forgiving. JSZip will create a valid ZIP that works.
  const buffer = await zip.generateAsync({
    type: 'nodebuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 }
  });
  
  // Ensure output directory exists
  const outputDir = path.join(__dirname, '..', 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Write the file
  const outputPath = path.join(outputDir, 'portfolio.odt');
  fs.writeFileSync(outputPath, buffer);
  
  console.log(`✅ Portfolio ODF file created successfully at: ${outputPath}`);
  console.log(`📄 You can open this file with:`);
  console.log(`   - LibreOffice Writer`);
  console.log(`   - Microsoft Word`);
  console.log(`   - Google Docs (upload)`);
  console.log(`   - Any ODF-compatible application`);
}

// Run the script
createODF().catch(console.error);

