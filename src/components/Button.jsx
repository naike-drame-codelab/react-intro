const Button = () => {

    const handleClick = (a, b) => {
        console.log(a+b);
    }
    
    return <button onClick={() => handleClick(2,2)} className="px-5 py-1 text-white rounded-sm bg-slate-500 hover:bg-slate-600">Click</button>
}

export default Button;