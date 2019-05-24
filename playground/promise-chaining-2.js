require('../src/db/mongoose');
const Task = require('../src/models/task');


// Task.findByIdAndDelete('5ce376c8bdc1f418180c8c06').then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false })
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.log(e);
// })


const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('5ce4a288d58d412524c177e1').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})