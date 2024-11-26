'use client'

import { useState } from 'react';
import styles from './page.module.css';
import { Inputs } from '../components/input/input';

export default () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [surname, setSurname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function createAccount() {
        confirmPassword !== password || email == '' || password == '' || surname == '' ? alert('error') : alert(`email-${email},password-${password},surname-${surname}`);
    };

    return <div className={styles.cont}>
                <div className={styles.box}>
                    <h1>Create New Account</h1>
                    <Inputs type="email" 
                        placeholder='Email' 
                        value={email} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                    />
                    <Inputs type="text" 
                        placeholder='Surname' 
                        value={surname} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    />
                    <Inputs type="password" 
                        placeholder='Password' 
                        value={password} 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <Inputs type="password"
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                    />
                    <button onClick={createAccount}>CREATE ACCOUNT</button>
                </div>
            </div>
}