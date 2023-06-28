import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import '../styles/Home.css';
library.add(faTrashAlt, faPencilAlt);

const TaskDetailPage = ({ tasks, deleteTask, editTask }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(taskId));

  const handleDelete = () => {
    deleteTask(task.id);
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/editar/${task.id}`);
  };

  if (!task) {
    return <div>Tarea no encontrada</div>;
  }

  return (
    <div className='homeContainer'>
      <div className='homeBody'>
        <div className='homeTitle'>
          <div className='homeLeft'>
            <h1>Detalles de la tarea</h1>
          </div>
          <div className='homeRight'>
            <div className='buttonDelete' onClick={handleDelete}>
              <FontAwesomeIcon
              icon="trash-alt"
              className='svgIcon'
              />
            </div>
            <div className='buttonEdit' onClick={handleEdit}>
              <FontAwesomeIcon
              icon="pencil-alt"
              className='svgIcon'
              />
            </div>
          </div>
        </div>
        <div className='homeContent'>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Creada el{' '}{format(new Date(task.date), 'dd-MM-yyyy', { locale: es })}</p>
          <p>{task.completed ? 'Completa' : 'Incompleta'}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;
