const numbers = [1, 2, 3, 4, 5];

const List = () => {
    return <>
         <ul key={Math.random() * 10}>
            {numbers.map(
                (number) => <li>{number}</li>)
            }
        </ul>
    </>;
}

export default List;