'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import fbIcon from '../components/images/fb icon.ico';
import twitterIcon from '../components/images/twitter icon.png';
import gmailIcom from '../components/images/gmail icon.ico';
import { Inputs } from '../components/input/input';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);

    function login() {
        email == '' || password == '' ? alert('error') : alert('registered!');
    };
    
    return <div className={styles.cont}>
                <div className={styles.box}>
                    <h1>LOG IN</h1>
                    <Inputs type='email' 
                        placeholder='Username Or Email Address'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <Inputs type='password' 
                        placeholder='Password'
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <Inputs type='checkbox'
                                className={styles.checkbox} 
                                checked={checked}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked)}
                            />
                            <p>Remember Me</p>
                        </div>
                        <button className={styles.login}
                            onClick={login}
                        >Log In</button>
                    </div>
                    <Link href={'../forgetPassword'}>Forget Password?</Link>
                    <h2>Or sign up using</h2>
                    <div className={styles.otherOptions}>
                        <img src={fbIcon.src} />
                        <img src={twitterIcon.src} />
                        <img src={gmailIcom.src} />
                    </div>
                    <h2>Don't have an account?</h2>
                    <Link href={'../createAccount'} >Create account!</Link>
                </div>
            </div>
}