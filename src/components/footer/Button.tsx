type buttonProps = {
    name: string;
    className?: string;
}

const Button = (props: buttonProps) => {
    return (
        <div>
            <button className={props.className}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;