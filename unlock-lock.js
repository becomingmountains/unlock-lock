#!/usr/bin/env node
const { spawn } = require('child_process');
const express = require('express');

const app = express();
const port = 3000;
const MINUTES_TO_MILLISECONDS = 60000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let timeout;

app.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.minutes) {
    return res.status(400).send("no time set")
  }
  const milliseconds = req.body.minutes * MINUTES_TO_MILLISECONDS; 
  timeout = setTimeout(() => {
    spawn("killall", ['node']);
    spawn("gnome-screensaver-command", ["--lock"]);
  }, milliseconds);
  return res.status(200).send('Hello World!')
})

app.get('/', (req, res) => {
  clearTimeout(timeout)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})
