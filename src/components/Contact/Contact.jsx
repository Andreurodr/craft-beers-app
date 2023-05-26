const Contact = () => {
    return(
        <form className="contact_form" action="">
            <h1>Contact</h1>
            <label htmlFor="">Name</label>
            <input type="text"/><br/>
            <label htmlFor="">Comment</label>
            <textarea placeholder="Write your comment here..."></textarea>
            <button type="submit" className="button">Send</button>
        </form>
    )
}

export default Contact