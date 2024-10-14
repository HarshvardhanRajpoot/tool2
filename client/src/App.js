import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h1>Project Management Tool</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.tasks.map((task) => (
                <li key={task._id}>
                  {task.name} - {task.status} - {new Date(task.deadline).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

