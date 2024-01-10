const myName = "Naïké";
const multiply = (a, b) => a*b;
const specialClass="simple-class";
const names = ["Am", "Stram", "Gram"];

const Expressions = () => {
    return (
        <div>
            {/*Rendering Variable Values*/}
            <h1>Hello {myName}</h1>
            {/*Rendering Expressions*/}
            <p>2 + 2 = {2 + 2}</p>
            {/*Rendering Arrays*/}
            <p>My friends list: {names}</p>
            {/*Rendering Function Value*/}
            <p>2 x 3 = {multiply(2, 3)}</p>
            {/*Rendering Classes*/}
            <p className={specialClass}>This is a simple class</p>
        </div>
    );
}

export default Expressions;