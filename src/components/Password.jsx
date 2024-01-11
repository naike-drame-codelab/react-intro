// const ValidPassword = (props) => {
//     const { password, setPassword } = props;
//     const [passwordError, setPasswordError] = useState("");
    
//     const handlePassword = (e) => {
//         setPassword(e.target.value);
//         if (e.target.value.length < 8) {
//         setPasswordError("Password must be at least 8 characters");
//         } else {
//         setPasswordError("");
//         }
//     };
    
//     return (
//         <div>
//         <label htmlFor="password">Password: </label>
//         <input
//             type="password"
//             name="password"
//             onChange={handlePassword}
//             value={password}
//         />
//         {passwordError ? <p>{passwordError}</p> : null}
//         </div>
//     );
// };

// export default ValidPassword;

const ValidPassword = () => <div><h1>Valid Password</h1></div>;
const InvalidPassword = () => <div><h1>Invalid Password</h1></div>;

const Password = ({isValid}) => {
    // if (isValid) {
    //     return <ValidPassword />;
    // } else {
    //     return <InvalidPassword />;
    // }

    return isValid ? <ValidPassword /> : <InvalidPassword />;
};

export default Password;