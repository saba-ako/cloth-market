import styles from './input.module.css';

type Props = {
    type: string;
    placeholder?: string;
    value?: string;
    onChange?: any;
    checked?: boolean;
    className?: string;
}

export const Inputs = (props: Props) => {
    return <input type={props.type} 
                placeholder={props.placeholder}
                className={styles.input} 
            />
}