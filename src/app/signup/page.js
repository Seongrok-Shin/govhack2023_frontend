"use client";

import { auth } from "../../../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation";

import '../main.scss'
import 'bootstrap/dist/css/bootstrap.css'


export default function signUp() {

    const [user, setUser] = useState({ email: '', password: '' })
    const router = useRouter()

    const signUp = () => {
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed Up
                const user = userCredential.user;
                router.push("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const signUpPage = () =>{
        router.push("/signup")
    }
    return (
        <form className="position-absolute top-50 start-50 translate-middle">
            <h1 className="text-center source_sans py-3 text-success">GREEN KIWI</h1>
            <div className="form-group">
                <input id="email" type="text" placeholder="email" className="form-control"
                    onChange={event => setUser({ ...user, email: event.target.value })} />
            </div>
            <div className="form-group py-3">
                <input id="password" type="password" placeholder="**********" className="form-control"
                    onChange={event => setUser({ ...user, password: event.target.value })} />
            </div>
            <div className="form-group d-flex justify-content-center py-5">
                <button className="btn btn-success px-5" type="button" onClick={signUp}>
                    Register
                </button>
            </div>
        </form>
    )
}