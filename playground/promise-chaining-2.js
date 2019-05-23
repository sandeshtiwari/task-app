require('../src/db/mongoose');
const Task = require('../src/models/task');


Task.findByIdAndDelete('5ce4a2ecab15253458fbd910').then((task) => {
  console.log(task);
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
})
