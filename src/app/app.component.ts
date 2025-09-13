import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';

interface SkillReference {
  projectTitle: string;
  projectType: string; // 'education', 'professional experiences', 'projects'
  institution?: string;
  startDate?: string;
  endDate?: string;
}

interface SkillDetail {
  name: string;
  proficiency: number; // 1-5 scale
  yearsOfExperience: number;
  category: string; // 'Programming', 'Data Science & Machine Learning', etc.
  references: SkillReference[];
}

interface Project {
  startDate?: string;
  endDate?: string;
  title: string;
  institution?: string; // For university or company name
  location?: string; // For city/country
  shortDescription: string;
  detailedDescription?: string; // For longer, first-person descriptions
  skills: string[];
  categories: string[];
  publicationDate?: string;
  conferenceLink?: string;
  paperLink?: string;
  authors?: string;
  publisher?: string;
  status?: string;
  projectLink?: string; // For links to project websites or repos
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, SkillDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mo Mehabadi';
  selectedCategory: string = 'education';
  mainCategories = ['education', 'professional experiences', 'publications'];
  secondaryCategories = ['projects', 'skills'];
  categories = [...this.mainCategories, ...this.secondaryCategories];

  // Skill categories for filtering
  skillCategories = [
    'Data Science & Machine Learning',
    'Programming',
    'Database & Infrastructure',
    'Web & Backend Development',
    'All Skills',
  ];
  selectedSkillCategory: string = 'Programming';

  projects: Project[] = [
    // Education entries (chronological order, newest first)
    {
      startDate: '2022',
      endDate: 'Present',
      title: 'PhD in Computer Science',
      institution: 'University of New Brunswick',
      location: 'Fredericton, NB, Canada',
      shortDescription:
        'Research on smart grids including simulation of power grids with distributed energy resources, optimization and prediction on smart grids, and real-time data analytics cloud solutions.',
      skills: [
        'Research',
        'Data Analysis',
        'Machine Learning',
        'Smart Grid Technologies',
      ],
      categories: ['education'],
    },
    {
      startDate: '2018',
      endDate: '2021',
      title: 'M.Sc., Artificial Intelligence and Robotics',
      institution: 'Sharif University of Technology',
      location: 'Tehran, Iran',
      shortDescription:
        'Research on improving robustness of deep neural networks in image classification and semantic segmentation.',
      skills: [
        'Deep Learning',
        'Image Processing',
        'Computer Vision',
        'Neural Networks',
      ],
      categories: ['education'],
    },
    {
      startDate: '2012',
      endDate: '2017',
      title: 'B.Sc., Computer Engineering',
      institution: 'Amirkabir University of Technology',
      location: 'Tehran, Iran',
      shortDescription:
        'Focus on software engineering and artificial intelligence',
      skills: [
        'Algorithm Design',
        'Data Structures',
        'Web Engineering',
        'Artificial Intelligence',
      ],
      categories: ['education'],
    },

    // Professional experiences (most recent first)
    {
      startDate: '01/2023',
      endDate: '04/2023',
      title: 'Software Engineer Intern',
      institution: 'anessa',
      location: 'Fredericton, NB, Canada',
      shortDescription:
        'Development, testing and documentation of RESTful API services in a microservice solution. Implemented feed forward neural networks for prediction in simulation processes.',
      skills: [
        'Java',
        'Spring',
        'RESTful APIs',
        'Machine Learning',
        'Deep Learning',
        'MongoDB',
        'Docker',
        'Jira',
        'Bitbucket',
        'Angular',
        'Node.js',
      ],
      categories: ['professional experiences'],
    },
    {
      startDate: '08/2021',
      endDate: '04/2022',
      title: 'Machine Learning Engineer',
      institution: 'MCI (Hamrah-e-Aval) R&D Center',
      location: 'Tehran, Iran',
      shortDescription:
        'Development on scalable AI platform and deployment of distributed Machine Learning and Deep Learning using Kubernetes, Apache Spark, and Docker.',
      skills: ['PyTorch', 'Docker', 'Kubernetes', 'Apache Spark', 'Prometheus'],
      categories: ['professional experiences'],
    },
    {
      startDate: '01/2017',
      endDate: '11/2017',
      title: 'Software Engineer and Full-Stack Developer',
      institution: 'Imen Rayaneh Amirkabir, Co.',
      location: 'Tehran, Iran',
      shortDescription:
        'Design and development of single-page web app with RESTful APIs.',
      skills: [
        'MySQL',
        'Python',
        'Django',
        'JavaScript',
        'Vue.js',
        'HTML',
        'CSS',
      ],
      categories: ['professional experiences'],
    },
    {
      startDate: '05/2016',
      endDate: '12/2016',
      title: 'Full-Stack and Report Developer',
      institution: 'Kanoon Farhangi Amoozesh',
      location: 'Tehran, Iran',
      shortDescription: 'Development of web app and reporting tools for BI.',
      skills: [
        'SQL Server',
        'C#',
        '.NET MVC4',
        'JavaScript',
        'jQuery',
        'HTML',
        'CSS',
      ],
      categories: ['professional experiences'],
    },

    // Skills categories
    {
      startDate: '',
      endDate: '',
      title: 'Programming',
      shortDescription: 'Programming languages and technologies I work with',
      skills: [
        'Python',
        'Java',
        'C#',
        'C/C++',
        'MATLAB',
        'Shell Script',
        'JavaScript (ES6)',
        'HTML/CSS',
        'SASS',
      ],
      categories: ['skills'],
    },
    {
      startDate: '',
      endDate: '',
      title: 'Data Science & Machine Learning',
      shortDescription:
        'Data science and machine learning frameworks and libraries',
      skills: [
        'PyTorch',
        'TensorFlow',
        'Keras',
        'scikit-learn',
        'NumPy',
        'Pandas',
        'PIL',
        'OpenCV',
        'Apache Spark',
        'Matplotlib',
      ],
      categories: ['skills'],
    },
    {
      startDate: '',
      endDate: '',
      title: 'Web & Backend Development',
      shortDescription:
        'Backend and web development frameworks and technologies',
      skills: [
        'Django',
        'Flask',
        'FastAPI',
        'Spring',
        '.NET Core',
        '.NET MVC',
        'Express',
        'Vue.js',
        'Nuxt.js',
        'React.js',
        'Node.js',
      ],
      categories: ['skills'],
    },
    {
      startDate: '',
      endDate: '',
      title: 'Database & Infrastructure',
      shortDescription: 'Database systems and infrastructure technologies',
      skills: [
        'PostgreSQL',
        'SQL Server',
        'MySQL',
        'MongoDB',
        'Apache Kafka',
        'Redis',
        'Git',
        'Linux',
        'Docker',
        'Kubernetes',
      ],
      categories: ['skills'],
    },

    // Projects (most recent first)
    {
      startDate: '2023',
      endDate: 'Present',
      title: 'Personal Website',
      shortDescription:
        'A personal website to showcase my skills, experiences, and projects.',
      detailedDescription:
        'I created this website to showcase my professional background, skills, and projects in a clean, GitHub-inspired design. Built with Angular, this project demonstrates my front-end development skills while serving as a living resume that I can easily update as my career progresses.',
      skills: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      categories: ['projects'],
    },
    {
      startDate: '01/2023',
      endDate: '04/2023',
      title: 'Anessa AD•A - Anaerobic Digestion Assessment Tool',
      shortDescription:
        'Development of microservices and predictive models for an anaerobic digestion simulation tool.',
      detailedDescription:
        'During my internship at Anessa, I contributed to the AD•A (Anaerobic Digestion Assessment) software platform, which helps biogas project developers evaluate and optimize anaerobic digestion projects. I was responsible for developing, testing, and documenting RESTful API services within their microservice architecture. I also implemented feed-forward neural networks for prediction in simulation processes, improving the accuracy of biogas production estimates. This experience allowed me to apply both my software engineering skills and machine learning knowledge in a commercial product.',
      projectLink: 'https://www.anessa.com/anessa-ada',
      skills: [
        'Java',
        'Spring',
        'RESTful APIs',
        'Machine Learning',
        'Neural Networks',
        'MongoDB',
        'Docker',
        'Microservices',
      ],
      categories: ['projects'],
    },
    {
      startDate: '2021',
      endDate: '2022',
      title: 'Distributed Deep Learning Infrastructure',
      shortDescription:
        'Implementation of scalable infrastructure for distributed machine learning workloads.',
      detailedDescription:
        'While working at Hamrah-e-Aval MCI R&D under Dr. Rohban, I tested the deployment of deep learning tasks on distributed compute nodes. We evaluated large-scale machine learning tasks using Apache Spark under various cluster configurations to identify optimal setups for production environments. The project involved significant work with containerization (Docker) and orchestration (Kubernetes) to ensure that our machine learning workloads could scale efficiently across multiple nodes.',
      skills: [
        'PyTorch',
        'Docker',
        'Kubernetes',
        'Apache Spark',
        'Prometheus',
        'Distributed Computing',
        'Deep Learning',
      ],
      categories: ['projects'],
    },
    {
      startDate: '2020',
      endDate: '2021',
      title: 'GradMaker - Multi-Task Learning Framework',
      shortDescription:
        'A novel approach to multi-task learning in deep neural networks.',
      detailedDescription:
        "GradMaker was a research project focused on multi-tasking in deep learning. Working with two bachelor students on their final projects, we developed a novel approach that used the perceptron algorithm to find an optimal gradient direction given multiple gradients from different objectives and/or datasets. We implemented the system and wrote a paper documenting our methodology and findings. Though we maintained a GitHub repository for the project, we unfortunately couldn't get the work published due to limitations in our compute capacity for proper evaluation. The project provided valuable insights into gradient manipulation techniques for multi-task learning scenarios.",
      skills: [
        'PyTorch',
        'Deep Learning',
        'Multi-Task Learning',
        'Research',
        'Python',
        'Neural Networks',
      ],
      categories: ['projects'],
    },
    {
      startDate: '2017',
      endDate: '2017',
      title: 'Data Warehouse & BI Tool',
      shortDescription:
        'Full-stack implementation of a business intelligence solution on a highly normalized dataset.',
      detailedDescription:
        "During my time at Imen Rayaneh Amirkabir, I tackled the challenge of working with a highly normalized database where even simple queries required multiple joins between large tables. I designed a data warehouse solution to simplify access to this complex data structure. The implementation included a RESTful API built with Python and Django, and a client-side application developed with Vue.js 2 (which was all the hype at that time). This project was particularly significant as it represented my work as a full-stack engineer during the final years of my bachelor's degree.",
      skills: [
        'Python',
        'Django',
        'Vue.js',
        'MySQL',
        'Data Warehouse',
        'RESTful API',
        'JavaScript',
        'HTML',
        'CSS',
      ],
      categories: ['projects'],
    },
    {
      startDate: '2016',
      endDate: '2016',
      title: 'insp.kanoon.ir - Customer Support Management System',
      shortDescription:
        'Full-stack development of a customer relationship management system for lead tracking and team monitoring.',
      detailedDescription:
        "I developed this web application for the customer support team to track and follow up with leads from various sources including text messages and other channels in Kanoon's database. The system allowed support staff to record information on follow-ups and included tools for managers to moderate and monitor team activity. Despite being built over 9 years ago, the system is still in use today! I used C#, .NET MVC4 for the backend implementation, and JavaScript with jQuery for the front-end. The project involved developing reporting tools for lead management and dashboards for monitoring customer support team performance.",
      projectLink: 'https://insp.kanoon.ir',
      skills: [
        'C#',
        '.NET MVC4',
        'SQL Server',
        'JavaScript',
        'jQuery',
        'HTML',
        'CSS',
      ],
      categories: ['projects'],
    },

    // Publications (most recent first)
    {
      title:
        'Pattern-Driven and Stochastic Generation of Energy Time Series via Differentiable Simulation',
      shortDescription:
        'CASCON 2025: 35th IEEE International Conference on Collaborative Advances in Software and Computing',
      publicationDate: 'Accepted September, 2025',
      conferenceLink: 'https://conf.researchr.org/home/cascon-2025',
      authors:
        'Mohammad Mehabadi, Simin Shehbaz, Bhavani Sai Prasad Addala, Kenneth Kent',
      publisher: 'IEEE',
      status: 'Accepted',
      skills: [
        'Differentiable Simulation',
        'Energy Time Series',
        'Stochastic Generation',
      ],
      categories: ['publications'],
    },
    {
      title:
        'Benchmarking and Evaluation of Time Series Databases for Appliance-Level Energy Consumption Data',
      shortDescription:
        'CASCON 2025: 35th IEEE International Conference on Collaborative Advances in Software and Computing',
      publicationDate: 'Accepted September, 2025',
      conferenceLink: 'https://conf.researchr.org/home/cascon-2025',
      authors: 'Simin Shehbaz, Mohammad Mehabadi, Kenneth Kent',
      publisher: 'IEEE',
      status: 'Accepted',
      skills: ['Time Series Databases', 'Energy Consumption', 'Benchmarking'],
      categories: ['publications'],
    },
    {
      title:
        'DGSim: A Scalable Framework For Simulating Energy Consumption Of Household Appliances',
      shortDescription:
        'ECMS 2025: 39th International Conference on Modelling and Simulation',
      publicationDate: 'Published June, 2025',
      conferenceLink: 'https://scs-europe.net/conf/ecms2025/',
      paperLink: 'https://www.scs-europe.net/dlib/2025/2025-0562.html',
      authors: 'Bhavani Sai Prasad Addala, Mohammad Mehabadi, Kenneth B. Kent',
      publisher: 'IEEE',
      status: 'Published',
      skills: ['Simulation', 'Energy Consumption', 'Smart Grid'],
      categories: ['publications'],
    },
  ];

  filter(category: string) {
    this.selectedCategory = category;
  }

  filterSkills(category: string) {
    this.selectedSkillCategory = category;
  }

  getFilteredSkills(): SkillDetail[] {
    if (this.selectedSkillCategory === 'All Skills') {
      return this.skillDetails;
    }
    return this.skillDetails.filter(
      (skill) => skill.category === this.selectedSkillCategory
    );
  }

  // Skill details with references to projects/experiences
  skillDetails: SkillDetail[] = [
    // Programming Skills
    {
      name: 'Python',
      proficiency: 5,
      yearsOfExperience: 7,
      category: 'Programming',
      references: [
        {
          projectTitle: 'PhD in Computer Science',
          projectType: 'education',
          institution: 'University of New Brunswick',
          startDate: '2022',
          endDate: 'Present',
        },
        {
          projectTitle: 'Distributed Deep Learning Infrastructure',
          projectType: 'projects',
          institution: 'MCI R&D Center',
          startDate: '2021',
          endDate: '2022',
        },
        {
          projectTitle: 'GradMaker - Multi-Task Learning Framework',
          projectType: 'projects',
          startDate: '2020',
          endDate: '2021',
        },
        {
          projectTitle: 'Data Warehouse & BI Tool',
          projectType: 'projects',
          institution: 'Imen Rayaneh Amirkabir, Co.',
          startDate: '2017',
          endDate: '2017',
        },
      ],
    },
    {
      name: 'Java',
      proficiency: 4,
      yearsOfExperience: 3,
      category: 'Programming',
      references: [
        {
          projectTitle: 'Software Engineer Intern',
          projectType: 'professional experiences',
          institution: 'anessa',
          startDate: '01/2023',
          endDate: '04/2023',
        },
      ],
    },
    {
      name: 'TypeScript',
      proficiency: 4,
      yearsOfExperience: 2,
      category: 'Programming',
      references: [
        {
          projectTitle: 'Personal Website',
          projectType: 'projects',
          startDate: '2023',
          endDate: 'Present',
        },
      ],
    },

    // Data Science & Machine Learning
    {
      name: 'PyTorch',
      proficiency: 5,
      yearsOfExperience: 4,
      category: 'Data Science & Machine Learning',
      references: [
        {
          projectTitle: 'Machine Learning Engineer',
          projectType: 'professional experiences',
          institution: 'MCI (Hamrah-e-Aval) R&D Center',
          startDate: '08/2021',
          endDate: '04/2022',
        },
        {
          projectTitle: 'GradMaker - Multi-Task Learning Framework',
          projectType: 'projects',
          startDate: '2020',
          endDate: '2021',
        },
        {
          projectTitle: 'M.Sc., Artificial Intelligence and Robotics',
          projectType: 'education',
          institution: 'Sharif University of Technology',
          startDate: '2018',
          endDate: '2021',
        },
      ],
    },
    {
      name: 'TensorFlow',
      proficiency: 3,
      yearsOfExperience: 3,
      category: 'Data Science & Machine Learning',
      references: [
        {
          projectTitle: 'PhD in Computer Science',
          projectType: 'education',
          institution: 'University of New Brunswick',
          startDate: '2022',
          endDate: 'Present',
        },
      ],
    },

    // Web & Backend Development
    {
      name: 'Angular',
      proficiency: 4,
      yearsOfExperience: 2,
      category: 'Web & Backend Development',
      references: [
        {
          projectTitle: 'Personal Website',
          projectType: 'projects',
          startDate: '2023',
          endDate: 'Present',
        },
        {
          projectTitle: 'Software Engineer Intern',
          projectType: 'professional experiences',
          institution: 'anessa',
          startDate: '01/2023',
          endDate: '04/2023',
        },
      ],
    },
    {
      name: 'Spring',
      proficiency: 3,
      yearsOfExperience: 1,
      category: 'Web & Backend Development',
      references: [
        {
          projectTitle: 'Software Engineer Intern',
          projectType: 'professional experiences',
          institution: 'anessa',
          startDate: '01/2023',
          endDate: '04/2023',
        },
      ],
    },
    {
      name: 'Django',
      proficiency: 4,
      yearsOfExperience: 4,
      category: 'Web & Backend Development',
      references: [
        {
          projectTitle: 'Software Engineer and Full-Stack Developer',
          projectType: 'professional experiences',
          institution: 'Imen Rayaneh Amirkabir, Co.',
          startDate: '01/2017',
          endDate: '11/2017',
        },
      ],
    },

    // Database & Infrastructure
    {
      name: 'Docker',
      proficiency: 4,
      yearsOfExperience: 3,
      category: 'Database & Infrastructure',
      references: [
        {
          projectTitle: 'Software Engineer Intern',
          projectType: 'professional experiences',
          institution: 'anessa',
          startDate: '01/2023',
          endDate: '04/2023',
        },
        {
          projectTitle: 'Machine Learning Engineer',
          projectType: 'professional experiences',
          institution: 'MCI (Hamrah-e-Aval) R&D Center',
          startDate: '08/2021',
          endDate: '04/2022',
        },
      ],
    },
    {
      name: 'MongoDB',
      proficiency: 3,
      yearsOfExperience: 1,
      category: 'Database & Infrastructure',
      references: [
        {
          projectTitle: 'Software Engineer Intern',
          projectType: 'professional experiences',
          institution: 'anessa',
          startDate: '01/2023',
          endDate: '04/2023',
        },
      ],
    },
  ];
}
