import {useState} from 'react'
import AccordionComp from './Accordion';
import logo from './logo.svg';
//import './App.css';

function App() {



  return (
    <div className="container my-5">
      <form>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input type="email" id="email" className='form-control'/>
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type="password" id="password" className='form-control'/>
        </div>

        <div className='mb-3'>
          <label htmlFor='confirm-password' className='form-label'>
            Confirm Password
          </label>
          <input type="password" id="confirm-password" className='form-control'/>
        </div>
        <button type='submit'>

        </button>
      </form>
      <hr/>
      <AccordionComp/>
    </div>
  );
}

export default App;

//------------------
//  https://www.udemy.com/course/react-with-test-driven-development/
// https://www.udemy.com/course/test-driven-development-with-nodejs/
// https://www.udemy.com/course/unit-testing-and-test-driven-development-in-nodejs/
// https://www.udemy.com/course/react-testing-app/
// https://www.udemy.com/course/nodejs-unit-testing-in-depth/

// https://www.udemy.com/course/full-stack-project-using-spring-boot-and-react-with-tdd/
// https://www.udemy.com/course/react-with-test-driven-development/
// https://www.udemy.com/course/react-web-development-become-a-react-developer/
// https://www.udemy.com/course/react-redux-material-ui-workshop/
// https://www.udemy.com/course/react-2nd-edition/
// https://www.udemy.com/course/test-driven-development-with-react/
// https://www.udemy.com/course/test-driven-web-application-development-with-spring-react/
// https://www.udemy.com/course/fullstack-project-react-fastify-nodejs-postgresql-tdd/
// https://www.udemy.com/course/create-a-web-app-with-mern/
// https://www.udemy.com/course/full-stack-project-using-spring-boot-and-react-with-tdd/
// https://www.udemy.com/course/fullstack-project-react-fastify-nodejs-postgresql-tdd/

