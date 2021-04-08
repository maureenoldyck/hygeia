import React, {useState}from 'react';
import validateInfo from './validateInfo';
import useForm from './useForm';

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
        const values = {
            email: emailRegister,
            password: passwordRegister,
            password2: passwordRegister2,
        }
        setErrors(validateInfo(values));

        fetch("http://localhost:5000/api/register", {
            method: 'POST',
            body: JSON.stringify({
                email: emailRegister,
                password: passwordRegister,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            },
            credentials: 'include', 
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            if (res.userExists == true) {
                setErrors({email: "Email already exists"});
                
            }

            if (res.success == true) {
                setSuccess("Account has been created!");
                
            }
        })
    }
        
    return (

        <div className="flex w-full mb-5 md:transform md:scale-90">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col w-full ml-32 text-2xl">
                <div>
                    <label className="mb-1">Email</label>
                    <input type="email" name="email" value={emailRegister} onChange={(e) => {setEmailRegister(e.target.value)}} placeholder="Your Email ..." className="pl-2 py-2 mb-6 rounded-lg text-black"/>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label className="mb-1">Password</label>
                    <input value={passwordRegister} onChange={(e) => {setPasswordRegister(e.target.value)}} type="password" name="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg text-black"/>
                    {errors.password && <p className="text-red-500"> {errors.password}</p>}
                </div>

                <div>
                    <label className="mb-1">Confirm password</label>
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
                {success && <p className="text-green-vrt">{success}</p>}
                <span className="">
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>
    );
};
export default SignupForm;