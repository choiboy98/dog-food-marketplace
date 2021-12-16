import * as React from 'react';
import '../styles/styles.scss';
import Header from '../components/header';
import RegisterForm from '../components/registerForm';

const Register = () => {
  return (
    <div>
      <Header shouldDisplayTabs="false" />
      <RegisterForm />
    </div>
  )
}
// Step 3: Export your component
export default Register