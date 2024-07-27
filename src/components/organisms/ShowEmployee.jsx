import Card from "../molecules/Card";

function ShowEmployee(props) {
    const employees = props.employees;

    return (
        <div className="bg-slate-600 w-full flex flex-wrap gap-4 p-4 rounded shadow-lg">
            {employees.map(employee => (
                <Card 
                    key={employee.id} 
                    id={employee.id} 
                    name={employee.nombre} 
                    age={employee.edad} 
                    gender={employee.genero} 
                />
            ))}
        </div>
    );
}

export default ShowEmployee;
