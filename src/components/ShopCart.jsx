const Cart = () => {
    const items =["Wireless Mouse", "Keyboard", "Hoodie", "Power Bank", "Wireless Earbuds"]
    return (
        <div>
            <h1>Cart</h1>
            {items.length > 0 && <h2>You have {items.length} items in your cart.</h2>}
            <h3>Products:</h3>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;