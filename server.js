const express = require('express');

const app = express();

const port = 3001;

app.listen(port, () => console.log(`Server listening on port ${port}`));


app.get('/api/hobbies', (request, response) => {
  const people = [
 {id: 1, hobby: 'Netflix', emoji:'📺'},
 {id: 2, hobby: 'Makeup', emoji:'💄'},
 {id: 3, hobby: 'Adventures', emoji:'🏔️'}
  ];
  response.json(people)
});

// const port = 3001;

// app.listen(port, () => console.log(`Server listening on port ${port}`));


// const express = require('express');

// const app = express();

// app.get('/api/hobbies', (request, response) => {
//   const people = [
// {id: 1, hobby: 'Netflix', emoji:''},
// {id: 2, hobby: 'Makeup', emoji:''},
// {id: 3, hobby: 'Adventures', emoji:''}
//   ];
//   response.json(hobbies)
// });

// const port = 3001;

// app.listen(port, () => console.log(`Server listening on port ${port}`));