import { useState, useEffect } from 'react';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:3030/user`, {
            credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
        }, 2000)
    }, [])

    return (
        <div className="home">
            <h2>Welcome, {user && user.username}</h2>
            <h4>{user && user.email}</h4>
        </div>
    )
}

export default Home;