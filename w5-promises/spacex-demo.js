const { readdir, readFile } = require('fs/promises');
const readlinePromise = require('./readline-promise');

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
});

const options = {
  encoding: 'utf8'
};

readdir('./spacex')
  .then((files) => {
    const options = files
      .map((rocket, i) => `${i + 1}. ${rocket.split('.')[0]}`)
      .join('\n');
    console.log(options);
    return rlp.question('Please chose a rocket: ');
  })
  .then((chosenRocket) => {
    console.log(`You have chosen ${chosenRocket}\n`);
    return readFile(`./spacex/${chosenRocket}.json`, options);
  })
  .then((fileContent) => {
    const rocketInfo = JSON.parse(fileContent);
    console.log('========description=======\n\n');
    console.log(rocketInfo.description);
  })
  .catch((error) => {
    console.log('Something went wrong');
  })
  .finally(() => rlp.close());
