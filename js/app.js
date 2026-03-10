// Lógica para mostrar mensajes en consola demostrando buenas prácticas
document.addEventListener('DOMContentLoaded', () => {
    console.log("%cSYSTEM::INIT", "color: #39ff14; font-weight: bold; font-size: 14px;");
    console.log("%cUnidad 4: Modelos de Colaboración Cargada.", "color: #00f0ff;");
    
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navegando a: ${e.target.innerText}`);
        });
    });
});
