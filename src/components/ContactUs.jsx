import  './ContactUs.css';



function ContactUs() {
  return (
    <div className="form">
      <h1>CONTACT US</h1>
      <section id="contact">
        <div>
          <form>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
            
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" />
            
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" name="email" />
            
            <label htmlFor="text">Comments:</label>
            <textarea id="text" name="text" rows="5"></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}



export default ContactUs