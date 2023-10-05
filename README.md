# Prueba técnica Legit Health

    Es una app qué permite ver una lista de usuarios (12) con paginación, además permite hacer una falsa creacción de usuarios.
    La aplicación tambien puede acceder a los detalles de los usuarios. (Aunque por la Api, simplemente muestra su id. )

## Cómo ejecutar la aplicación

### Pre-requisitos

    Asegúrate de tener `node` y `npm` instalados en tu sistema.

### Instalación

    git clone https://github.com/isantipa/legit-health-typescritp
    cd legit-health-typescritp
    npm install
    npm start

    Esto iniciará la aplicación y, normalmente, se abrirá automáticamente en tu navegador. Si no es así, visita http://localhost:3000.

## Decisiones de diseño y arquitectura

    react-query: Elegí react-query para gestionar el estado del servidor ya que era uno de los requisitos de la prueba técnica, aún así es una forma robusta de gestionar el estado remoto.

    react-router-dom: Esta librería se utiliza para manejar la navegación entre las diferentes vistas o páginas de la aplicación. Facilita la definición y gestión de rutas.

    react-hook-form: Se utiliza para gestionar formularios y validaciones, haciendo el código más limpio y reduciendo la necesidad de gestionar manualmente el estado del formulario.

    Componentización: Adopté un enfoque modular para el desarrollo, creando componentes reutilizables siempre que fue posible. Esto resultó en tres páginas principales y varios componentes, algunos de los cuales están interconectados, como Header, Nav, y SocialIcons. Esta estructura modular permite una mayor flexibilidad, facilitando la extensión o reutilización de componentes en diferentes partes de la aplicación.

    Estilo CSS Convencional: Aunque inicialmente consideré el uso de Styled Components, decidí seguir un enfoque más convencional de CSS debido a la reciente migración a TypeScript. Los estilos se organizan en un archivo general estructurado por regiones, lo que garantiza una organización clara y una fácil navegabilidad.

    Uso de Fetch para API Calls: Siguiendo las indicaciones del documento de la prueba, utilicé el método nativo fetch para realizar llamadas a la API. Dado a las especificidades, lo que se hace en las llamadas de Api de UserListPage es llamar a los usuarios de determinada página.

    Estilo Visual: El estilo visual intenté que fuera acorde con las tipografías y colores de la página web de Legith Health.

## ✨ Funciones o funcionalidades adicionales

    Modo Oscuro: Agregué una opción para cambiar entre un tema claro y oscuro. Para mejorar la legibilidad en diferentes entornos de iluminación y mejorar la experiencia de usuario.

    Notificaciones: Implementé la biblioteca react-toastify para mejorar las alertas a la hora de la creación de exitosa de nuevos usuarios.

    RRSS: Agregué los iconos de las redes sociles de Legit Health en el Nav.

    ReturnButton: Implementé un botón de retorno (ReturnButton) que permite a los usuarios regresar a la página anterior exacta en la que estaban desde la página del detalle de usuario. Esta función mejora la navegación, especialmente cuando un usuario ha navegado profundamente a través de varias páginas de usuarios.

    Redirección tras Creación: Tras el exitoso registro de un nuevo usuario, la aplicación automáticamente redirige al usuario a la primera página de la lista de usuarios. Esto proporciona una retroalimentación instantánea sobre la creación.

    Spinner Personalizado: Con el fin de proporcionar retroalimentación visual durante las cargas de página o mientras se esperan datos, integré un spinner personalizado. Este spinner ha sido diseñado siguiendo los colores y la estética de "Legit Health", ofreciendo una experiencia de carga más atractiva y coherente que un simple mensaje de "Loading".

    Mejoras de Diseño CSS: Realicé numerosas optimizaciones y personalizaciones en el diseño usando CSS. Desde ajustes en el espaciado, elección de colores, hasta transiciones suaves, todo ha sido meticulosamente implementado para ofrecer una experiencia visualmente agradable y cohesiva para el usuario.
