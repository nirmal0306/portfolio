import React from 'react';
import './projects.css';
const Projects = () => {
    const projects = [
        {
            title: 'Society Management System',
            description: 'Society Management system using Angular (MEAN).',
            link: 'https://github.com/nirmal0306/SMS.git',
        },
        {
            title: 'Admission Bot',
            description: ' Admission Bot is created by python.',
            link: 'https://github.com/nirmal0306/Addmission_Bot.git',
        },
        {
            title: 'Event Management System',
            description: 'Event management system made by React (MERN).',
            link: 'https://github.com/nirmal0306/EVENT_MANAGEMENT_SYSTEM.git',
        },
        {
            title: 'Cricket',
            description: 'cricket-score mobile application using kotlin.',
            link: 'https://github.com/nirmal0306/Cricket-Score.git',
        },
        
        {
            title: 'lib-x management system',
            description: 'Library Management system using django.',
            link: 'https://github.com/nirmal0306/Lib-x_management_system.git',
        }, 
        {
            title: 'Kavi Narmad Central Library',
            description: 'A library management projct made by laravel.',
            link: 'https://github.com/nirmal0306/Lib.git',
        },
    ];

    return (
        <section id="projects" style={{backgroundColor:'aliceblue'}}>
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" className="btn-primary" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
