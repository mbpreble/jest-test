const helloWorld =  () => {
    throw new Error('hello world')
};

const uncoveredCode = () => {
    console.log('hello')
};

module.exports = {
    helloWorld,
    uncoveredCode
};
