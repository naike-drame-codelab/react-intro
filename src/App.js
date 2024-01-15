/*
//Import Components
import Add from "./components/Add";
import Greetings from "./components/Greetings";
import Expressions from "./components/Expressions";
import Users from "./components/Users";
import Password from "./components/Password";
import Cart from "./components/ShopCart";
import List from "./components/List";
import { GiBatMask } from "react-icons/gi";
import Button from "./components/Button";
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

// import "./styles/index.css";
import "./styles/tailwind.css"; // Import Tailwind CSS styles

// const Copy = () => {
	// 	const handleCopy = () => {
		
		// 		alert("Stop stealing my content!")
		// 	}
		
		// 	return (
			// 		<>
			// 			<p onCopy={handleCopy}>
			// 				Lorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si amet
			// 			</p>
			// 			<p>lorem2</p>
			// 		</>
			// 	);
			// }
			
			// const Move = () => {
				// 	const handleMove = () => {
					
					// 		alert("You hovered me :)")
					// 	}
					
					// 	return (
						// 		<>
						// 			<p onMouseMove={handleMove}>Lorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si amet</p>
						// 		</>
						// 	);
						// }
						
import Counter from "./components/Counter";
import Change from "./components/ChangeName";
import Friends from "./components/Friends";
//Main component to show content on the screen
const App = () => {
	// const styles = {
	// 	color: "green",
	// 	backgroundColor: "yellow",
	// 	padding: "1rem",
	// 	borderRadius: "0.5rem",
	// 	textAlign: "center",
	// };

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
				<h1 style={{ color: "white", backgroundColor: "darkblue" }}>
					Hewwwwo I'm Batman, with inline style
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
					Hewwwwo I'm Robin, with inline style from an object
				</h2>
				<h3>Hewwwwo I'm Joker, stylized from a css stylesheet</h3>
				<h4 className='py-5 mx-10 mt-10 text-3xl font-bold text-center text-white bg-red-500 rounded-md cursor-pointer animate-bounce'><GiBatMask className="mx-5"/>... I'm Gordon, stylized with Tailwind
				</h4>

				<Button />
				<Copy />
				<Move />
            */}

			<Counter />
			<Change />
			<Friends />

		</>
	);
};

export default App;
