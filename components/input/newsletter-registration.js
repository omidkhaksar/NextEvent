import classes from './newsletter-registration.module.css';
import {useRef} from  'react'

function NewsletterRegistration() {
  const userEmail = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    const email = userEmail.current.value;
    const reqBody = {
      email : email
    }
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    fetch('/api/newsletter',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json()).then((data) => console.log(data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={userEmail}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
