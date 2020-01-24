interface Foo {
    bar: {
        baz: string;
    }
}

export const helloWorld =  () => {
    throw new Error('hello world')
};

export const uncoveredCode = () => {
    console.log('hello')
};
