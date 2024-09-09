import React, { useState, useEffect } from 'react';
import { MdOutlineAddCircle, MdEdit, MdDelete, MdCancel } from 'react-icons/md';
import { IoMdCheckmarkCircle    } from "react-icons/io";

import '../css/todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');
  const [visibleTaskId, setVisibleTaskId] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
      console.log('Yerel depolamadan yüklenen görevler:', savedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const newTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
      setTasks(newTasks);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    console.log('Görev siliniyor:', newTasks);
    setTasks(newTasks);
    setVisibleTaskId(null);
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setEditText(task.text);
    setVisibleTaskId(task.id);
  };

  const saveEdit = () => {
    const newTasks = tasks.map(task =>
      task.id === editingTask.id ? { ...task, text: editText } : task
    );
    console.log('Düzenlenen görev kaydediliyor:', newTasks);
    setTasks(newTasks);
    setEditingTask(null);
    setEditText('');
    setVisibleTaskId(null);
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditText('');
    setVisibleTaskId(null);
  };

  const finishTask = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Todo List</h1>
      <div className="todo-container">
        <div className="task-input-container">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="write task.."
          />
          <button className="button-add" onClick={addTask}>
            <MdOutlineAddCircle size={36} />
          </button>
        </div>

        {editingTask && (
          <div className="edit-container">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
            <button className="button-save" onClick={saveEdit}>
              <IoMdCheckmarkCircle size={26} />
            </button>
            <button className="button-cancel" onClick={cancelEdit}>
              <MdCancel size={26} />
            </button>
          </div>
        )}

        <ul>
          {tasks.map(task => (
            <li
              key={task.id}
              onClick={() => setVisibleTaskId(visibleTaskId === task.id ? null : task.id)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
              {visibleTaskId === task.id && (
                <div className="task-buttons">
                  <button className="button-edit" onClick={(e) => { e.stopPropagation(); startEditing(task); }}>
                    <MdEdit size={26} />
                  </button>
                  <button className="button-delete" onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}>
                    <MdDelete size={26} />
                  </button>
                  <button className="button-finish" onClick={(e) => { e.stopPropagation(); finishTask(task.id); }}>
                    <IoMdCheckmarkCircle size={26} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
