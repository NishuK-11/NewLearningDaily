//App.jsx
function App(){
    const rameshObj={
        name:"Ramesh",
        age:24,
        profession:"Developer"
    };
    const sureshObj={
        name:"Suresh",
        age:30,
        profession:"Designer"
    };

    return(
        <>
            {/* <ProfileCard name={rameshObj.name} profession={rameshObj.profession}/> */}
            <ProfileCard {...rameshObj}/>   
            <ProfileCard user={sureshObj}/>
        </>
    );
}

//profile.jsx
function ProfileCard(props){
    const {name, profession} = props; //destructuring
    return(
        <div>
            <h2>{name}</h2>
            <p>{profession}</p>
        </div>
    );   
}



//agr app.jsx mei components mei kuchh likhna chaho to
//App.jsx
function App(){
    const rameshObj={
        name:"Ramesh",
        age:24,
        profession:"Developer"
    };
    const sureshObj={
        name:"Suresh",
        age:30,
        profession:"Designer"
    };

    return(
        <>
            {/* <ProfileCard name={rameshObj.name} profession={rameshObj.profession}/> */}
            <ProfileCard {...rameshObj} ><h1>these are the best students.</h1></ProfileCard>   
            <ProfileCard user={sureshObj}/>
        </>
    );
}

//profile.jsx
function ProfileCard(props,children){
    const {name, profession} = props; //destructuring
    return(
        <div>
            <h2>{name}</h2>
            <p>{profession}</p>
            {children}
        </div>
    );   
}



//child to parent kaise prop paas krte h-> functiom as prop paas krna ho child component mei
//App.jsx
import Button from './Button.jsx';
function App(){
    const [color, setColor] = React.useState('red');
    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return(
        <>
            <div style={{background:color}}>change my color</div>
            <Button changeColor={changeColor} />
        </>
    );
}

//Button.jsx
const Button = {{changeColor}} =>{
    return(
        <button onClick={()=>changeColor('green')}>Button</button>
    );
}