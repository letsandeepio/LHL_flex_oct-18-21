const readline = require('readline');

const createInterface = (opts) => {
  const rl = readline.createInterface(opts);

  const question = (prompt) => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(reject, 20000);
      rl.question(prompt, (input) => {
       clearTimeout(timeout);
        resolve(input);
      });
    });
  };

  const close = () => {
    rl.close();
  };

  return {
    question,
    close
  };
};

module.exports = {
  createInterface
};
