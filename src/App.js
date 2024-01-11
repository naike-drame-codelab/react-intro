/*
//Import Components
import Add from "./components/Add";
import Greetings from "./components/Greetings";
import Expressions from "./components/Expressions";
import List from "./components/List";
import Users from "./components/Users";
*/

/*Fragments
For some layouts, we don't need <section> or <div> tags, but we still need a parent for our multiple components to return ==> we can use Fragments
Method A:
  1) import { Fragment } from "react";
  2) Wrap components in Fragment tags
Method B:
  1) Wrap components in <> </>

*/

/*Props
We can many things to components using props:
- data
- functions
- children
- objects
- arrays
*/

import Password from "./components/Password";
import Cart from "./components/ShopCart";
import "./css/index.css";

// const User = (props) => {
//     console.log(props);
//     return (
//         <section>
//             <img
//                 src={props.img}
//                 alt="user"
//             />
//             <h1>{props.name}</h1>
//             <p>Age: {props.age}</p>
//             <p>Hobbies: {props.hobbies}</p>
//         </section>
//     );
// };

//Main component to show content on the screen
const App = () => {
    const styles = {
        color: "green",
        backgroundColor: "yellow",
        padding: "1rem",
        borderRadius: "0.5rem",
        textAlign: "center",
    };

    return (
        <>
            {/*
              <Add />
              <Greetings />
              <Expressions />
              <List />
              <Users />
              <Password isValid={true} />
              <User
                    img="https://avatars.githubusercontent.com/u/98624859?v=4"
                    name="Naïké"
                    age="33"
                    hobbies={["Coding", "Gaming", "Digital Painting"]}
                />
                <Password isValid={true} />
                <Cart />
            */}
            <h1 style={{ color: "white", backgroundColor: "darkblue" }}>
                Hewwwwo I'm Batman
            </h1>
            <h2
                style={{
                    color: styles.color,
                    backgroundColor: styles.backgroundColor,
                    padding: styles.padding,
                    borderRadius: styles.borderRadius,
                    textAlign: styles.textAlign,
                }}
            >
                Hewwwwo I'm Robin
            </h2>
            <h3>Hewwwwo I'm Joker</h3>
            <h4>... I'm Gordon</h4>
        </>
    );
};

export default App;
