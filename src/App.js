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
const User = (props) => {
  console.log(props);
  return <section>
    <img src={props.img} alt="user" />
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Hobbies: {props.hobbies}</p>
  </section>;
}

//Main component to show content on the screen
const App = () => {
    return( 
      <>
        {/*<Add />
        <Greetings />
        <Expressions />
        <List />
        <Users />*/}
        <User 
          img="https://avatars.githubusercontent.com/u/98624859?v=4"
          name="Naïké" 
          age="33"
          hobbies={["Coding", "Gaming", "Digital Painting"]}
        />
      </>
    );
}

export default App;