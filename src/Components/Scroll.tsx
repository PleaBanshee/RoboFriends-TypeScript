// type is similar to an interface
type Props = {
    children?: React.ReactNode // optional, updates nodes on DOM
}

const Scroll = (props: Props) => {
    return (
        <div style={{overflowY: 'scroll', border: '2px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;