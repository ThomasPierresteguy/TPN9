import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const HomePage = ({ tasks }) => {
  return (
    <div className='homeContainer'>
      <div className='homeBody'>
        <h1 className='homeTitle'>Lista de Tareas</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <Link  className='buttonDetail' to={`/detalle/${task.id}`}>Detalles</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
