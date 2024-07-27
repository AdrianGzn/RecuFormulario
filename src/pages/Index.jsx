import NewEmployee from "../components/organisms/NewEmployee";
import ShowEmployee from "../components/organisms/ShowEmployee";
import { useState, useRef } from "react";

function Index() {
    const [employees, setEmployees] = useState([]);
    const countId = useRef(0);
    const nombre = useRef("");
    const edad = useRef("");
    const genero = useRef("");

    const addEmployee = () => {
        countId.current++;
        const newEmployee = {
            id: countId.current,
            nombre: nombre.current.value,
            edad: edad.current.value,
            genero: genero.current.value
        };

        setEmployees([...employees, newEmployee]);
    };

    return (
        <div className="w-full min-h-full bg-slate-700 flex justify-center items-center p-4">
            <div className="w-3/4 min-h-96 flex justify-center flex-wrap gap-4">
                <NewEmployee 
                    onClick={addEmployee} 
                    referenceNombre={nombre} 
                    referenceEdad={edad} 
                    referenceGenero={genero} 
                />
                <ShowEmployee employees={employees} />
            </div>
        </div>
    );
}

export default Index;
