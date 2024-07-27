function Button(props) {
    return (
        <button className="w-full h-10 bg-blue-600 text-white rounded mt-2" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default Button;
