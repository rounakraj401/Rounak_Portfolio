export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Full-Stack Booking App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Discord-Bot",
    des: "A discord bot having commands like kick , inspire integrated with ChatGPT..",
    img: "/DiscordProject.svg",
    iconLists: ["/js.svg", "/djs.svg" , "/chatgpt.svg"],
    link: "https://github.com/rounakraj401/New_Discord_Bot",
  },
  {
    id: 2,
    title: "Contact-Manager App",
    des: "A backend application for creating multiple users and storing multiple contacts within each user with proper authorization and security.",
    img: "/ContactManager.svg",
    iconLists: ["/js.svg", "/nodejs.svg", "/expressjs.svg" , "/mongodb.svg"],
    link: "https://github.com/rounakraj401/Contact-Manager",
  },
  {
    id: 3,
    title: "Sortify",
    des: "Designed a dynamic sorting visualizer utilizing JavaScript, implementing various sorting algorithms in an enhanced user interface for real-time visualization",
    img: "/sorting.svg",
    iconLists: ["/html-icon.svg","/w3_css-icon.svg", "/js.svg"],
    link: "https://github.com/rounakraj401/Sortify",
  },
  {
    id: 4,
    title: "LameTime - Chrome Extension",
    des: "Created a chrome extension that gives a different joke evertyime it's enabled..",
    img: "/LameTime.svg",
    iconLists: ["/html-icon.svg","/w3_css-icon.svg", "/js.svg"],
    link: "https://github.com/rounakraj401/LameTime",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rounak during his internship at Barclays was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rounak's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your team's capabilities and drive impactful outcomes, Rounak is the ideal partner.",
    name: "Ramesh Kale",
    title: "Vice President at Barclays",
    img: "/ramesh.svg",
  },
  {
    quote:
      "Working with Rounak during his internship at Barclays was a great experience. His discipline, quick response time, and commitment to excellence were impressive. Rounak's passion for development shone through in all his tasks. If you need someone to boost your project and bring fresh ideas, Rounak is the person to work with.",
    name: "Pranay Hedau",
    title: "Software Developer at Barclays",
    img: "/pranay.svg",
  },
  {
    quote:
      "As the Public Relations Head for the sports fest of IIT (ISM ) Dhanbad , Rounak has shown exceptional managerial skills by organizing the Musical Night and hosting DJ Aerreo. I personally vouch for his skills and determination to do the assigned work with utmost sincerity and bring the best results.",
    name: "Prof ACS Rao",
    title: "Convenor , PARAKRAM'24",
    img: "/acs.svg",
  },
  {
    quote:
      "Working on our group project with Rounak in college was an absolute delight. His expertise in web development field , reliability, and dedication to producing outstanding results were evident throughout our collaboration. If you're looking to enhance your team dynamics and achieve remarkable outcomes, Rounak is the perfect teammate.",
    name: "Shivam Shekhar",
    title: "Software Developer at Microsoft",
    img: "/shivam.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloud",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "hostinger",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Barclays - Software Developer Intern",
    desc: [" Utilized JavaScript and Salesforce CLI tool to develop over 20 highly adaptable and reusable Lightning Web Components as a member of the re-platforming team." ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/rounakraj401",
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/rounakraj401",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/rounak-raj-748178204/",
  },
];