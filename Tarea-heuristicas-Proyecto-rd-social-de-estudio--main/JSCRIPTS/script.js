// Guardamos las coordenadas donde el usuario hizo clic
        let xClic = 0;
        let yClic = 0;

        // 1. Abre el menú cuando se da clic en el corcho
        function abrirMenuNota(evento) {
            // Verifica que el clic sea en el tablero y no en una nota existente
            if (evento.target.id !== 'tablero-corcho') return;

            xClic = evento.clientX;
            yClic = evento.clientY;

            let menu = document.getElementById('menu-opciones');
            menu.style.left = xClic + 'px';
            menu.style.top = yClic + 'px';
            menu.style.display = 'block'; // Muestra el menú
        }

        // 2. Crea la nota en la posición del clic
        function crearNota(titulo, contenido) {
            // Oculta el menú
            document.getElementById('menu-opciones').style.display = 'none';
            
            // Crea un nuevo elemento tipo DIV para la nota
            let nuevaNota = document.createElement('div');
            nuevaNota.className = 'nota-postit';
            document.getElementsByClassName('nota-postit').draggable;
            nuevaNota.draggable ;
            nu
                
            };
            // Posiciona la nota centrada donde se hizo clic
            nuevaNota.style.left = (xClic - 70) + 'px';
            nuevaNota.style.top = (yClic - 70) + 'px';

            //nuevaNota.style.left = (xClic - 90) + 'px';
            //nuevaNota.style.top = (yClic - 90) + 'px';/

            // Contenido visual dentro de la nota
            nuevaNota.innerHTML = `
                <div class="titulo-nota">${titulo}</div>
                <div class="texto-nota">${contenido}</div>
                <div class="boton-ampliar">🔍</div>
            `;

            // Configura la acción al hacer clic en la nota para verla en grande
            nuevaNota.onclick = function(evento) {
                evento.stopPropagation(); // Evita que se vuelva a abrir el menú del tablero
                document.getElementById('titulo-ampliado').innerText = titulo;
                document.getElementById('texto-ampliado').innerText = contenido;
                document.getElementById('ventana-ampliada').style.display = 'flex';
            };

            // Agrega la nota al tablero
            document.getElementById('tablero-corcho').appendChild(nuevaNota);
        

        // 3. Cierra la ventana ampliada
        function cerrarVentana() {
            document.getElementById('ventana-ampliada').style.display = 'none';
        }