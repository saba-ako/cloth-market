'use client'

import styles from './page.module.css';
import img from '../components/images/contact img.avif';
import { useState } from 'react';

export default () => {

    const [value, setValue] = useState('');

    function submit() {
    };

    function onchange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
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
                        <input type="text" placeholder='First Name' value={value} onChange={onchange} />
                        <input type="text" placeholder='Last Name*'  />
                        <input type="email" placeholder='Email*'  />
                        <textarea placeholder='Type your message here...'></textarea>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                </div>
                <img src={img.src} width={'60%'}/>
            </div>
}