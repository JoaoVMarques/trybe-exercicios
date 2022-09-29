const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities', (_req, res) => res.status(200).json(activities));

app.get('/myActivities/:id', (req, res) => {
  const myId = req.params.id;
  const activityById = activities.find(({ id }) => id === Number(myId))
  res.status(200).json(activityById);
});

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;
  
  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status)
  }

  res.status(200).json({ activity: filteredActivities });
});


module.exports = app;