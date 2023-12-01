document.addEventListener("DOMContentLoaded", function() {

  var lenguajesDeProgramacion = [
    {
      nombre: "JavaScript",
      caracteristicaPrincipal: "Es un lenguaje de script del lado del cliente.",
      breveDescripcion: "Ampliamente utilizado para el desarrollo web y compatible con la mayoría de los navegadores."
    },
    {
      nombre: "Python",
      caracteristicaPrincipal: "Es un lenguaje de programación de alto nivel.",
      breveDescripcion: "Versátil y fácil de aprender, utilizado en desarrollo web, análisis de datos, inteligencia artificial, entre otros."
    },
    {
      nombre: "Java",
      caracteristicaPrincipal: "Es un lenguaje de programación multiplataforma.",
      breveDescripcion: "Utilizado en aplicaciones empresariales, desarrollo de Android y sistemas embebidos."
    },
    {
      nombre: "C#",
      caracteristicaPrincipal: "Es un lenguaje de programación orientado a objetos.",
      breveDescripcion: "Desarrollado por Microsoft, utilizado en desarrollo de software para Windows y aplicaciones web."
    },
    {
      nombre: "Ruby",
      caracteristicaPrincipal: "Es un lenguaje de programación interpretado.",
      breveDescripcion: "Con enfoque en la simplicidad y la productividad, utilizado en desarrollo web con el framework Ruby on Rails."
    },
    {
      nombre: "Swift",
      caracteristicaPrincipal: "Lenguaje de programación de Apple para iOS y macOS.",
      breveDescripcion: "Optimizado para el desarrollo de aplicaciones móviles en la plataforma Apple."
    },
    {
      nombre: "Kotlin",
      caracteristicaPrincipal: "Lenguaje de programación moderno para aplicaciones Android.",
      breveDescripcion: "Compatible con Java y preferido por muchos desarrolladores de Android."
    },
    {
      nombre: "TypeScript",
      caracteristicaPrincipal: "Es un superconjunto tipado de JavaScript.",
      breveDescripcion: "Añade tipado estático opcional y otras características a JavaScript."
    },
    {
      nombre: "PHP",
      caracteristicaPrincipal: "Lenguaje de programación del lado del servidor.",
      breveDescripcion: "Ampliamente utilizado para el desarrollo web y la creación de aplicaciones dinámicas en el servidor."
    },
    {
      nombre: "Go",
      caracteristicaPrincipal: "Lenguaje de programación compilado y concurrente.",
      breveDescripcion: "Desarrollado por Google, diseñado para ser eficiente y escalable en sistemas distribuidos."
    },
    {
      nombre: "Rust",
      caracteristicaPrincipal: "Lenguaje de programación de sistemas con un enfoque en la seguridad.",
      breveDescripcion: "Diseñado para proporcionar rendimiento sin sacrificar la seguridad de la memoria."
    },
    {
      nombre: "Scala",
      caracteristicaPrincipal: "Lenguaje de programación multiparadigma.",
      breveDescripcion: "Combina programación funcional y orientada a objetos, compatible con la máquina virtual de Java."
    },
    {
      nombre: "R",
      caracteristicaPrincipal: "Lenguaje y entorno de programación para estadísticas y gráficos.",
      breveDescripcion: "Ampliamente utilizado en la ciencia de datos y el análisis estadístico."
    },
    {
      nombre: "Perl",
      caracteristicaPrincipal: "Lenguaje de programación interpretado.",
      breveDescripcion: "Utilizado para scripting, desarrollo web, y manipulación de texto."
    },
    {
      nombre: "Haskell",
      caracteristicaPrincipal: "Lenguaje de programación funcional puro.",
      breveDescripcion: "Enfocado en la simplicidad, elegancia y programación declarativa."
    },
    {
      nombre: "Groovy",
      caracteristicaPrincipal: "Lenguaje de programación dinámico para la plataforma Java.",
      breveDescripcion: "Diseñado para mejorar la productividad y ser compatible con Java."
    },
    {
      nombre: "Dart",
      caracteristicaPrincipal: "Lenguaje de programación desarrollado por Google.",
      breveDescripcion: "Utilizado en el desarrollo de aplicaciones web y móviles con el framework Flutter."
    },
    {
      nombre: "Objective-C",
      caracteristicaPrincipal: "Lenguaje de programación utilizado en el desarrollo de aplicaciones para iOS y macOS.",
      breveDescripcion: "Antecesor de Swift en el desarrollo de aplicaciones de Apple."
    },
    {
      nombre: "COBOL",
      caracteristicaPrincipal: "Lenguaje de programación diseñado para el procesamiento empresarial de datos.",
      breveDescripcion: "Aún utilizado en sistemas heredados y aplicaciones empresariales."
    }
  ];

  let palabraCorrecta = palabraAleatoria(lenguajesDeProgramacion);
  let intentosRestantes = 3;

  const pista = document.getElementById("pista");
  const pista2 = document.getElementById("pista2");
  const pista3 = document.getElementById("pista3");
  const iconoPista2 = document.getElementById("span-clue2");
  const iconoPista3 = document.getElementById("span-clue3");
  const formulario = document.getElementById("juegoForm");
  const palabraUsuarioInput = document.getElementById("palabraUsuario");
  const respuestaTexto = document.getElementById("respuesta");
  const reiniciarBtn = document.getElementById("new-try");
  const primerIntentoImg = document.getElementById("first-failed-image");
  const segundoIntentoImg = document.getElementById("second-failed-image");
  const tercerIntentoImg = document.getElementById("third-failed-image");
  const ganadorImg = document.getElementById("winner-image");
  
  reiniciarBtn.style.display = "none";  
  primerIntentoImg.style.display = "none";
  segundoIntentoImg.style.display = "none";
  tercerIntentoImg.style.display = "none";
  ganadorImg.style.display = "none";
  mostrarPista();

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const palabraUsuario = palabraUsuarioInput.value.toLocaleLowerCase();

    if (palabraUsuario === palabraCorrecta) {
      respuestaTexto.textContent = "Felicidades! has adivinado."
      deshabilitaFormulario();    
      mostrarReiniciarBtn();  
      primerIntentoImg.style.display = "none";
      segundoIntentoImg.style.display = "none"; 
      tercerIntentoImg.style.display = "none";
      ganadorImg.style.display = "block";
      
    } else {
      intentosRestantes--;
      
      if(intentosRestantes === 2) {
        respuestaTexto.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos`;
        mostrarCaracteristicaPrincipal(lenguajesDeProgramacion, palabraCorrecta);
        primerIntentoImg.style.display = "block";
      } else if (intentosRestantes === 1) {
        respuestaTexto.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos`;
        mostrarDescripcion(lenguajesDeProgramacion, palabraCorrecta);
        primerIntentoImg.style.display = "none";
        segundoIntentoImg.style.display = "block";        
      } 
      
      else {
        respuestaTexto.textContent = `Lo siento, has agotado tus intentos. La palabra correcta era "${palabraCorrecta}".`
        primerIntentoImg.style.display = "none";
        segundoIntentoImg.style.display = "none"; 
        tercerIntentoImg.style.display = "block";
        deshabilitaFormulario();
        mostrarReiniciarBtn();
        
      }
    }
  });  

  function palabraAleatoria(lenguajesDeProgramacion) {
    var indiceAleatorio = Math.floor(Math.random() * lenguajesDeProgramacion.length);
    return lenguajesDeProgramacion[indiceAleatorio].nombre.toLocaleLowerCase();
  }

  function mostrarPista(){    
    pista.textContent = `Pista 1: El lenguaje tiene ${palabraCorrecta.length} letras`    
  }

  function mostrarCaracteristicaPrincipal(lenguajes, nombreLenguaje) {
    var lenguajeEncontrado = lenguajes.find(function(lenguaje) {
      return lenguaje.nombre.toLocaleLowerCase() === nombreLenguaje;
    });

    if (lenguajeEncontrado) {
      pista2.textContent =`Pista 2: ${lenguajeEncontrado.caracteristicaPrincipal}`;
      iconoPista2.textContent = "🔎";
    }
  }  

  function mostrarDescripcion(lenguajes, nombreLenguaje) {
    var lenguajeEncontrado = lenguajes.find(function(lenguaje) {
      return lenguaje.nombre.toLocaleLowerCase() === nombreLenguaje;
    });

    if (lenguajeEncontrado) {
      pista3.textContent =`Pista 3: ${lenguajeEncontrado.breveDescripcion}`;
      iconoPista3.textContent = "🔎";
    }
  }
  
  function deshabilitaFormulario(){
    palabraUsuarioInput.disabled = true;
    formulario.querySelector("input[type='submit']").disabled = true;
  }

  reiniciarBtn.addEventListener("click", function() {
    reiniciarJuego();
  });

  function reiniciarJuego() {    
    palabraUsuarioInput.disabled = false;
    formulario.querySelector("input[type='submit']").disabled = false;
    respuestaTexto.textContent = "";
    pista.textContent = "";
    pista2.textContent = "";
    pista3.textContent = "";
    iconoPista2.textContent = ""
    iconoPista3.textContent = ""
    palabraUsuarioInput.value = "";
    reiniciarBtn.style.display = "none";
    primerIntentoImg.style.display = "none";
    segundoIntentoImg.style.display = "none";
    tercerIntentoImg.style.display = "none";
    ganadorImg.style.display = "none";
    const nuevaPalabraCorrecta = palabraAleatoria(lenguajesDeProgramacion);
    palabraCorrecta = nuevaPalabraCorrecta;    
    intentosRestantes = 3;
    mostrarPista();
  }

  function mostrarReiniciarBtn() {
    reiniciarBtn.style.display = "block"; // Muestra el botón de reinicio
  }

});
