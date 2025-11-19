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
                    <p>
                        Las primeras etiquetas que vamos a ver son las de <b>header</b>, que son en total 6, y van desde <b>&lt;h1&gt;</b> hasta la <b>&lt;h6&gt;</b>. Basicamente 
                        son etiquetas de texto para organizar la estructura de un documento, dividiendolo en distintas secciones para que el usuario pueda escanear la pagina mejor 
                        y entender mejor como esta organizada. Tambien son utilizados por los motores de busqueda para analizar el tema de tu documento y puede impactar en si aparece
                        mas arriba que otras paginas o no, y tambien son usados por tecnologias de accesibilidad.
                    </p>
                    <p>
                        La etiqueta <b>&lt;h1&gt;</b> se utiliza para el titulo de la pagina y solo deberia haber una etiqueta <b>&lt;h1&gt;</b> en todo el documento. <b>&lt;h2&gt;</b> se 
                        utiliza para el titulo de distintas secciones, <b>&lt;h3&gt;</b> para titulos de subsecciones, y asi va bajando su importancia de separacion hasta el <b>&lt;h6&gt;</b>.
                        Aca va un ejemplo de como se ven las etiquetas visualmente:
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
                    </p>
                </p>
            </div>
        </div>
    )
}