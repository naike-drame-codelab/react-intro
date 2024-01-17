// /*
// //Import Components
// import Add from "./components/Add";
// import Greetings from "./components/Greetings";
// import Expressions from "./components/Expressions";
// import Users from "./components/Users";
// import Password from "./components/Password";
// import Cart from "./components/ShopCart";
// import List from "./components/List";
// import { GiBatMask } from "react-icons/gi";
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import Change from "./components/ChangeName";
// */

// /*Fragments
// For some layouts, we don't need <section> or <div> tags, but we still need a parent for our multiple components to return ==> we can use Fragments
// Method A:
// 1) import { Fragment } from "react";
// 2) Wrap components in Fragment tags
// Method B:
//   1) Wrap components in <> </>

// */

// /*Props
// We can many things to components using props:
// - data
// - functions
// - children
// - objects
// - arrays
// */

// // const User = (props) => {
// //     console.log(props);
// //     return (
// //         <section>
// //             <img
// //                 src={props.img}
// //                 alt="user"
// //             />
// //             <h1>{props.name}</h1>
// //             <p>Age: {props.age}</p>
// //             <p>Hobbies: {props.hobbies}</p>
// //         </section>
// //     );
// // };

// // import "./styles/index.css";

// // const Copy = () => {
// // 	const handleCopy = () => {

// // 		alert("Stop stealing my content!")
// // 	}

// // 	return (
// // 		<>
// // 			<p onCopy={handleCopy}>
// // 				Lorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si amet
// // 			</p>
// // 			<p>lorem2</p>
// // 		</>
// // 	);
// // }

// // const Move = () => {
// // 	const handleMove = () => {

// // 		alert("You hovered me :)")
// // 	}

// // 	return (
// // 		<>
// // 			<p onMouseMove={handleMove}>Lorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si ametLorem ipsum dolor si amet</p>
// // 		</>
// // 	);
// // }

// // import Friends from "./components/Friends";
// // import Movie from "./components/Movie";
// // import Form from "./components/Form";
// // import Effect from "./components/Effect";
// // import Fetch from "./components/Fetch";
// //import { createContext } from "react";
// // import ComponentC from "./components/ComponentC";

// // export const Data = createContext();
// // export const Data1 = createContext();
// // export const UserData = createContext();

// import "./styles/tailwind.css"; // Import Tailwind CSS styles
// //import { useReducer } from "react";

// //Main component to show content on the screen
// const App = () => {
//     // const styles = {
//     // 	color: "green",
//     // 	backgroundColor: "yellow",
//     // 	padding: "1rem",
//     // 	borderRadius: "0.5rem",
//     // 	textAlign: "center",
//     // };

//     // const userData = {
//     //     name: "Naïké",
//     //     age: 33,
//     //     hobbies: ["Coding", "Gaming", "Digital Painting"],
//     // };

//     // state: state of our application
//     // dispatch: allows us to change state data ---> is the function in charge of updating the state: the setValue in [value, setValue]
//     // reducer: custom state logic: function that receives the current state and an action, and returns a new state
//     // initialState: initial state of our application, contained in an object {}

//    // const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         {/*
//         <>
//               <Add />
//               <Greetings />
//               <Expressions />
//               <List />
//               <Users />
//               <Password isValid={true} />
//               <User
//                     img="https://avatars.githubusercontent.com/u/98624859?v=4"
//                     name="Naïké"
//                     age="33"
//                     hobbies={["Coding", "Gaming", "Digital Painting"]}
//                 />
//                 <Password isValid={true} />
//                 <Cart />
// 				<h1 style={{ color: "white", backgroundColor: "darkblue" }}>
// 					Hewwwwo I'm Batman, with inline style
// 				</h1>
// 				<h2
// 					style={{
// 						color: styles.color,
// 						backgroundColor: styles.backgroundColor,
// 						padding: styles.padding,
// 						borderRadius: styles.borderRadius,
// 						textAlign: styles.textAlign,
// 					}}
// 				>
// 					Hewwwwo I'm Robin, with inline style from an object
// 				</h2>
// 				<h3>Hewwwwo I'm Joker, stylized from a css stylesheet</h3>
// 				<h4 className='py-5 mx-10 mt-10 text-3xl font-bold text-center text-white bg-red-500 rounded-md cursor-pointer animate-bounce'><GiBatMask className="mx-5"/>... I'm Gordon, stylized with Tailwind
// 				</h4>

// 				<Button />
// 				<Copy />
// 				<Move />
// 				<Counter />
// 				<Change />
// 				<Friends />
// 				<hr className="my-5" />
// 				<Movie />
// 				<hr className="my-5" />
// 				<Form />
// 				<hr className="my-5" />
// 				<Effect />
// 				<hr className="my-5" />
// 				<Fetch />
//                 <Data.Provider value={name}>
//                     <Data1.Provider   Data1.Provider value={age}>
//                         <ComponentC />
//                     </Data1.Provider>
//                 </Data.Provider>

//                 <UserData.Provider value={userData}>
//                     <ComponentC />
//                 </UserData.Provider>
//             <h1 className="mb-5 text-3xl font-bold">Count: <span className="mb-5 font-extrabold text-slate-400">{state.count}</span></h1>
//             <div className="flex gap-3">
//                 <button
//                     onClick={() => dispatch({ type: "increment" })}
//                     className="px-5 py-2 bg-green-300 border-2 rounded-sm hover:bg-green-400 border-slate-400"
//                 >
//                     +
//                 </button>
//                 <button onClick={() => dispatch({ type: "decrement" })} className="px-5 py-2 bg-red-300 border-2 rounded-sm hover:bg-red-400 border-slate-400" >
//                     -
//                 </button>
//                 <button onClick={() => dispatch({ type: "reset" })} className="px-5 py-2 bg-transparent border-2 rounded-sm hover:bg-slate-200 border-slate-400" >
//                     Reset
//                 </button>
//             </div>
//         </>
//     );
//             */}

//     );
// };

// // const initialState = { count: 0 };

// // const reducer = (state, action) => {
// //     switch (action.type) {
// //         case "increment":
// //             return {
// //                 ...state,
// //                 count: state.count + 1,
// //             };
// //         case "decrement":
// //             return {
// //                 ...state,
// //                 count: state.count - 1,
// //             };
// //         case "reset":
// //             return {
// //                 ...state,
// //                 count: 0,
// //             };
// //         default:
// //             return state;
// //     }
// // };

import { useRef } from "react";

const App = () => {
    const inputElement = useRef(null);

    const focusElement = () => {
        inputElement.current.focus();
        inputElement.current.value = "Naïké";
    };

    return (
        <>
            <input
                type="text"
                ref={inputElement}
                className="p-2 m-5 border-2 rounded-md border-slate-300 active:border-slate-500"
            />
            <button
                onClick={() => focusElement()}
                className="p-2 text-white border-2 rounded-md bg-slate-400 hover:bg-slate-300"
            >
                Focus & Write Naïké
            </button>
        </>
    );
};

export default App;
