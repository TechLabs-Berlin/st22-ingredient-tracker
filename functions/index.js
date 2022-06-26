// // Test https function as per Firebase documentation

// const functions = require('firebase-functions');

// exports.bigben = functions.https.onRequest((req, res) => {
//   const hours = (new Date().getHours() % 12) + 1  // London is UTC + 1hr;
//   res.status(200).send(`<!doctype html>
//     <head>
//       <title>Time</title>
//     </head>
//     <body>
//       ${'BONG '.repeat(hours)}
//     </body>
//   </html>`);
// });

// Firebase function with Express.js

const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/bigben', (req, res) => {
  const date = new Date();
  const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
  res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>In London, the clock strikes:
        <span id="bongs">${'BONG '.repeat(hours)}</span></p>
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
});

// Firebase functions and Express.js syntax for custom demo API that is displayed in demo component

app.get('/api', (req, res) => {
  const demoData = [
    {
      name: 'Apple',
      type: 'Fruit'
    },
    {
      name: 'Pear',
      type: 'Fruit'
    },
    {
      name: 'Tomato',
      type: 'Fruit (technically)'
    },
  ];
  res.json(demoData);
});

// app.get('/api', (req, res) => {
//   const date = new Date();
//   const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
//   res.json({bongs: 'BONG '.repeat(hours)});
// });

exports.app = functions.https.onRequest(app);