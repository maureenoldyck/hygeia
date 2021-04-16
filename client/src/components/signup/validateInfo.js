


const validateInfo = (values) => {
  let errors = {};

  fetch("https://hygeia-test.herokuapp.com/api/register", {
      method: 'POST',
      body: JSON.stringify({
        email: values.email
      }),
      headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json; charset=UTF-8'
      },
      credentials: 'include', 
referrerPolicy: 'origin',
mode: 'cors',
referrer: document.location.origin 
  })
  .then(res => res.json())
  
  .then((res) => {
      if (res.userExists === true) {
        errors.email = 'Email already in use!';
      }
      console.log(res)
  })
  .catch((err) => {
    console.log(err)
})


  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;

}
export default validateInfo;