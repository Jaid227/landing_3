
document.getElementById("miFormulario").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("mensaje").innerText = "Enviado correctamente ✅";
});
