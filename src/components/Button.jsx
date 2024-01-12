const Button = () => {

    const handleClick = () => {
        alert('Button clicked!');
    }
    
    return <button onClick={handleClick} className="px-5 py-1 text-white rounded-sm bg-slate-500">Click</button>
}

export default Button;