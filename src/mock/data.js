import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rolex Cheruiyot',
  subtitle: 'I am a Web Developer.',
  // cta: ' ',
};


// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a versatile person who is ready to learn new ideas and explore opportunities beyond the bounds of my profession.',
  paragraphTwo: 'My ultimate goal is giving my clients a website they can be proud of, as well as a site that\'s easy for them to maintain in the future.',
  paragraphThree: 'I am a well organized person and a problem solver that pays attention to detail when involved in a project.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// export const skills = [
//   {
//    id:nanoid(),
//    title: 'HTML',
//   },
//   {
//    id:nanoid(),
//    title: 'CSS',
//   },
//   {
//    id:nanoid(),
//    title: 'HTML',
//   },
//   {
//    id:nanoid(),
//    title: 'Node.js',
//   },
//   {
//    id:nanoid(),
//    title: 'Express.js',
//   },
// ];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid_stats.jpg',
    title: 'Covid Stats',
    info: 'Covid Stats is a data resource for corona virus disease. This project helps to obtain basic information about the disease, how to prevent and how to protect yourself. This web app contains information about the infection in numbers, globally and within the selected country. Together, let\'s join the fight against Covid-19 to flatten the curve. ',
    info2: 'Technologies used: HTML5 ,CSS, Node.js, MySQL, Express',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rps.jpg',
    title: 'Rock Paper Scissors',
    info: 'One of the most unique & useful abilities of javascript is its ability to manipulate the DOM. In this simple RPS game, we understand how we can use javascript to make our webpage listen & react to events such as mouse-clicks & keypresses. ',
    info2: 'Technologies used : HTML5, CSS, Node.js',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'listapp.jpg',
    title: 'Shopping List App',
    info: 'This is a simple shopping list app.You can use it for grocery shopping or any other listing needs that you may have.This app allows users to sign in to view, edit or remove an item from their customized list of items.',
    info2: 'Technologies used: HTML5, CSS , Node.js, Express, MySQL',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'taskmanager.jpg',
    title: 'Task Manager',
    info: 'Task manager is a simple app that allows you to plan and manage your tasks.This app is user friendly, you can easily add or remove crossed items from your list. This project demonstrates how we can use javascript to add new elements to the DOM or remove the existing ones.',
    info2: 'Technologies used: HTML5, CSS , Node.js, Express',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'rolexroney@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
