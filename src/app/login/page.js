"use client";

import { auth } from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.css'

export default function Login() {

    const [user, setUser] = useState({ email: '', password: '' })
    const router = useRouter()

    if (false) {
        signInWithEmailAndPassword(auth, "default@gmail.com", "default")
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const loginSubmit = () => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return (
        <form >
            <h1>GREEN KIWI</h1>
            <div className="form-group">
                <label className="form-label">
                    Email
                </label>
                <input id="email" type="text" placeholder="email" className="form-control"
                    onChange={event => setUser({ ...user, email: event.target.value })} />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input id="password" type="password" placeholder="**********" className="form-control"
                    onChange={event => setUser({ ...user, password: event.target.value })} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="button" onClick={loginSubmit}>
                    Sign In
                </button>
            </div>
            <div className="col">
                <a href="#!">Forgot password?</a>
            </div>
        </form>
    )
}
