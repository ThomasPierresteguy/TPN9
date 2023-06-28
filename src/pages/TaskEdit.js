import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const TaskEditPage = ({ tasks, editTask }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(taskId));

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [completed, setCompleted] = useState(task.completed);

  const handleSave = () => {
    const updatedTask = {
      id: task.id,
      title,
      description,
      completed,
    };

    editTask(task.id, updatedTask);
    navigate('/');
  };

  if (!task) {
    return <div>Tarea no encontrada</div>;
  }

  const style = {
    display: 'none',
  };

  return (
    <div className='homeContainer'>
      <div className='homeBody'>
        <div className='homeTitle'>
          <div className='homeLeft'>
            <h1>Editar tarea</h1>
          </div>
          <div className='homeRight'>
            <div className='buttonSave' onClick={handleSave}>
              <FontAwesomeIcon
                icon={faCheck}
                className='svgIcon'
              />
            </div>
          </div>
        </div>
        <div class="input-container">
            <input placeholder="Titulo" class="input-field" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label for="input-field" class="input-label">Titulo</label>
            <span class="input-highlight"></span>
          </div>
          <div class="input-container">
            <input placeholder="Descripcion" class="input-field" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <label for="input-field" class="input-label">Descripcion</label>
            <span class="input-highlight"></span>
          </div>
          <div class="container">
            <p>Estado </p>
            <input type="checkbox" id="cbx" style={style} checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
            <label for="cbx" class="check">
              <svg width="18px" height="18px" viewBox="0 0 18 18">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
      </div>
    </div>
  );
};

export default TaskEditPage;
