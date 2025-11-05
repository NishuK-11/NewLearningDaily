Babel is javascript compiler that transforms modern JavaScript code into a version compatible with older environments. One of its key features is the ability to transform JSX syntax, which is commonly used in React applications.
example:
// Original JSX code
const element = <h1>Hello, world!</h1>;
// Transformed JavaScript code using Babel
const element = React.createElement('h1', null, 'Hello, world!');

jsx rules:-
2 elements ek saath return nhi kr skte, 
return(
    h1></h1>
    h2></h2>
)// galat hai
shi:-
return (
    <div>
        <h1></h1>   
        <h2></h2>
    </div>
)// is-se extra div create hoga
// better way: React.Fragment or short syntax <>
return (
    <>
        <h1></h1>   
        <h2></h2>
    </>
)

const items=['apple', 'banana', 'cherry'];
return(
    <>
        <ul>{items.map(items=><li>{item}</li>)}</ul>
    </>
)