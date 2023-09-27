import {
    mobile,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    
    git,
    Ztech,
    Fridashoes,
    carrent,
   
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
   
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Z-tech",
      icon: Ztech,
      iconBg: "#383E56",
      date: "March 2021 - Present",
      points: [
        "Implemented responsive and user-friendly web solutions, ensuring optimal performance and functionality across various devices and browsers.",
        "Crafted seamless navigation and intuitive layouts to maximize user engagement.",
        "Collaborated with back-end developers to integrate RESTful APIs and ensure data retrieval and manipulation is efficient and reliable.",
        "Participated in code reviews to ensure code quality, adherence to coding standards, and knowledge sharing among team members.",
      ],
    },
    
    {
      title: "Web Developer",
      company_name: "Frida shoes",
      icon: Fridashoes,
      iconBg: "#383E56",
      date: "August 2023 - August 2023",
      points: [
        "I ensured that the Fridashoes website was fully responsive, adapting seamlessly to various screen sizes and devices, including desktops, tablets, and mobile phones. ",
        "I was responsible for creating and enhancing the website's front-end components.",
        "I worked diligently to optimize the website's performance by minimizing page load times and improving overall speed.",
        "Customers could easily find products based on criteria such as size, color, brand, and price range.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I highly recommend Nnenna to anyone seeking a dedicated and talented web developer.",
      name: "Leah Tronba",
      designation: "Brand Partner",
      company: "Xela Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Anjola Seyi",
      designation: "COO",
      company: "landon Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Nnenna optimized our website, our traffic increased by 30%. We can't thank them enough!",
      name: "Lisa Miracle",
      designation: "CEO",
      company: "sati.nscrunchies",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Frida Shoes",
      description:
        "Web-based shopping platform that allows users to search, buy, and manage beautiful shoes from various vendors, providing a convenient and efficient solution for footwear needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient"
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/that-melani-hacker/fridashoes-github.io.git",
    
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };