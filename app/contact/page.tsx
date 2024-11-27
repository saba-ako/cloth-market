'use client'

import styles from './page.module.css';
import img from '../components/images/contact img.avif';
import { use, useState } from 'react';
import { Inputs } from '../components/input/input';

export default () => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    function submit() {
        email == '' || firstName == '' || lastName == '' ? alert('error') : alert('completed!');
    };

    return <div className={styles.cont}>
                <div>
                    <h1>CONTACT</h1>
                    <p>visit our store<br />
                        Address: 500 Terry Francine Street<br />
                        San Francisco, CA 94158<br />
                        Phone: 123-456-7890<br />   
                        Email: info@my-domain.com
                    </p>
                    <div className={styles.message}>
                        <Inputs type='text' 
                            placeholder='First Name'
                            value={firstName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                        />
                        <Inputs type="text" 
                            placeholder='Last Name*'
                            value={lastName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}  
                        />
                        <Inputs type="email" 
                            placeholder='Email*'
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
                        />
                        <textarea placeholder='Type your message here...'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                </div>
                <img src={img.src} width={'60%'}/>
            </div>
}