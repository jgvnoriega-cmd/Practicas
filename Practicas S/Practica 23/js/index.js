console.log("Hola Mundo");
let personas = ["Ana", "Luis", "Carlos", "Marta"];
console.log("Lista de personas:", personas);

console.log("El alumno reprobado es:", personas[2]);

personas.push("Angel");
console.log("Nueva lista de personas:", personas);

personas[1] = "Pedro";
console.log("Lista actualizada de personas:", personas);

personas.pop();
console.log("Lista después de eliminar el último elemento:", personas);

personas.shift();
console.log("Lista después de eliminar el primer elemento:", personas);

// Agregamos imágenes para Pedro, Carlos y Marta
const imagenes = {
    "Pedro": "https://randomuser.me/api/portraits/men/32.jpg",
    "Carlos": "https://randomuser.me/api/portraits/men/45.jpg",
    "Marta": "https://randomuser.me/api/portraits/women/44.jpg"
};

let lista = document.getElementById("lista");

for (let i = 0; i < personas.length; i++) {
    let li = document.createElement("li");

    // Crear imagen
    let img = document.createElement("img");
    img.style.width = "60px";
    img.style.height = "60px";
    img.style.borderRadius = "50%";
    img.style.marginRight = "10px";

    // Asignar imagen o genérica
    if (imagenes[personas[i]]) {
        img.src = imagenes[personas[i]];
    } else {
        img.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Imagen genérica
    }

    // Agregar nombre
    let nombre = document.createElement("span");
    nombre.textContent = personas[i];

    // Insertar imagen y texto
    li.appendChild(img);
    li.appendChild(nombre);
    lista.appendChild(li);
}

// Operaciones numéricas
let numero1 = 10, numero2 = 5;
let suma = numero1 + numero2;
console.log("La suma de", numero1, "y", numero2, "es:", suma);

// Mostrar resultado en el párrafo
let parrafo = document.getElementById("resultado");
parrafo.textContent = "La suma de " + numero1 + " y " + numero2 + " es: " + suma;
