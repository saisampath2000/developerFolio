/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Sampath Mahajan",
  title: "Hi all, I'm Sai",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nextjs / Nodejs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HK9Hdvux0kZUbBxSWlz9YDYntGLbT5bH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saisampath2000",
  linkedin: "https://www.linkedin.com/in/sai-sampath-mahajan/",
  gmail: "mahajan.sampath@gmail.com",
  leetcode: "https://leetcode.com/user3981po/",
  medium: "https://medium.com/@saisampathmahajan",
  hackerrank: "https://www.hackerrank.com/mahajan_sampath",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop authorization and authentication flow for your web and mobile applications"
    ),
    emoji("⚡ Develop UI, API for web applications"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jawaharlal Nehru Technological University Hyderabad",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2017 - July 2021",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, DBMS, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Node.js(Backend)", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Next.js/React.js(Frontend)",
      progressPercentage: "80%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "80%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "AWS",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "MVP Rockets",
      companylogo: require("./assets/images/mvpRockets.jfif"),
      date: "Nov 2021 - Present",
      desc: "Contributed to StreamAlive Platform",
      descBullets: [
        "Developed UI for Youtube, Teams, Zoom homepages, and User Guide for the platform.",
        "Developed authentication flow for logging in with Outlook and email for the platform.",
        "Integrated a Web API that offers services to authorize and get the streams and meetings from youtube and Zoom for the platform.",
        "Integrated a Web API that offers services to get custom tokens from the Firebase and Developed end-to-end User Settings Flow for the platform",
        "Developed Load Testing Environment to mock production stream data and Migrated SQS handlers services to lambda functions using SAM-CLI"
      ]
    },
    {
      role: "Software Engineer Trainee",
      company: "MountBlue Technologies",
      companylogo: require("./assets/images/mountblue.jfif"),
      date: "Aug 2021 - Oct 2021",
      desc: "Javascipt Training Bootcamp program",
      descBullets: [
        "Trained in React.js and Node.js ",
        "Training project : Developed a Flight booking system and Integrated Razorpay payment gateway for it"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/streamAlive.jfif"),
      projectName: "StreamAlive",
      projectDesc: "Chat Engagement Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.streamalive.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Hackerrank Certificate",
      subtitle: "Problem Solving",
      image: require("./assets/images/HackerRank_logo.png"),
      imageAlt: "Hacker Rank Action Logo",
      footerLink: [
        {
          name: "View HackerRank Certificate",
          url: "https://www.hackerrank.com/certificates/a71b0b5f227f"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "mahajan.sampath@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable
};
