const Profile = ({user}) => {
    return (
        <article className="profile">
        
            <img className="user_img" src={user.image} alt="userImage"/>
            <h1>User Profile</h1>
            <p><strong>E-mail:</strong> {user.email}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Favourite Beer:</strong> {user.favouriteBeer}</p>
        </article>
    )
}

export default Profile