function Message(){
    //JSX: JavaScript XML.
    //check out babeljs.io/repl to see how it's converted into javascript code.
    const name = 'Adam';
    if(name){
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello World.</h1>
   
}

export default Message;