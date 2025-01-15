import {  uj, rosebank,bidvest } from "../assets/images";
import {
    python,
    contact,
    css,
    csharp,
    github,
    html,
    javascript,
    linkedin,
    sql,
    nodejs,
    thrivementor,
    react,
    tailwindcss,
    ecotracker,
    typescript,
    firebase,
    mongodb,
    nextjs,
    eaglesring,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Task Automation",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Task Automation",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "Microsoft SQL Server Management",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Nextjs",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Technical Support",
        company_name: 'Bidvest Mobility',
        iconBg: '#accbe1',
        icon: bidvest,
        date: "Nov 2024 - Current",
        points:[
            "As a technician, I manage and resolve device issues using the Zoho ticketing system, addressing hardware and software issues",
            "I congure devices to customer specications, using tools like NetiraCT, PrintSet5, and SOTI for printer and device setup."

        ]
    },
    {
        title: "Web app Developer ",
        company_name:"University of Johannesburg",
        iconBg: "#fbc3bc",
        icon:uj,
        date: "Feb 2024 - October 2024",
        points:[
            "Worked on a year project using Nextjs which is a framework for React.",
            "Built a group project where I was a full stack developer but mainly focused on the backend."
        ]
        
    },
    {
        title: "Web Developer",
        company_name: "University of Johannesburg",
        icon: uj,
        iconBg: "#b7e4c7",
        date: "Feb 2023 - May 2023",
        points: [
            "Developing and maintaining web applications using HTML, CSS and PHP.",
            "Built a group project where we implemented all the technologies I was responsible for the backend.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "University of Johannesburg",
        icon: uj,
        iconBg: "#accbe1",
        date: "Aug 2023 - Nov 2023",
        points: [
            "Developing and maintaining mobile applications using React Native.",
            "Built an application for a group project.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "University of Johannesburg",
        icon: uj,
        iconBg: "#fbc3bc",
        date: "July 2023 - Aug 2023 ",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Network Admin",
        company_name: "Rosebank College",
        icon: rosebank,
        iconBg: "#fbc3bc",
        date: "July 2021 - Nov 2021 ",
        points: [
            "Learnt able networking and got to assemble a RJ45 (ethernet cable) and how does it work",
            
        ],
    },
    {
        title: "Support Service Administrator Tutorial",
        company_name: "Rosebank College",
        icon: rosebank,
        iconBg: "#b7e4c7",
        date: "Feb 2021 - May 2021 ",
        points: [
            "Learnt the importance of being a support service in a business.",
            "Group project",
        ],
    },
 
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/SiphesihleMazibuko',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/siphesihle-mazibuko-405799252/',
    }
];

export const projects = [
    {
        iconUrl: python,
        theme: 'btn-back-green',
        name: 'Python to-do list',
        description: 'A simple to-do list using python',
        link: 'https://github.com/SiphesihleMazibuko/Python-To-do-list',
    },
    {
        iconUrl: thrivementor,
        theme: 'btn-back-red',
        name: 'ThriveMentor',
        description: 'A website that helps individuals suffering with any mental issues or that need someone to talk to but do not need to go in person , but can just book a session online and have an online meetup. I was responsible for the backend utilizing Xampp',
        link: 'https://github.com/SiphesihleMazibuko/ThriveMentor',
    },
    {
        iconUrl: ecotracker,
        theme: 'btn-back-green',
        name: 'EcoTracker',
        description: 'A mobile application we created for our semester project with my group to give people knowledge on how to keep our environment safe. I worked mainly on the backend of the project using Firebase and Firestore ',
        link: 'https://github.com/SiphesihleMazibuko/Eco-Tracker2.0',
    },
    {
        iconUrl: eaglesring,
        theme: 'btn-back-red',
        nameL: 'EaglesRing',
        description: 'A platform for guide entrepreneurs on how to pitch their ideas, and also post their pitches for potential investors globally. By doing this investors will get the best pitch and will be able to invest in the project through the platform. I was responsible for both front and backend development using NextJs for frontend and MongoDB for the backend',
        link: 'https://eagles-ring2-0.vercel.app/',
    },
    
];
