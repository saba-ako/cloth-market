'use client'

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    
    function changeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    };
    
    function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    };
    
    function changeChecking(e: React.ChangeEvent<HTMLInputElement>) {
        setChecked(e.target.checked);
    }
    
    function login() {
        console.log(email, password);
    };

    return <div className={styles.cont}>
                <div className={styles.box}>
                    <h1>LOG IN</h1>
                    <input type="email"
                            placeholder='Username or Email Address' 
                            className={styles.input} 
                            value={email}
                            onChange={changeEmail}
                    />
                    <input type="password" 
                            placeholder='Password' 
                            className={styles.input} 
                            value={password}
                            onChange={changePassword}
                    />
                    <div className={styles.inner}>
                        <div className={styles.left}>
                            <input type="checkbox" 
                                    className={styles.checkbox}
                                    checked={checked} 
                                    onChange={changeChecking}
                            />
                            <p>Remember Me</p>
                        </div>
                        <button className={styles.login}
                                onClick={login}
                        >Log In</button>
                    </div>
                    <Link href={'../forgetPassword'}>Forget Password?</Link>
                </div>
            </div>
}