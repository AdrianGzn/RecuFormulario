import Input from "../atoms/Input";
import Text from "../atoms/Text";

function Field(props) {
    return (
        <div className="mb-4">
            <Text text={props.text} />
            <Input reference={props.reference} />
        </div>
    );
}

export default Field;
