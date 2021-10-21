
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


const imprimeHeroe = ( heroe ) => {
    //La desestructuración de arreglos es con llaves  
    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman','Batman'];

//La desestructuración de arreglos es con llaves cuadradas
const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);




