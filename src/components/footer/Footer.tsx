type footerProps = {
    name: string,
    number: number
}
const Footer = (props: footerProps) => {
    return (
        <div>
            <h2>
                {props.name} {props.number}
            </h2>
        </div>
    );
};

export default Footer;