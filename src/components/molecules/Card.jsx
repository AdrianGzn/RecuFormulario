import Text from "../atoms/Text";

function Card(props) {
    return (
        <div className="w-48 min-h-32 mx-4 p-2 bg-slate-500 flex flex-col justify-start items-start rounded shadow-md mb-2">
            <Text text={`ID: ${props.id}`} />
            <Text text={`Nombre: ${props.name}`} />
            <Text text={`Edad: ${props.age}`} />
            <Text text={`Género: ${props.gender}`} />
        </div>
    );
}

export default Card;
