import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';


const SignupForm = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
      submitForm,
      validate
    );
  
    return (

        <div className="flex w-full mb-5 md:transform md:scale-90">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col w-full ml-32 text-2xl">
                <div>
                    <label className="mb-1">Email</label>
                    <input type="email" name="email" value={values.email} onChange={handleChange}placeholder="Your Email ..." className="pl-2 py-2 mb-6 rounded-lg text-black"/>
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>

                <div>
                    <label className="mb-1">Password</label>
                    <input value={values.password} onChange={handleChange} type="password" name="password" placeholder="Your password ..." className="pl-2 py-2 rounded-lg text-black"/>
                    {errors.password && <p className="text-red-500"> {errors.password}</p>}
                </div>

                <div>
                    <label className="mb-1">Confirm password</label>
                    <input value={values.password2} onChange={handleChange} type="password" name="password2" placeholder="Confirm your password ..." className="pl-2 py-2 rounded-lg text-black"/>
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
                    Already have an account? Login <a href='#'>here</a>
                </span>
            </form>
        </div>

        );
};

export default SignupForm;