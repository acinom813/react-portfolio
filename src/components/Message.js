import React,{useState} from 'react';
import './App.css';

function Message(props) {
    const [contact, setContact]=useState({
        subject: "",
        message: ""
    })

   const handleInputChange = (e) => {
       const {name, value} = e.target

       setContact({ ...contact, [name]:value})
   }

   const handleSubmit = (e) => {
       e.preventDefault()
       window.location.href="mailto:monica.r.hill@gmail.com?subject="+contact.subject+"&body="+contact.message
   }

    return (
        <div id="contact" className="w-50 mx-auto mt-5 mb-5">
            <div className="post-heading text-center">
                <h4 className="display-4 font-weight-bold">Connect.</h4>
                <hr className="w-50 mx-auto pb-5" />
            </div>

            <form action="/action_page.php">
                <div className="form-group">
                    <label for="subject">Subject:</label>
                    <input type="text" class="form-control" placeholder="Subject" id="email" name="subject" value={contact.subject} onChange={handleInputChange} />
                </div>

                <div className="form-group">
                    <label for="email">Message:</label>
                    <textarea className="form-control"  name="message" value={contact.message} onChange={handleInputChange}></textarea>
                </div>

                <button className="btn" onClick={handleSubmit} >Email Me</button> 
            </form>
            <div>
      <h2>Social Media</h2>
<p><a href="https://www.linkedin.com/in/monica-r-hill">LinkedIn</a></p>
    </div>


        </div>
    )
}

export default Message; 