'use client';

import { auth } from '../../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
import '../main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { ENVIRONMENT, FEATURE_FLAGS } from '../env';

export default function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const router = useRouter();

    console.log(
        'FEATURE_FLAGS.CanLoginBeSkipped? ' + FEATURE_FLAGS.CanLoginBeSkipped
    );
    if (FEATURE_FLAGS.CanLoginBeSkipped) {
        forceLoginWithDefaultUser(router);
    }

    const loginSubmit = () => {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                router.push('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    const signUpPage = () => {
      router.push("/signup")
    }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form className="px-3 pt-5 w-100">
        <h1 className="text-center source_sans py-5 text-success">GREEN KIWI</h1>
        <div className="form-group">
          <input
            id="email"
            type="text"
            placeholder="example@email.com"
            className="form-control"
            onChange={(event) => setUser({ ...user, email: event.target.value })}
          />
        </div>
        <div className="form-group py-3">
          <input
            id="password"
            type="password"
            placeholder="Your password"
            className="form-control"
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
          />
        </div>
        <div className="form-group d-flex justify-content-center">
          <button
            className="btn btn-success d-block w-100 p-2"
            type="button"
            onClick={loginSubmit}
          >
            Sign In
          </button>
        </div>
        <div className="fs-6 pt-3 text-center">
          <Link href="/forgot">Forgot password?</Link>
        </div>
        <div className="form-group d-flex justify-content-center py-5">
          <button
            className="btn btn-success d-block w-100 p-2 px-5"
            type="button"
            onClick={signUpPage}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

const forceLoginWithDefaultUser = (router) => {
    signInWithEmailAndPassword(
        auth,
        ENVIRONMENT.DefaultUserEmail,
        ENVIRONMENT.DefaultUserPass
    )
        .then((userCredential) => {
            router.push('/');
        })
        .catch(console.error);
};
