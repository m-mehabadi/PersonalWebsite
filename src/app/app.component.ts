import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';

interface Project {
  startDate?: string;
  endDate?: string;
  title: string;
  shortDescription: string;
  skills: string[];
  categories: string[];
  publicationDate?: string;
  conferenceLink?: string;
  paperLink?: string;
  authors?: string;
  publisher?: string;
  status?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mo Mehabadi';
  selectedCategory: string = 'education';
  mainCategories = ['education', 'professional experiences', 'publications'];
  secondaryCategories = ['projects', 'skills'];
  categories = [...this.mainCategories, ...this.secondaryCategories];

  projects: Project[] = [
    {
      startDate: '2022',
      endDate: 'Present',
      title: 'PhD in Computer Science',
      shortDescription:
        'University of New Brunswick. Research on smart grids including simulation of power grids with distributed energy resources, optimization and prediction on smart grids, and real-time data analytics cloud solutions.',
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
      shortDescription:
        'Sharif University of Technology. Research on improving robustness of deep neural networks in image classification and semantic segmentation.',
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
      shortDescription: 'Amirkabir University of Technology',
      skills: [
        'Algorithm Design',
        'Data Structures',
        'Web Engineering',
        'Artificial Intelligence',
      ],
      categories: ['education'],
    },
    {
      startDate: '01/2023',
      endDate: '04/2023',
      title: 'Software Engineer Intern',
      shortDescription:
        'anessa, Fredericton, NB. Development, testing and documentation of RESTful API services in a microservice solution. Implemented feed forward neural networks for prediction in simulation processes.',
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
      shortDescription:
        'MCI (Hamrah-e-Aval) R&D Center, Tehran, Iran. Development on scalable AI platform and deployment of distributed Machine Learning and Deep Learning using Kubernetes, Apache Spark, and Docker.',
      skills: ['PyTorch', 'Docker', 'Kubernetes', 'Apache Spark', 'Prometheus'],
      categories: ['professional experiences'],
    },
    {
      startDate: '01/2017',
      endDate: '11/2017',
      title: 'Software Engineer and Full-Stack Developer',
      shortDescription:
        'Imen Rayaneh Amirkabir, Co., Tehran, Iran. Design and development of single-page web app with RESTful APIs.',
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
      shortDescription:
        'Kanoon Farhangi Amoozesh, Tehran, Iran. Development of web app and reporting tools for BI.',
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
    {
      startDate: '2023',
      endDate: 'Present',
      title: 'Personal Website',
      shortDescription:
        'A personal website to showcase my skills, experiences, and projects.',
      skills: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      categories: ['projects'],
    },
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
}
