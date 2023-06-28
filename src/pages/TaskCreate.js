import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

const TaskCreate = ({ addTask, tasks }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      date: new Date().toISOString(),
      completed,
    };

    addTask(newTask);
    navigate('/');
  };

  const style = {
    display: 'none',
  };

  return (
    <div className='homeContainer'>
      <div className='homeBody'>
        <form onSubmit={handleSubmit}>
          <div className='homeTitle'>
            <div className='homeLeft'>
              <h1>Crear tarea</h1>
            </div>
            <div className='homeRight'>
              <button className='buttonSave' type="submit">
              <FontAwesomeIcon
                  icon={faCheck}
                  className='svgIcon'
                />
              </button>
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
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
