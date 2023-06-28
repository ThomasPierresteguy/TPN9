import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import TaskCreate from './pages/TaskCreate';
import TaskEdit from './pages/TaskEdit';
import { useState } from 'react';
import './styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Tarea 1',
      description: 'Descripcion de la tarea 1',
      date: '2023-06-26',
      completed: true,
    },
    {
      id: 2,
      title: 'Tarea 2',
      description: 'Descripcion de la tarea 2',
      date: '2023-06-26',
      completed: false,
    },
    {
      id: 3,
      title: 'Tarea 3',
      description: 'Descripcion de la tarea 3',
      date: '2023-06-26',
      completed: false,
    },
  ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const markTaskAsCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route
          path="/detalle/:taskId"
          element={
            <TaskDetail
              tasks={tasks}
              deleteTask={deleteTask}
              editTask={editTask}
              markTaskAsCompleted={markTaskAsCompleted}
            />
          }
        />
        <Route
          path="/crear"
          element={<TaskCreate addTask={addTask} tasks={tasks} />}
        />
        <Route path="/editar/:taskId" element={<TaskEdit tasks={tasks} editTask={editTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
