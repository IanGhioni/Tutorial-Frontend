import CodeTextHTML from "../../componentes/CodeTextHTML"

export default function HTML() {
    return(
        <div style={{
            width: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: '5%',
            marginTop: '2%'
        }}>
            <div style={{
                backgroundColor: 'aliceblue',
                width: '90vw',
                borderRadius: '25px',
                paddingLeft: '60px',
                paddingRight: '60px'
            }}>
                <h1>Arrancando con HTML</h1>
                <p>
                    Bueno, primero contestemos la pregunta de que es HTML. HTML, o HyperText Marup Language, es un lenguaje que se utiliza para la creacion de paginas web.
                    Es un estandar que define la estructura basica para presentar el contenido de una pagina web. Esto incluye imagenes, audio, video, texto, botones, etc.
                    Como estandar prevalece y es actualmente utilizado por todas las paginas web.
                </p>
                <p>
                    HTML, para dar estructura a una pagina web, lo hace con <b>etiquetas</b>. Las etiquetas suelen tener 3 partes: El nombre, los atributos y el contenido. Aca va
                    un ejemplo de como se ve una etiqueta HTML con todas sus partes:
                </p>
                    <CodeTextHTML code={"<nombreDeLaEtiqueta atributo1=unValor atributo1=OtroValor> El contenido que se va a mostrar en la pantalla </nombreDeLaEtiqueta>"}/> 
                    Las etiquetas HTML, como ves, siempre se tienen que abrir con <b>&lt;nombreDeLaEtiqueta&gt;</b> y cerrar con <b>&lt;/nombreDeLaEtiqueta&gt;</b>, y el contenido
                    va siempre si o si entre el <b>&gt;</b> y <b>&lt;</b>. Ademas, siempre los atributos se le asigna valor con un igual y se separan con espacio. No seria valido
                    poner <b><code>atributo1=unValoratributo1=OtroValor</code></b> asi todo junto, ni tampoco poner <b><code>atributo1= unValor</code></b> con un espacio en el medio.

                    <p>Te dejo otro ejemplo,  el texto de mas arriba que acabas de leer, que lo envolvi en la etiqueta <b>&lt;p&gt;</b> que se utiliza para parrafos. En este caso no 
                    tiene atributos porque no los necesita, solo muestro el contenido y ya:</p>
                    <CodeTextHTML code={`<p>
    Bueno, primero contestemos la pregunta de que es HTML. HTML, o HyperText Marup Language, es un lenguaje que se utiliza para la creacion de paginas web. Es un estandar 
    que define la estructura basica para presentar el contenido de una pagina web. Esto incluye imagenes, audio, video, texto, botones, etc. Como estandar prevalece y es actualmente 
    utilizado por todas las paginas web.
</p>`}              />
                    <p>
                        Bueno, con esta pequeña introducción, pasemos si ahora a ver etiquetas puntuales de HTML, empezando por las etiquetas de las cuales menos se asi 
                        que esto me sirve para aprender.
                    </p>
                    <h2>
                        Etiquetas de HEAD
                    </h2>
                    <p>
                    La primer etiqueta a ver es la mas importante pero a la vez la que nunca vamos a ver: la etiqueta <b>&lt;html&gt;</b>. No tiene atributos y su contenido es el codigo
                    html que escribamos. Basicamente lo que hace es decirle al navegador que lo que haya entre la apertura y cierre es html y tiene que interpretarlo como tal. Como 
                    tal, React nos abstrae un poco de esta etiqueta y de otras que voy a mencionar ahora mas adelante en esta seccion, pero igual la menciono para que la conozcas y
                    entiendas como hace el navegador para entender que hay codigo HTML en un documento. Aca va un ejemplo de como seria:
                    </p>
                    <CodeTextHTML code={`<html>
    // Y aca pondrias toooooodo el codigo HTML que quieras que el navegador cargue y muestre al usuario.
</html>`}           />
                    <p>
                        La que sigue es la etiqueta <b>&lt;head&gt;</b>. Esta etiqueta es <i>metadata</i>, es información sobre la información. Es raro de entender asi, asi que vamos de nuevo. 
                        La etiqueta <b>head</b> contiene toda la información que no tiene que ver con la estructura, sino con como se va a mostrar esa estructura. Capaz se entienda mejor con un ejemplo:
                    </p>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<head>
    <title> Titulo de la pestaña :P </title>
    <link rel="stylesheet" href="styles.css"></link>
    <style> p {color: blue;} </style>
</head>`
                        }/>
                        <p style={{paddingLeft: '17px', width: '69%'}}>
                            Aca vemos 3 etiquetas: La primera <b>&lt;title&gt;</b> que es <b>obligatoria</b> y no tiene atributos. Lo que indica es el titulo que va a tener la pestaña de la pagina web. La segunda <b>&lt;link&gt;</b> lo 
                            que indica es una relacion entre un documento externo y nuestro documento html. En este caso el atributo <b><code>href</code></b> indica de que documento externo se trata, en esta caso un documento
                            CSS, y el atributo <b><code>rel</code></b> indica que ese documento CSS en este documento html se usara para estilizar el contenido y presentarlo bonito. Y por ultimo <b>&lt;style&gt;</b> quie es para
                            dar estilo a algo sin necesidad de ir a buscarlo por un documento externo. En este caso indica que todo lo que sea una etiqueta <b>&lt;p&gt;</b>, su contenido pasara a ser color azul 
                            <p style={{color: 'blue'}}>Y entonces el texto de una etiqueta <b>&lt;p&gt;</b> pasaria a verse de esta manera.</p> 
                        </p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<head>
    <base href="https://www.miPagina.com" target="_blank">
</head>`
                        }/>
                        <p style={{paddingLeft: '17px', width: '65%'}}>
                            Esta otra, <b>&lt;base&gt;</b> indica un comportamiento base para todos los links de mi pagina. Un ejemplo como para que se entienda: si tengo un boton con un atributo que al oprimirlo 
                            me lleve al link <i>miPerfil</i>, con la etiqueta <b>&lt;base&gt;</b> y el atributo <code>href</code> la ruta completa al oprimir ese boton seria <i><b>https://www.miPagina.com/</b>miPerfil</i>. 
                            Vease, se autocompleta la base de la url. Y el atributo <code>taget</code> indica que al clickear ese boton se abrira en una nueva pestaña. Sin poner ese atributo se abrira en la misma pestaña.
                        </p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<head>
    <meta charset="UTF-8">
    <meta name="description" content="Tutorial de front">
    <meta name="author" content="Raul">
</head>
`
                        }/>
                        <p style={{paddingLeft: '17px', width: '65%'}}>
                            <b>&lt;meta&gt;</b> sirve para añadir metadatos, es decir, información sobre la página que no se muestra al usuario, pero que usan el navegador, los buscadores y los dispositivos. En este ejemplo vemos
                            que define el set de caracteres que va a permitir, y UTF-8 es la recomendada ya que permite casi todos los caracteres mas comunmente utilizados, incluída la Ñ y los acentos. Luego en otro meta de descripcion 
                            tiene como va a aparecer para google, cosa de que pueda aparecer mas arriba si se busca algo como <b>Tutorial de front</b>. Y el utlimo meta define el creador/autor de la pagina web, nada mas que simplemente 
                            eso, el creador. <br /> La etiqueta <b>&lt;meta&gt;</b> tiene mas atributos que se pueden configurar pero no son importantes ahora de frenarnos en eso.
                        </p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<head>
    <script src="app.js"></script>
    <noscript>No anda Javascript en este navegador</noscript>
</head>
`
                        }/>
                        <p style={{paddingLeft: '17px', width: '63%'}}>
                            <b>&lt;script&gt;</b> es una etiqueta utilizada para agregarle codigo javascript a tu pagina, ya sea de manera directa o como en este ejemplo, en el cual se importa un archivo <code>app.js</code>. Y la
                            etiqueta <b>&lt;noscript&gt;</b> sirve para indicar que contenido mostrar en el navegador en caso de que el usuario tenga desactivado el uso de javascript en el navegador, o que el navegador no soporte
                            javascript.
                        </p>
                    </div>
                    <p>
                        Con esto, terminamos con las etiquetas que se utilizan dentro de la etiqueta <b>&lt;head&gt;</b>. La realidad, es que React, como ya mencione, nos ahorra ya tener que configurar todo esto. Al crear un proyecto
                        React se crea automaticamente un documento <i>.html</i> con todo lo que corresponde a la etiqueta &lt;head&gt; ya configurado y preparado. Ni siquiera tendriamos que usar la etiqueta de <b>&lt;title&gt;</b> porque ya React
                        tiene algo incorporado para cambiar el titulo de una pestaña mucho mas facil y practico.
                    </p>
                    <p>
                        Antes de pasar a la siguiente sección, hay unas etiquetas de estructura de la siguiente seccionque no voy a explicar porque en React ni siquiera las vi aparecer en ningun archivo. De todas formas las voy a mencionar
                        para que las investigues si queres tener todo completo. Quien sabe, capaz las investigas y son re utiles:
                    </p>
                        <ul>
                            <li>
                                <b>&lt;header&gt;</b>
                            </li> 
                            <li>
                                <b>&lt;nav&gt;</b>
                            </li><li>
                                <b>&lt;main&gt;</b>
                            </li> 
                            <li>
                                <b>&lt;section&gt;</b>
                            </li>
                            <li>
                                <b>&lt;article&gt;</b>
                            </li> 
                            <li>
                                <b>&lt;footer&gt;</b>
                            </li>
                        </ul>
                    Dicho sea eso, pasemos a la siguiente sección.
                    <h2>
                        Etiquetas basicas de HTML
                    </h2>
                    <p>
                        La etiqueta <b>&lt;body&gt;</b>es la que, ahora si, define el contenido que se va a mostrar en la pantalla. Es el cuerpo de mi pagina web, lo que va a ver el usuario al abrir la pagina,
                        lo que estas viendo vos ahora en este momento. Esta etiqueta siempre debe ir debajo de <b>&lt;head&gt;</b>. Veamos entonces como se veria la estructura de un html completo:
                        <CodeTextHTML code={`<html>
    <head>
        <title> Titulo de la pestaña :P </title>
        <meta name="author" content="Iancho">
        <meta charset="UTF-8">
    </head>
    <body>
        // Y aca irian las etiquetas que vas a ver ahora mas abajo, y luego dejamos este ejemplo bien completo ;D
    </body>
</html>
`}
                    />
                    </p>
                    <h3>Etiquetas de texto</h3>
                    <p>
                        Las primeras etiquetas que vamos a ver son las de <b>header</b>, que son en total 6, y van desde <b>&lt;h1&gt;</b> hasta la <b>&lt;h6&gt;</b>. Basicamente 
                        son etiquetas de texto para organizar la estructura de un documento, dividiendolo en distintas secciones para que el usuario pueda escanear la pagina mejor 
                        y entender mejor como esta organizada. Tambien son utilizados por los motores de busqueda para analizar el tema de tu documento y puede impactar en si aparece
                        mas arriba que otras paginas o no, y tambien son usados por tecnologias de accesibilidad.
                    </p>
                    <p>
                        La etiqueta <b>&lt;h1&gt;</b> se utiliza para el titulo de la pagina y solo deberia haber una etiqueta <b>&lt;h1&gt;</b> en todo el documento. <b>&lt;h2&gt;</b> se 
                        utiliza para el titulo de distintas secciones, <b>&lt;h3&gt;</b> para titulos de subsecciones, y asi va bajando su importancia de separacion hasta el <b>&lt;h6&gt;</b>.
                        La verdad es que tampoco los uso demasiado, siempre hago los titulos de pagina o de secciones con estilos CSS, pero igual los explico para que ya los tengas aprendidos.
                        <br /> Aca va un ejemplo de como se ven las etiquetas visualmente:
                    </p>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<h1>Esto es un h1</h1>
<h2>Esto es un h2</h2>
<h3>Esto es un h3</h3>
<h4>Esto es un h4</h4>
<h5>Esto es un h5</h5>
<h6>Esto es un h6</h6>
`} />
                        <div style={{paddingLeft: '20px'}}>
                            <h1>Esto es un h1</h1>
                            <h2>Esto es un h2</h2>
                            <h3>Esto es un h3</h3>
                            <h4>Esto es un h4</h4>
                            <h5>Esto es un h5</h5>
                            <h6>Esto es un h6</h6>
                        </div>
                    </div>
                    <p>
                        La etiqueta que sigue ya la vimos mas arriba, fue de las primeras que vimos, y es la etiqueta <b>&lt;p&gt;</b>. Esta etiqueta se utiliza para texto, para los parrafos. Todo esto
                        que estuviste leyendo se encerro en esa etiqueta. La verdad que no es mucho mas que eso, y el ejemplo de mas arriba es mas que claro: abris la etiqueta, pones el texto, cerras la
                        etiqueta, fin.
                        <br /> Otra etiqueta relacionada con los parrafos es <b>&lt;br&gt;</b> que se utilia para hacer un salto de linea. Esto es porque apretar enter para escribir en otra linea no sirve en
                        html, lo compila todo en el mismo renglon. Entonces se debe usar esta etiqueta especial de <b>&lt;br&gt;</b> que tiene una peculiaridad: No tiene contenido ni atributos, y se debe usar
                        de una manera particular, que es asi <b>&lt;br /&gt;</b>. Veamoslo con un ejemplo
                    </p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CodeTextHTML code={`<p>
    Este texto aparece en un mismo renglon a pesar de que voy a meter un enter
    justo aca. <br /> Y esto aparece debajo, a pesar de estar en la misma linea.
</p>` }/>
                        <p style={{paddingLeft: '20px'}}>
                            Este texto aparece en un mismo renglon a pesar de que voy a meter un enter
                            justo aca. <br /> Y esto aparece debajo, a pesar de estar en la misma linea.</p>
                    </div>
                    <p>
                        Otras etiquetas de texto utiles son <b>&lt;b&gt;</b> y <b>&lt;i&gt;</b>., que justamente se utilizan para marcar el texto en negrita y marcar en italica.
                        <b>Por ejemplo, este texto de aca va a aparecer en negrita</b>. <i>Este texto va a aparecer en italica.</i> <b><i>Y este texto de aca va a aparecer en
                        negrita y en italica</i></b>. Y aca te dejo el ejemplo de estas etiquetas en uso.
                    </p>
                    <CodeTextHTML code={`<b>Por ejemplo, este texto de aca va a aparecer en negrita.</b> 
<i>Este texto va a aparecer en italica.</i> 
<b><i>Y este texto de aca va a aparecer en negrita y en italica.</i></b>. 
`}
                    />
                    <p>
                        Otra etiqueta comun es <b>&lt;a&gt;</b>, que sirve para linkear de una pagina a otra, y se le indica la url destino con el atributo <b>href</b>. Es una etiqueta que al clickearse
                        redirecciona a esa otra url. Tambien se le puede indicar con <b>target</b> si queremos que se abra en esta pestaña o en otra. Por defecto se abre en esta pestaña. Veamoslo aca con un ejemplo,
                        con target en <i>_blank</i> para que te lleve a otra pestaña:
                    </p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CodeTextHTML code={`<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Visita esta pagina!!</a>` }/>
                        <a style={{paddingLeft: '20px'}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> Visita esta pagina!!</a>
                    </div>
                    <h3>Etiquetas de listas</h3>
                    <p>
                        Ahora pasemos a las etiquetas de listas, que son <b>&lt;ol&gt;</b> y <b>&lt;ul&gt;</b>. Ambas deben usarse en conjunto con <b>&lt;li&gt;</b>, que viene a ser la etiqueta que marca un
                        elemento de la lista, vease un <i>list item</i>. <b>&lt;ol&gt;</b> muestra estos elementos de lista de manera enumerada, de ahi su nombre, <b>ol</b> que viene de <b><i>ordered list</i></b>. Mientras
                        que <b>&lt;ul&gt;</b> los muestra en viñetas sin que esten ordenados, <b>ul</b> por <b><i>unordered list</i></b>. Con un ejemplo visual se
                        entenderia mejor:
                    </p>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<ul>
    <li>Este elemento aparece con viñetita.</li>
    <li>Este elemento aparece con viñetita.</li>
    <li>Este elemento aparece con viñetita.</li>
    <li>Este elemento aparece con viñetita.</li>
</ul>
` }/>
                        <ul>
                            <li>
                                Este elemento aparece con viñetita.
                            </li>
                            <li>
                                Este elemento aparece con viñetita.
                            </li>
                            <li>
                                Este elemento aparece con viñetita.
                            </li>
                            <li>
                                Este elemento aparece con viñetita.
                            </li>
                        </ul>
                    </div>
                    <div style={{display: 'flex'}}>
                        <CodeTextHTML code={`<ol>
    <li>Este elemento aparece con un uno al principio.</li>
    <li>Este elemento aparece con un dos al principio.</li>
    <li>Este elemento aparece con un tres al principio.</li>
    <li>Este elemento aparece con un cuatro al principio.</li>
</ol>
` }/>
                        <ol>
                            <li>
                                Este elemento aparece con un uno al principio.
                            </li>
                            <li>
                                Este elemento aparece con un dos al principio.
                            </li>
                            <li>
                                Este elemento aparece con un tres al principio.
                            </li>
                            <li>
                                Este elemento aparece con un cuatro al principio.
                            </li>
                        </ol>
                    </div>
                    <h3>Etiqueta de imagen</h3>
                    <p>
                        Pasamos ahora a otra etiqueta importante que es <b>&lt;img&gt;</b>, que es una etiqueta utilizada para mostrar imagenes. Esta no tiene contenido y se configura mediante los
                        atributos de la etiqueta. El atributo <b>src</b> indica la imagen, mediante una url, el atributo <b>alt</b> especifica un texto a mostrar en caso de que la imagen no cargue, y 
                        los atributos <b>width</b> y <b>height</b> especifican el ancho y el alto en pixeles. Estos si no se especifican, la imagen va a tomar su resolucion original y va a coupar todo
                        el espacio que pueda, lo cual a veces no es bueno si tenes una imagen 4K que queres que sea la foto chiquita de un usuario de la pagina.<br /> Veamoslo con un ejemplo:
                    </p>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <CodeTextHTML code={`<img 
    src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' 
    height='100' width='100'
/>
<img 
    src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' 
    height='150' width='200'
/>
<img 
    src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' 
    height='350' width='250'
/>` }/>
                        <img style={{paddingLeft: '20px'}} src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' height='100' width='100'/>
                        <img style={{paddingLeft: '20px'}} src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' height='150' width='200'/>
                        <img style={{paddingLeft: '20px'}} src='https://m.media-amazon.com/images/I/71iXh6wFHNL._SL1500_.jpg' height='350' width='250'/>
                    </div>
                    <h3>Etiqueta de botones</h3>
                    <p> Otro elemento muy importante es el <b>&lt;button&gt;</b> que justamente pone un boton en la pagina. El contenido de la etiqueta es el texto que aparecera en el boton, y ademas
                    tiene varios atributos que voy a explicar, pero con React se manejan mucho mas facil y casi ni los vemos, pero los explico igual:
                    </p>
                    <ul>
                        <li><b>Type:</b> Define que tipo de boton es. <code>type="button"</code> es un boton normal que no hace nada por si solo, se debe utilizar junto con javascript. <code>type="submit"</code> es
                        un boton que envia los datos de un formulario cuando se clickea. <code>type="reset"</code> lo que hace es limpiar los campos de un formulario y dejarlos vacios. Estos no los usaremos mucho
                        en la cursada.</li>
                        <li><b>Disabled:</b> Este cuando se escribe como atributo indica que el boton esta deshabilitado y no se puede interactuar. Este es el unico que probablemente le demos utilidad en React.</li>
                        <li><b>Title:</b> Este indica el texto que aparece al pasar y dejar el mouse por encima del boton un segundo.</li>
                        <li><b>Name y value:</b> Sirven para enviar datos de un form en caso de que el boton sea submit. Mas adelante cuando veamos formularios vuelvo a esto pero nuevamente, con React nos olvidamos un
                        poco de esto.</li>
                    </ul>
                    Y como siempre, aca unos ejemplos de botones:
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                        <CodeTextHTML code={`<button type="button">Boton habilitado</button>
<button type="button" disabled>Boton deshabilitado</button>
<button type="button" title="Es un boton con titulo">Boton con titulo</button>
` }/>
                        <button type="button">Boton habilitado</button>
                        <button type="button" disabled='true' style={{cursor: 'not-allowed'}}>Boton deshabilitado</button>
                        <button type="button" title="Es un boton con titulo">Boton con titulo</button>
                    </div>
                    <h3>Etiquetas contenedoras</h3>
                    <p>
                        Ahora veamos las etiquetas contenedoras, empezando por el clasico <b>&lt;div&gt;</b>. El <b>div</b> no es mas que una caja donde dentro voy a poner cosas. Podes verlo como que sirve para 
                        dividir la pagina en distintas partes. El div es un componente contenedor que ocupa todo el ancho que pueda y siempre que lo uses va a hacer un salto de linea.
                    </p>
                    <div style={{backgroundColor: 'yellowgreen'}}>
                        <p>Esto que lees aca es una etiqueta <b>&lt;p&gt;</b> dentro de un <b>div</b>. Fijate como usa todo el ancho, a pesar de que mi texto no llegue al final.</p>
                    </div>
                    <p>Otro ejemplo de div son los ejemplos que estuve dando, que estan dentro de un div. Voy a traer un ejemplo de vuelta y marcar con verde cuanto ocupa</p>
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: 'yellowgreen'}}>
                        <CodeTextHTML code={`<div>
    <button type="button">Boton habilitado</button>
    <button type="button" disabled>Boton deshabilitado</button>
    <button type="button" title="Es un boton con titulo">Boton con titulo</button>
</div>
` }/>
                        <button type="button">Boton habilitado</button>
                        <button type="button" disabled='true' style={{cursor: 'not-allowed'}}>Boton deshabilitado</button>
                        <button type="button" title="Es un boton con titulo">Boton con titulo</button>
                    </div>
                    <p>
                        Los divs son tu herramienta para armar paginas con estilo mas importante. Ahora capaz no parecen importantes pero mas adelante con CSS va a tener mas sentido.
                    </p>
                    <p>
                        Otra etiqueta contenedora es <b>&lt;span&gt;</b>, que, en lugar de ocupar todo el ancho posible, ocupa solo lo que ocupe el contenido.<span style={{color:'red'}}> por ejemplo, 
                        este es un span que le puse color de texto rojo,</span><span style={{backgroundColor:'yellowgreen'}}> y este es otro span que le cambie el color de fondo nomas. </span>
                        <span style={{fontFamily: 'emoji', color: 'blue'}}> Y este es otro span con una fuente distinta y con color de texto azul.</span> Fijate como 
                        solo ocupan lo que vos pongas adentro, a diferencia del div que ocupa todo el ancho posible y te lo pasa a una nueva linea. Es util para remarcar alguna cosa puntual de un texto 
                        largo, como la etiqueta <b>&lt;b&gt;</b> que te lo ponia en negrita, pero en este caso la etiqueta <b>&lt;span&gt;</b> sirve para otras cosas de estilo o de resaltado.
                    </p>
                    <h3>Etiquetas de formularios</h3>
                    <p>
                        Ahora terminamos con la etiquetas dedicadas a los formularios. Estas etiquetas las odio a muerte, pero soin necesarias desafortunadamente asi que veamoslas. Las etiquetas a ver 
                        en esta sección son:
                    </p>
                        <ul>
                            <li>
                                <b>form:</b> Es el contenedor del formulario. Aca se agrupan los inputs {"(las etiquetas para formularios)"} y los botones. Pensalo como la etiqueta <b>&lt;body&gt;</b>, que 
                                adentro poniamos el cuerpo de nuestra pagina, bueno parecido, dentro de form pondriamos el cuerpo de nuestro formulario.
                            </li>
                            <li>
                                <b>input:</b> Es un campo de entrada. Cambia su comportamiento según el atributo <code>type</code>. 
                                Tambien, dependiento el tipo, tienen un atributo <code>placeholder</code> que indica el texto que aparece en el campo cuando no hay nada escrito.
                                <br />Aca te dejo unos cuantos ejemplos de inputs y sus respectivos <code>types</code>:
                                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                    <CodeTextHTML code={`<form>
    <input type="text" placeholder="Escribi tu nombre de usuario"></input>
    // Solo admite texto
    <input type="email" placeholder="Escribi tu mail"></input>
    // Solo admite texto con un formato de mail
    <input type="password" placeholder="Escribi tu contraseña"></input>
    // Te esconde el texto que escribas
    <input type="number" placeholder="Escribi tu DNI"></input>
    // Solo admite numeros
    <input type="date"></input>
    // Para poner fechas
</form>` }/>
                                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '15px'}}>
                                        <input type="text" placeholder="Escribi tu nombre de usuario"></input>
                                        <input type="email" placeholder="Escribi tu mail"></input>
                                        <input type="password" placeholder="Escribi tu contraseña"></input>
                                        <input type="number" placeholder="Escribi tu DNI"></input>
                                        <input type="date"></input>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <b>label:</b> Esta etiqueta es particular, porque su uso es esencial para cosas del navegador de busqueda y autocompletado, y ademas accesibilidad, para que 
                                un lector de pantalla entienda la asociacion que hay entre un input y un label. Ejemplo, si yo, persona no vidente, le pido a mi celu que me lea la pagina anterior 
                                del ejemplo de inputs, me va a nombrar los campos pero no me va a decir que es cada uno. Pero al ejemplo anterior lo completaramos con labels, me los relacionaria a
                                los campos con el tipo que es, y entenderia que para el campo "Email" hay un input que le corresponde. Asi quedaria el ejemplo completo:
                                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                    <CodeTextHTML code={`<form>
    <label for="nombre-de-usuario">Nombre de usuario</label>
        <input id="nombre-de-usuario" type="text" placeholder="Escribi tu nombre de usuario"></input>
    <label for="email">Email personal</label>
        <input id="email" type="email" placeholder="Escribi tu mail"></input>
    <label for="contraseña">Su Contraseña</label>
        <input id="contraseña" type="password" placeholder="Escribi tu contraseña"></input>
    <label for="numero-documento">Su numero de documento, sin guiones</label>
        <input id="numero-documento" type="number" placeholder="Escribi tu DNI"></input>
    <label for="fecha-nacimiento">Su fecha de nacimiento</label>
        <input id="fecha-nacimiento" type="date"></input>
</form> 
`                               }/>
                                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px'}}>
                                        <label for="nombre-de-usuario">Nombre de usuario</label>
                                            <input id="nombre-de-usuario" type="text" placeholder="Escribi tu nombre de usuario"></input>
                                        <label for="email">Email personal</label>
                                            <input id="email" type="email" placeholder="Escribi tu mail"></input>
                                        <label for="contraseña">Su Contraseña</label>
                                            <input id="contraseña" type="password" placeholder="Escribi tu contraseña"></input>
                                        <label for="numero-documento">Su numero de documento, sin guiones</label>
                                            <input id="numero-documento" type="number" placeholder="Escribi tu DNI"></input>
                                        <label for="fecha-nacimiento">Su fecha de nacimiento</label>
                                            <input id="fecha-nacimiento" type="date"></input>
                                    </div>
                                </div>
                                <p>
                                    Habras visto que hay un atributo <b>id</b> y un atributo <b>for</b>. Estos atributos son justamente los que vinculan. Al input le clavo el <b>id</b> que lo
                                    identifique, y al label le pongo el atributo <b>for</b> que le indica a que input tiene que estar relacionado, buscando que tenga el mismo atributo <b>id</b> que
                                    se indicó en el atributo <b>for</b>. Por ejemplo, el label con <b>for:"email"</b> esta relacionado al input con <b>id"email"</b>.

                                    <br />Tambien tienen la funcionalidad rara de que si tocas el texto, apuntan al campo, como si hubieras hecho click en el campo. Proba haciendo click en por ejemplo
                                    "Escribi tu DNI" y vas a ver que te pone en el campo, aunque no hayas hecho click directamente.
                                </p>
                            </li>
                            <li>
                                <b>textarea:</b> Es un campo de texto de multiples lineas, no es mucho mas que eso. Tiene un atributo <code>placeholder</code> que indica el texto
                                que va a aparecer cuando este vacio, y un atributo <code>rows</code> que indica la cantidad de renglones que se van a ver, pero no limita la cantidad
                                de texto que podes escribir, cuando se pasa de la cantidad de renglones aparece un scroll. Aca va un ejemplo con 4 renglones:
                                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                    <CodeTextHTML code={`<form>
    <label for="texto-review">Mensaje:</label>
    <textarea id="texto-review" rows="4" placeholder="Escriba en este campo su reseña:"></textarea>
</form>`} />                    
                                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '15px'}}>
                                        <label for="texto-review">Escriba en este campo su reseña:</label>
                                        <textarea id="texto-review" rows="4" placeholder="Escribí aca tu reseña."></textarea>
                                    </div>    
                                </div>
                            </li>
                            <li>
                                <b>select y option:</b> Ultimas etiquetas y ya terminamos. <b>select</b> es una etiqueta para indicar un menu desplegable, y lo que se ponga dentro son
                                etiquetas <b>option</b>, que son justamente las opciones del menu desplegable. Un ejemplo de un menu desplegable de videojuegos favoritos:
                                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                    <CodeTextHTML code={`<form>
    <label for="juego-fav"> Selecciona tu juego de teror favorito de esta lista: </label>
    <select id="juego-fav">
        <option>Resident Evil 4</option>
        <option>Soma</option>
        <option>Lost in vivo</option>
    </select>
</form>`} />                    
                                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '15px'}}>
                                        <label for="juego-fav">
                                            Selecciona tu juego favorito de esta lista:
                                        </label>
                                        <select id="juego-fav">
                                            <option>Resident Evil 4</option>
                                            <option>Soma</option>
                                            <option>Lost in vivo</option>
                                        </select>
                                    </div>    
                                </div>
                            </li>
                        </ul>
                        <h4>Para ir cerrando</h4>
                        <p>
                            Ahora finalmente, para cerrar una cosa que me quedo pendiente: la etiqueta <b>button</b> y sus atributos <b>name y value</b> que se utilizan en forms y prometi explicarlo despues.
                            Bueno, ese despues es ahora. Como tal no lo vemos en React y no es indispensable que lo sepas, pero es para que entiendas como funciona y yo tambien aprenderlo.
                        </p>
                        <p>
                            Si yo pongo un boton de tipo <b>submit</b> dentro de un form, al oprimirlo todos los datos completados en los inputs se envian. Primero, <b>¿A donde se envian?</b> Bueno, eso se aclara 
                            en la etiqueta de <b>&lt;form&gt;</b> con los atributos <b>action</b> y <b>method</b>. El atributo <b>action</b> indica a donde mandarlo, por ejemplo <b>action="/registro"</b> lo mandaria
                            al backend a la ruta de registro, y <b>method</b> sirve para indicar como se envia la data, por ejemplo <b>method="POST"</b>
                        </p>
                        <p>
                            Bueno, ahora que sabemos a donde se envian al oprimir un boton de tipo submit, queda responder que es <b>name</b> y <b>value</b>. Basicamente son informacion extra que se envia junto 
                            con los datos del form. El atributo <b>name</b> sirve para indicar el nombre de un campo que se envio, y se usa no solo en botones sino tambien en inputs. 
                        </p>
                        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                                    <CodeTextHTML code={`<form action="/procesar" method="POST">
    <input name="nombre" type="text" placeholder="Escribi tu nombre de usuario"></input>
    <button type="submit" name="accion" value="guardar">Guardar</button>
    <button type="submit" name="accion" value="borrar">Borrar</button>
</form>`} />            
                        <div>
                            <p style={{alignSelf: 'baseline', width:'700px'}}>
                                En este ejemplo, tenemos 1 input y dos botones. Al completar el input con "Ian" y oprimir el boton "Guardar", se enviara a la ruta <b>"/procesar"</b> con 
                                metodo <b>POST</b> los datos de la siguiente manera: <br /><code> <b>nombre=Ian</b>, <b>accion=guardar</b></code><br />
                            </p>
                            <p>
                                Y al oprimir el boton "Borrar" envia los datos de la siguiente manera:
                                <br /><code> <b>nombre=Ian</b>, <b>accion=borrar</b></code><br />
                            </p>
                            </div>
                        </div>   
                        <p> 
                            Y cuando el backend lo reciba, probablemente  haga algo como esto:
                            <br /><code>
                                if accion == "guardar": guardarEnBD{'(nombre)'}
                                <br />if accion == "borrar": eliminarRegistro{'(nombre)'}
                            </code>
                        </p>
                        <p> Y asi es como funciona el submit de un boton cuando esta dentro de un form. No creo que lo utilicemos como ya dije pero que se yo esta bueno que lo sepas i guess, y yo tambien.</p>
                        <h3>Finalizando</h3>
                        <p>
                            Con esto termina toda la explicacion de HTML mas o menos basica. Hay mas etiquetas que no explique, como para manejar tablas, para reproducir audio, video, 
                            para <u>subrayar texto</u> o <strike>para tacharlo</strike>, pero la verdad es que son cosas que no me parecen tan importantes respecto a lo que da interfaces y ademas
                            cosas como tachar el texto o subrayarlo o muchas cosas mas se pueden hacer con CSS y es mas o menos mas comodo asi.
                            <br />
                            <br />
                            Ahora, solo si te interesa, te dejo un ejemplo que podes copiar y guardar como .html, y luego hacerle doble click al archivo y abrirlo en un navegador. 
                            Podes luego abrirlo con VS Code y jugar con el documento y ponerle mas cosas o borrar todo y hacer algo completamente distinto. Concentrate mas que nada en jugar en lo que haya dentro de 
                            la etiqueta <b>&lt;body&gt;</b> que es mas que nada lo que vamos a utilizar en interfaces, porque de la etiqueta <b>&lt;head&gt;</b> nos vamos a olvidar.
                            <br /> Veras que no use todas las etiquetas ni todos los atributos, y es porque me concentre en lo importante que es la estructura, que es lo que html se enfoca.
                        </p>
                        <CodeTextHTML code={`<html>
    <head>
        <title> Titulo de la pestaña :P </title>
        <meta name="author" content="Iancho">
        <meta charset="UTF-8">
    </head>
    <body>
        <h1>Page & Frame</h1>
        <img src="https://oem.com.mx/elsoldetoluca/img/14660864/1565953398/BASE_LANDSCAPE/480/image.webp"/>
        <div>
            <h2>Bienvenido a <span style="color: red">Page & Frame</span>!!!!</h2>
            <h3>
                Por favor, complete el siguiente formulario para registrarse. 
            </h3>
            <p>
                Debe completar <b>todos los campos</b> para poder ingresar.
            </p>
            
            <form>
                <label for="nombre">Nombre:</label>
                <input id="nombre" type="text" placeholder="Tu nombre">
                <label for="email">Email:</label>
                <input id="email" type="email" placeholder="tu@email.com">
                <label for="password">Contraseña:</label>
                <input id="password" type="password" placeholder="contraseña">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" rows="4" placeholder="Tu descripción"></textarea>
                <label for="gusto">Que te gusta más:</label>
                <select id="gusto">
                    <option>Libro</option>
                    <option>Pelicula</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
            <p>
                <b><i>¿Qué podes hacer con nuestra pagina?</i></b>
            </p>
            <ul>
                <li>Crear reviews de peliculas y libros</li>
                <li>Tambien calificar libros y peliculas</li>
                <li>Guardar libros y pelis en listas</li>
                <li>Encontrar contenido acorde a tus gustos</li>
            </ul>
        </div>
    </body>
</html>`} />
                <p> 
                    <b>Y con todo esto de HTML explicado, podemos pasar a <span style={{color: 'blue'}}>CSS</span></b>
                    
                </p>
                <button className="home-button-css" style={{marginBottom: '25px'}}>CSS</button>
            </div>
        </div>
    )
}