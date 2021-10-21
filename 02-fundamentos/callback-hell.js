const empleados = [
    {
        id: 1,
        nombre: 'Jose'
    },
    {
        id: 2,
        nombre: 'Emerson'
    },
    {
        id: 3,
        nombre: 'Angelo'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
    if (empleado) {
        callback( null, empleado );       
    }else{
        callback( `Empleado con id ${id} no existe` );
    }   
}
// ? = Null Check Operator
const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id )?.salario;
    if (salario) {
        callback( null, salario );       
    }else{
        callback( `Salario con id ${id} no existe` );
    }   
}

// console.log( getEmpleado( 3 ) );

getEmpleado( 3, (err, empleado ) => {
    if (err) {
        return console.log(err);
    }
    // console.log(empleado.nombre);
    getSalario( 3, (err, salario ) => {
        if (err) {
            return console.log(err);
        }
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })
})

getSalario( 10, (err, salario ) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario.salario);
})



