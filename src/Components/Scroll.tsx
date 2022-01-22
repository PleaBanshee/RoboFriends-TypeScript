type Props = {
    children?: React.ReactNode // optional, 
}

const Scroll = (props: Props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;