// Can create a react component with a JS class or function. 
// Functions usually more popular

// PascalCasing
// Convention for react

function Message(){
    // JSX: JavaScript XML
    // This code will get compiled to JS
    // Can visit babeljs.io/repl to see real time conversion
    // JSX allows us to create dynamic content

    const name = 'Kadin';
    return <h1>Hello {name}</h1>;
}


// In order to use this, we have to export
export default Message;
