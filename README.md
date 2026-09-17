# Navegador Circular 2026

Prueba local del navegador interactivo basado en la **Circular Inicio Ciclo Lectivo 2026** de la Provincia de Córdoba.

## Estructura

- `index.html` — interfaz principal.
- `styles.css` — estilos.
- `app.js` — navegación, búsqueda y renderizado.
- `procedimientos.json` — base de situaciones y procedimientos.

No utiliza IA, backend, base de datos ni dependencias externas.

## Cómo probarlo

### Opción recomendada: Python

Con Python instalado:

```bash
cd circular-2026-navegador
python -m http.server 8000
```

Después abrir:

http://localhost:8000

### VS Code

También se puede usar la extensión Live Server.

## Funcionamiento

1. La pantalla inicial muestra las categorías.
2. Al entrar en una categoría aparecen las situaciones disponibles.
3. El usuario elige la situación.
4. Se muestra el procedimiento, dónde hacerlo, contacto, plazos y fuente cuando esos datos están disponibles.
5. El buscador permite encontrar situaciones mediante palabras clave.
6. La búsqueda no decide una respuesta por IA: muestra coincidencias y el usuario elige el camino.

## Fuente

`procedimientos.json` fue construido a partir de la Circular Inicio Ciclo Lectivo 2026 proporcionada para este proyecto. Cuando la Circular remite a otra norma o instructivo sin detallar un procedimiento, el sistema conserva esa remisión y no inventa pasos.
