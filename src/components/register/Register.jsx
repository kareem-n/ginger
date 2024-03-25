import { useDispatch, useSelector } from 'react-redux'
import Terminal from './Terminal';
import { setLoading, setRegisterInputFocus, setUser } from '../../redux/slices/GlobalStatesSlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/config';
import {  useState } from 'react';

import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';



function Register() {


    

    const nav = useNavigate();

    const [authError, setAuthError] = useState();


    const { topNavbarHeight } = useSelector(state => state.global);


    const dispatch = useDispatch();



    const validationSchema = Yup.object().shape({
        name: Yup.string().min(4, "name should be 3").required("name should not be empty"),
        email: Yup.string().email("email is not valid!").required("email is required"),
        password: Yup.string().min(6, "password should at least 4 chars").required("password is required"),
        phone: Yup.number().required("phone number is required")
    })


    const handleChange = (e, setValues) => {
        setValues(e.target.name, e.target.value);



        dispatch(setRegisterInputFocus({
            type: e.target.name,
            value: e.target.value,
        }))

    }



    const handleSubmit = (data) => {

        dispatch(setLoading(true));
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(response => {

                localStorage.setItem("userAccessToken", response.user.accessToken);
                dispatch(setUser(response.user.uid));
                dispatch(setLoading(false));
                nav("/products");

            })
            .catch(error => {
                dispatch(setLoading(false));
                if (error.code.includes("email-already")) {
                    setAuthError("Email is already registered");
                }
                console.log(error.code);
            })

        // console.log(data);
    }

    const handleFocus = (e) => {


        e.target.previousElementSibling.style.backgroundColor = 'red';

        dispatch(setRegisterInputFocus({
            type: e.target.name,
            active: true,
        }))

        if (!e.target.classList.contains("border-red-500")) {
            e.target.classList.add("theme-border-color");
        }

        e.target.previousElementSibling.style.backgroundColor = 'rgb(24, 27, 25)';
        e.target.previousElementSibling.classList.add("z-10", "p-1", "theme-text-color");
        e.target.previousElementSibling.classList.replace("top-1/2", "top-0");
        e.target.previousElementSibling.classList.replace("text-lg", "text-sm");
    }



    const handleBlur = (e, setInputTouched) => {


        console.log(0);

        dispatch(setRegisterInputFocus({
            type: e.target.name,
            active: false,
        }))



        setInputTouched(e.target.name, true);
        if (e.target.value !== '') return;

        if (!e.target.classList.contains("border-red-500")) {
            e.target.classList.remove("theme-border-color");
        }


        e.target.previousElementSibling.style.backgroundColor = 'rgb(24, 27, 25)';
        e.target.previousElementSibling.classList.remove("z-10", "p-1", "theme-text-color");
        e.target.previousElementSibling.classList.replace("top-0", "top-1/2");
        e.target.previousElementSibling.classList.replace("text-sm", "text-lg");
        e.target.previousElementSibling.classList.add("text-gray-300");
    }

   
    const googleSign = () => {

        console.log(1);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                localStorage.setItem("userAccessToken", user.accessToken );

                dispatch(setUser(user));
                nav("/products");
                
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                // ...
            });


    }

        return (
        <div
            style={{
                marginTop: topNavbarHeight + 'px'
            }}
            className='py-20 container mx-auto'
        >
            <div className="flex items-center gap-x-20">
                <div className="w-1/2">
                    <Terminal />
                </div>

                <div className=" w-1/2 shadow-2xl py-10 border theme-border-color rounded-2xl">


                    <h2 className='protest-font text-2xl md:text-5xl text-center theme-text-color'>
                        Join us
                    </h2>
                    <p className='text-center my-3 text-gray-300'>
                        Create your account on GINGER NOW!
                    </p>

                    {
                        authError && <div className="bg-red-500 px-5 py-3 text-center mb-5">
                            {authError}
                        </div>
                    }




                    <div className="flex justify-center ">
                        <div className="w-2/3 ">

                            <button
                                onClick={googleSign}
                                className='mb-5 bg-gray-600 hover:bg-gray-700  text-gray-200 cursor-pointer w-full py-3 rounded-md flex items-center justify-center'>
                                <FcGoogle size={23} className='mr-2' /> sign up with GOOGLE
                            </button>

                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    password: '',
                                    phone: '',
                                }}

                                validationSchema={validationSchema}

                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(false);
                                    handleSubmit(values);
                                }}
                            >

                                {
                                    ({ values, touched, errors, setFieldValue, handleSubmit, setFieldTouched }) => (

                                        <form
                                            className='flex flex-col gap-y-5 z-50'
                                            onSubmit={handleSubmit}
                                        >


                                            <div className="relative rounded-md ">

                                                <label
                                                    className={`transition-all absolute ml-4 top-1/2 -translate-y-1/2 text-md`}
                                                    htmlFor="name"
                                                >


                                                    {
                                                        errors.name && touched.name ? <span className='text-red-500'>
                                                            {errors.name}
                                                        </span> : <span>
                                                            Name
                                                        </span>
                                                    }

                                                </label>
                                                <input
                                                    name='name'
                                                    id='name'
                                                    value={values.name}
                                                    type="text"
                                                    className={`w-full outline-none px-4 py-3 rounded-md border ${errors.name && touched.name ? ' border-red-500 ' : touched.name ? ' theme-border-color ' : ''} bg-transparent relative z-0`}
                                                    onChange={
                                                        e => handleChange(e, setFieldValue)
                                                    }

                                                    onFocus={
                                                        e => handleFocus(e)
                                                    }

                                                    onBlur={
                                                        e => handleBlur(e, setFieldTouched)

                                                    }

                                                />
                                            </div>

                                            <div className="relative rounded-md ">
                                                <label
                                                    className='transition-all absolute ml-4 top-1/2 -translate-y-1/2 text-md'
                                                    htmlFor="email"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    name='email'
                                                    id='email'
                                                    value={values.email}
                                                    type="text"
                                                    className='w-full outline-none px-4 py-3 rounded-md border bg-transparent relative z-0'
                                                    onChange={e => handleChange(e, setFieldValue)}

                                                    onFocus={
                                                        (e) => {
                                                            handleFocus(e);
                                                        }

                                                    }

                                                    onBlur={
                                                        e => handleBlur(e, setFieldTouched)

                                                    }

                                                />
                                            </div>

                                            <div className="relative rounded-md ">

                                                <label
                                                    kk="true"
                                                    className={`transition-all absolute ml-4 top-1/2 -translate-y-1/2 text-md`}
                                                    htmlFor="password"
                                                >


                                                    {
                                                        errors.password && touched.password ? <span className='text-red-500'>
                                                            {errors.password}
                                                        </span> : <span>
                                                            password
                                                        </span>
                                                    }

                                                </label>
                                                <input
                                                    name='password'
                                                    id='password'
                                                    value={values.password}
                                                    type="password"
                                                    className={`w-full outline-none px-4 py-3 rounded-md border ${errors.password && touched.password ? ' border-red-500 ' : touched.password ? ' theme-border-color ' : ''} bg-transparent relative z-0`}
                                                    onChange={
                                                        e => handleChange(e, setFieldValue)
                                                    }

                                                    onFocus={
                                                        e => handleFocus(e)
                                                    }

                                                    onBlur={
                                                        e => handleBlur(e, setFieldTouched)

                                                    }

                                                />
                                            </div>


                                            <div className="relative rounded-md ">
                                                <label
                                                    className='transition-all absolute ml-4 top-1/2 -translate-y-1/2 text-md'
                                                    htmlFor="phone"
                                                >
                                                    phone number
                                                </label>
                                                <input
                                                    name='phone'
                                                    id='phone'
                                                    value={values.phone}
                                                    type="text"
                                                    className='w-full bg-red-500 outline-none px-4 py-3 rounded-md border bg-transparent relative z-0'
                                                    onChange={e => handleChange(e, setFieldValue)}

                                                    onFocus={
                                                        handleFocus
                                                    }

                                                    onBlur={
                                                        e => handleBlur(e, setFieldTouched)

                                                    }

                                                />
                                            </div>



                                            <button type='submit' className='main-bg-color main-bg-color-hover py-2 '>Reigster</button>


                                        </form>

                                    )

                                }



                            </Formik>

                        </div>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default Register