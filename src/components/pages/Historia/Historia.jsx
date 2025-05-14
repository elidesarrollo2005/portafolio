import './Historia.css'
export function Historia(){

    return(

        <>
           <section className="container">
             <div className="row">
                <div className="col-12">
                    <h3>Bitacora de proyectos:</h3>
                    <hr />
                    <img src="../../../../src/assets/img/logotipo.jpg" alt="" 
                    className='img-fluid' />
                </div>
             </div>
           </section>

            <section className="container my-4">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/img/netflix.jpeg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>Proyecto Replica de Netflix</h2>
                        <p>
                        El proyecto Réplica de Netflix consistió en la creación de una interfaz web inspirada en la popular plataforma de streaming, con el objetivo de practicar y aplicar conocimientos fundamentales de desarrollo front-end. Durante el desarrollo, se utilizaron enlaces () estratégicamente ubicados en la barra de navegación y en tarjetas de películas para permitir la transición entre páginas, como el inicio, detalles de contenido y formularios. Los formularios fueron claves para simular el proceso de inicio de sesión y registro, permitiendo la interacción del usuario mediante campos de entrada y botones. Además, se implementaron grillas (grid y flexbox) para organizar visualmente el contenido en filas y columnas, facilitando una estructura ordenada y responsiva. Estas herramientas trabajaron de forma conjunta para lograr una navegación fluida y una experiencia visual coherente, emulando la sensación de estar en una plataforma real. Este proyecto fortaleció habilidades clave en HTML, CSS y navegación entre vistas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
            <div className="row">
                    <div className="col-12 col-md-4">
                       <h2>Flexbox</h2>
                       <p>
                        Flexbox es un modelo de diseño en CSS que permite distribuir y alinear elementos dentro de un contenedor de forma eficiente, incluso cuando su tamaño es desconocido o dinámico. Permite controlar la dirección, el orden y el espacio entre los elementos, tanto en filas como en columnas. También facilita el centrado horizontal y vertical, la distribución automática del espacio disponible, el ajuste a múltiples líneas y la alineación individual de cada ítem, todo con pocas líneas de código.

                        </p>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                       <img src="../../../../src/img/flexbox-css.png" alt=""  className='img-fluid' />
                    </div>
                </div>
            </section>

            <section className="container my-3">
            <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/img/maquetacion.webp" alt="" className='img-fluid'/>
                    </div>
                    <div className="col-12 col-md-8">
                        <h2>Maquetacion con html y css</h2>
                        <p>
                        El proyecto de Maquetación Web tuvo como propósito principal aprender y aplicar las técnicas esenciales para estructurar visualmente sitios web utilizando HTML y CSS. Durante el desarrollo, se trabajó en la creación de diseños responsivos y organizados mediante el uso de contenedores, secciones, columnas y filas. Se emplearon herramientas como Flexbox y Grid para distribuir los elementos de manera eficiente en diferentes resoluciones de pantalla, asegurando una experiencia de usuario fluida tanto en dispositivos móviles como en escritorio. Además, se integraron imágenes, tipografías y paletas de colores siguiendo principios básicos de diseño visual. Este ejercicio permitió comprender cómo transformar un diseño visual o boceto en una estructura web funcional, separando claramente el contenido (HTML) de la presentación (CSS). También se exploraron conceptos como semántica web, accesibilidad y uso adecuado de etiquetas. En conjunto, la maquetación web se consolidó como una habilidad clave en la construcción de páginas modernas, intuitivas y estéticamente atractivas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container">
            <div className="row">
                    <div className="col-12 col-md-4">
                    <h2>Bases de datos</h2>
                        <p>
                        Una base de datos es un conjunto organizado de información estructurada que se almacena electrónicamente y puede ser gestionada, consultada y modificada de manera eficiente. Su propósito principal es facilitar el acceso rápido y seguro a grandes volúmenes de datos, permitiendo que múltiples usuarios trabajen con la información al mismo tiempo. Las bases de datos se utilizan en una amplia variedad de aplicaciones, desde sitios web y sistemas bancarios hasta plataformas empresariales. Para interactuar con ellas, se utilizan sistemas de gestión de bases de datos (DBMS), como MySQL, PostgreSQL o MongoDB, y lenguajes como SQL, que permiten realizar operaciones como insertar, actualizar, eliminar y consultar datos. Además, garantizan la integridad, consistencia y seguridad de la información, lo que las convierte en una herramienta esencial en el desarrollo de software y la gestión de datos.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                       <img src="../../../../src/img/bases de datos.webp" alt="" className='img-fluid'/>
                    </div>
                </div>
            </section>

            <section className="container my-3">
            <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="../../../../src/img/ahorro.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-12 col-md-8 align-self-center">
                    <h2>Ahorrando App</h2>
                        <p>
                        Ahorrando App es una aplicación web diseñada con el objetivo de fomentar la educación financiera personal mediante el control y visualización de los gastos e ingresos del usuario. El proyecto surgió como una propuesta práctica para desarrollar habilidades en desarrollo web, gestión de datos y experiencia de usuario. La interfaz permite registrar movimientos financieros, categorizarlos (alimentación, transporte, entretenimiento, etc.) y visualizar el saldo disponible en tiempo real. Se utilizaron formularios dinámicos, validaciones y almacenamiento local o en base de datos para garantizar la persistencia de la información. Además, se aplicaron principios de diseño responsivo para asegurar su uso en dispositivos móviles. La aplicación ofrece una visión clara del comportamiento financiero, facilitando la toma de decisiones y el hábito del ahorro. Ahorrando App no solo fue un ejercicio técnico, sino una herramienta funcional que promueve la responsabilidad financiera en el día a día. El proyecto integró HTML, CSS, JavaScript y bases de datos de manera coherente y efectiva.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}