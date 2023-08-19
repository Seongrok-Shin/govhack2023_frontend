"use client";

import { auth } from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation";

import Link from "next/link";
import '../main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { ENVIRONMENT, FEATURE_FLAGS } from "../env";

export default function Login() {

    const [user, setUser] = useState({ email: '', password: '' })
    const router = useRouter()

    if (FEATURE_FLAGS.CanLoginBeSkipped) {
        forceLoginWithDefaultUser(router);
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
            <div className="form-group d-flex justify-content-center">
                <button className="btn btn-success px-5" type="button" onClick={loginSubmit}>
                    Sign In
                </button>
            </div>
            <div className="fs-6 text-center">
                <Link href="/forgot">Forgot password?</Link>
            </div>
            <div className="form-group d-flex justify-content-center py-5">
                <button className="btn btn-success px-5" type="button" onClick={loginSubmit}>
                    Register
                </button>
            </div>
        </form>
    )
}

const forceLoginWithDefaultUser = (router) => {
    signInWithEmailAndPassword(auth, ENVIRONMENT.DefaultUserEmail, ENVIRONMENT.DefaultUserPass)
    .then((userCredential) => {
        router.push("/");
    })
    .catch(console.error);
}