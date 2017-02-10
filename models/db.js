import monk from 'monk';

let db = monk("localhost/simple-blog");
db.then(() => {
  console.log('Connected to mongo db.');
});

export default db;