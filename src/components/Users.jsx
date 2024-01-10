const userInfo = [
    {
        username: "Am",
        email: "am@info.com",
        location: "BE"
    },
    {
        username: "Stram",
        email: "stram@info.com",
        location: "UK"
    },
    {
        username: "Gram",
        email: "gram@info.com",
        location: "DE"
    }
]

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {userInfo.map((user) => (
                    <li key={user}>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.email}</p>
                        <p>Location: {user.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
