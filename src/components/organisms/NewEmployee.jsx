import Text from "../atoms/Text";
import Field from "../molecules/Field";
import Button from "../atoms/Button";

function NewEmployee(props) {
    return (
        <div className="w-60 bg-slate-600 flex flex-col justify-center p-4 rounded shadow-lg">
            <Text text="Agregar nuevo empleado" />
            <Field text="Nombre:" reference={props.referenceNombre} />
            <Field text="Edad:" reference={props.referenceEdad} />
            <Field text="Género:" reference={props.referenceGenero} />
            <Button text="Guardar" onClick={props.onClick} />
        </div>
    );
}

export default NewEmployee;
