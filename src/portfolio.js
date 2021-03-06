import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Tatiana Pariente",
  title: "Hi all, I'm Tatiana",
  subTitle: "A passionate Trainee Front End Developer based in London, UK.",
  resumeLink:
    "https://drive.google.com/file/d/1CEw33rnc6WvRKGkp8bXOsteB3kj5n-Z9/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/drakosi99",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "contact@davidrakosi.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/davidrakosi/",
  twitter: "https://twitter.com/davidrakosi_",
  display: false, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "JUNIOR FRONT END DEVELOPER WITH EXPERIENCE IN THE FOLLOWING TECHNOLOGIES:",
  skills: [
    emoji(
      "⚡ Graduate from SheCodes including SheCodes Workshop, SheCodes Plus and SheCodes React"
    ),
    emoji(
      "⚡ Built web applications using HTML, CSS, Vanilla Javascript and React"
    ),
    emoji(
      "⚡ Developped solid foundation in product development, product design and product management"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc: "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials",
      ],
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements.",
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "liliana24", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I CREATED",
  projects: [
    {
      image: require("./assets/images/Weather-app.png"),
      projectName: "Weather App",
      projectDesc: "Built with HTML, CSS and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weatherappprojectbytatiana.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/harvardLogo.png"),
      projectName: "React Weather App",
      projectDesc: "Weather App rebuilt with React",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quizzical-volhard-98cefc.netlify.app",
        },
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Fingerpaint App",
      projectDesc: "Built with HTML, CSS and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://practical-spence-e60d1c.netlify.app",
        },
      ],
    },

    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Beer Pairing App",
      projectDesc: "Built with HTML, CSS and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reverent-swartz-ecf045.netlify.app",
        },
      ],
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Weather Conditions App",
      projectDesc: "Built with HTML, CSS and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://admiring-neumann-bb954f.netlify.app",
        },
      ],
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "Tip Calculator",
      projectDesc: "Built with HTML, CSS and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://peaceful-boyd-9cc24b.netlify.app",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+44 (0)7549 919 869",
  email_address: "tatianapariente@yahoo.fr",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
