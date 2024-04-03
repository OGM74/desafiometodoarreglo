const nuevaTarea= document.querySelector('#nuevaTarea')
const todos = [{
    id: 1,
    titulo: "Estudiar matemáticas",
    estado: false
}, {
    id: 2,
    titulo: "Hacer la cama",
    estado: true

}, {
    id: 3,
    titulo: "Lavar la loza",
    estado: false
},]
const contenedorDeCards = document.querySelector(".body")
function mostrarTodos() {
    todos.forEach(
        (tarea) => {
            const nuevoDiv = document.createElement("div")
            nuevoDiv.classList.add("card")
            nuevoDiv.innerHTML = `
            <h3>${tarea.id}</h3>
            <h3>${tarea.titulo}</h3>
            `
            contenedorDeCards.appendChild(nuevoDiv)
        }
    )
}



const ultimaTarea = todos[todos.length - 1];
todos.push({
    id: ultimaTarea.id + 1,
    titulo: "Regar",
    estado: false
});

mostrarTodos()