const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

// Create a new task
router.post('/', async (req, res, next) => {
  const { title, description, completed } = req.body;
  try {
    const task = await Task.create({ title, description, completed });
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
});

// Get a task by ID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    next(error);
  }
});

// Update a task
router.patch('/:id', async (req, res, next) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.update({ title, description, completed });
      res.json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    next(error);
  }
});

// Delete a task
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
