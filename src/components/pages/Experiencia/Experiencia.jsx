import './Experiencia.css'
export function Experiencia() {
    return (
        <>
            <section className='container'>
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Mi Experiencia</h2>
                        <hr />
                    </div>
                </div>

            </section>

            <section className='container'>
                <div className="row">
                    <div className="col-12">
                        <div class="progress" role="progressbar" >
                            <div class="progress-bar barra" >50%</div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/img/logica.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra2">45%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Logica de Programacion</h2>
                        <ul>
                            <li>Variables</li>
                            <li>Tipos de Datos</li>
                            <li>Condicionales (if, else)</li>
                            <li>Arreglos (arrays)</li>
                        </ul>
                    </div>
                </div>
            </section>


      <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/img/bases de datos.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra3">40%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Bases de datos</h2>
                        <ul>
                            <li>Clave primaria y clave foránea</li>
                            <li>Tipos de bases de datos (relacional, NoSQL, jerárquica, orientada a objetos)</li>
                            <li>Modelo entidad-relación</li>
                            <li>Componentes de una base de datos (tablas, filas, columnas)</li>
                        </ul>
                    </div>
                </div>
            </section>




      <section className="container my-4">
                <div className="row">
                    <div className="col-4 card p-3">
                    <img src="../../../../src/img/bases de datos.jpg" alt="" className='img-fluid'/> 
                    <br />
                    <div class="progress" role="progressbar">
                        <div class="progress-bar barra4">65%%</div> 
                    </div>
                    
                    </div>
                    <div className="col-8 card p-3">
                        <h2>Maquetacion HTML+CSS</h2>
                        <ul>
                            <li>Etiquetas HTML5 principales</li>
                            <li>Formularios</li>
                            <li>Tablas</li>
                            <li> Selectores</li>
                            <li>Diseño Responsivo</li>
                            <li>Diseño con Flexbox </li>
                            <li> Animaciones y Transiciones</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}