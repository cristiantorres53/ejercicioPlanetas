let nombrePlanetas = ["tierra", "marte", "jupiter"];
let distancia = [6,3, "67"]
const tamaño = []

for (let i = 0; i < nombrePlanetas.length; i++) {
    const planeta = nombrePlanetas[i];
    console.log(nombrePlanetas[i]);
}

distancia.forEach(key => {
    if(key == '5'){
        console.log("se encontro la distancia")
    }
    else{
        console.log("no se encontro la distancia");
    }
});