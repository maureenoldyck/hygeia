import React, {useState}from 'react';
// import validateInfo from './validateInfo';

const showModal = () => {
    const modal = document.getElementById("loginModal");

    if (modal.className === "hidden") {
        modal.className += "block";
    } else {
        modal.className = "hidden";
    }
}



const SignupForm = ( ) => {
    
    const [emailRegister, setEmailRegister] = useState("");
    const [passwordRegister, setPasswordRegister] = useState("");
    const [passwordRegister2, setPasswordRegister2] = useState("");
    //const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');


        //======================================================================================//
        //                         Fetch API location + POST body-properties                    //
        //======================================================================================//
    
    const handleSubmit = (e) => {

        e.preventDefault();
        // const values = {
        //     email: emailRegister,
        //     password: passwordRegister,
        //     password2: passwordRegister2,
        // }
        // setErrors(validateInfo(values));

        fetch("https://hygeia-app.herokuapp.com/api/register", {
            method: 'POST',
            body: JSON.stringify({
                email: emailRegister,
                password: passwordRegister,
                password2: passwordRegister2
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
            console.log(res)
            if (res.email) {
                setSuccess('')
                setErrors({email: (res.email)});
            }

            if (res.password) {
                setSuccess('')
                setErrors({password: (res.password)});
            }

            if (res.password2) {
                setSuccess('')
                setErrors({password2: (res.password2)});
            }

            if (res.error) {
                setSuccess('')
                setErrors({email: (res.error)});
            }

            if (res.success) {
                setErrors('');
                setSuccess("Huray, your account has been created!");
            }


        })    
        .catch((err) => {
            console.log(err)
        })
        //TODO look up useEffect needed?
    }
        
    return (

        <div className="flex w-full mb-3 md:transform md:scale-90">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col w-full ml-32 text-2xl">
            {success && <p className="text-green-vrt mb-3">{success}</p>}
                <div>
                    <label className="mb-1 mr-2">Email</label>
                    <input type="email" name="email" value={emailRegister} onChange={(e) => {setEmailRegister(e.target.value)}} placeholder="Your Email ..." className="pl-2 py-2 mb-6 rounded-lg text-black"/>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label className="mb-1 mr-2">Password</label>
                    <input value={passwordRegister} onChange={(e) => {setPasswordRegister(e.target.value)}} type="password" name="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg text-black"/>
                    {errors.password && <p className="text-red-500"> {errors.password}</p>}
                </div>

                <div>
                    <label className="mb-1 mr-2">Confirm password</label>
                    <input value={passwordRegister2} onChange={(e) => {setPasswordRegister2(e.target.value)}} type="password" name="password2" placeholder="Confirm your password ..." className="pl-2 py-2 rounded-lg text-black"/>
                    {errors.password2 && <p className="text-red-500">{errors.password2}</p>}
                </div>

                <div className="flex flex-row items-center">
                    <input type="checkbox" className="w-5 h-5 mr-2" />
                    <label> Remember me next time too!</label>
                </div>

                <div className="flex flex-row my-6 justify-start">
                    <button className="bg-blue-naval rounded-br-lg rounded-tl-lg p-3 mr-5 hover:underline" type='submit'>
                        Sign up
                    </button>
                   
                </div>
                <span className="">
                    <button onClick={showModal}> Already have an account? Login here </button>
                </span>
            </form>
        </div>
    );
};
export default SignupForm;