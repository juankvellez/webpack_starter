import '../css/componentes.css'; 

export const saludar= (nombre)=>{
    console.log("Creando etiqueta 1 en la panatalla");
    const h1= document.createElement('h1');
    h1.innerText= `Hola, ${nombre}, como estas?`;
    document.body.append(h1);
}