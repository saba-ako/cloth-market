import styles from './links.module.css';
import Link from 'next/link';

type Props = {
    title: string;
    href: any;
}

export const Links = (props: Props) => {

    return <Link href={props.href} className={styles.btn} >{props.title}</Link>
}