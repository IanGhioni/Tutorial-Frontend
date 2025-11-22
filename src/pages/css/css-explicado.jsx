import "./css-explicado.css"
import CodeTextCSS from "../../componentes/CodeTextCSS"
import CodeTextHTML from "../../componentes/CodeTextHTML"
import { useState } from "react"
import { InputLabel, MenuItem, Select } from "@mui/material";

export default function CSS() {
    const [decoration, setDecoration] = useState('solid');
    const [decorationLine, setDecorationLine] = useState('underline');
    const [borderStyle, setBorderStyle] = useState('solid');
    const [borderRadius, setBorderRadius] = useState('');
    const [horizontalShadow, setHorizontalShadow] = useState('');
    const [verticalShadow, setVerticalShadow] = useState('');
    const [colorShadow, setColorShadow] = useState('brown')
    const [blurShadow, setBlurShadow] = useState('')
    const [spread, setSpread] = useState('')
    const [flexDirection, setFlexDirection] = useState('row')
    const [flexDirection2nd, setFlexDirection2nd] = useState('row')
    const [justifyContent1, setJustifyContent1] = useState('center')
    const [justifyContent2, setJustifyContent2] = useState('center')
    const [alignItems1, setAlignItems1] = useState('start')
    const [alignItems2, setAlignItems2] = useState('start')

    const [flexDirection3, setFlexDirection3] = useState('row')
    const [justifyContent3, setJustifyContent3] = useState('center')
    const [alignItems3, setAlignItems3] = useState('start')
    const [heightEjemplo, setHeightEjemplo] = useState('500px')






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
                paddingLeft: '40px',
                paddingRight: '40px',
                paddingBottom: '15px'
            }}>
                <h1>Explicando CSS {'(lo basico)'}</h1>
                <p>
                    Primero respondamos que es CSS: <b>CSS</b> significa <b>{'Cascading Style Sheets (Hojas de Estilo en Cascada) '}</b> y es basicamente la herramienta que tenemos nosotros, 
                    los devs de frontend, para darle estilo a una pagina. Nos permite controlar el tamaño, color, los fondos, las imagenes, los bordes, la disposición. HTML se encarga de la
                    estructura, y CSS se encarga de los estilos.
                    <br /> <b>¿Cómo funciona?</b> Bueno, tendriamos que tener un archivo <code>.html</code> y un archivos <code>.css</code>. Usando la 
                    etiqueta <b>&lt;link&gt;</b> podemos importar ese documento css en nuestro html. Despues en React vamos a poder importarlo mas facil, pero ya vamos a llegar a React.
                    Y en ese archivo css lo que vamos a hacer es, a partir de selectores que apunten a elementos especificos le aplicamos el estilo que queramos. Creo que siempre es
                    mejor ver todo con un ejemplo, asi que aca va un ejemplo sencillo y simple:
                </p>
                <div style={{display: 'flex'}}>
                    <CodeTextCSS code={`/* En este caso div es el selector */
div {
    background-color: yellow;
    color: blue
    /* Y aca entre corchetes pongo los estilos */
}`} />
                    <div style={{paddingLeft: '10px', width:'1100px'}}>
                        <p>
                            En este caso, <b>div</b> es el selector, por lo que este ejemplo de CSS va a agarrar cada elemento div de mi html y le pondra el estilo que yo ponga entre los corchetes.
                            En este caso le va a poner un fondo amarillo y color de texto azul a todo el texto que aparezca contenido en ese div.
                            <div style={{backgroundColor: 'yellow', color: 'blue'}}>
                                <p> Y asi es como se verian todos los divs de mi pagina si yo pusiera eso.</p>
                            </div>
                        </p>
                    </div>
                </div>
                <p>
                    Con esto ya podemos empezar a estilizar. Podria poner en mi css cosas como las del ejemplo de aca abajo, y ya poder empezar a tener mi pagina estilizada y bien bonita:
                </p>
                <div style={{display: 'flex', gap: '15px'}}>
                    <CodeTextCSS code={`div {
    background-color: yellow;
}`} />
                    <CodeTextCSS code={`p {
    color: red
}`} />
                    <CodeTextCSS code={`button {
    color: white;
    background-color: black
}`} />
                    <CodeTextCSS code={`a {
    color: green
}`} />
                </div>
                <p>
                    Pero hay un <b>problema</b> con esto ¿Qué pasa si quiero que un boton especifico tenga un fondo de color azul?¿O que un div especifico tenga un fondo de color verde? Con esta 
                    forma de estilizar no puedo hacer esto que quiero. Todos mis divs van a tener fondo amarillo, y todos mis botones un fondo negro. Es util para estilizar cosas en general, 
                    pero <b>no me da flexibilidad para estilizar cosas muy especificas</b>. Necesito otra forma, y aca es donde entran las <b>clases de html</b>.
                </p>
                <p> 
                    Todos los componentes de body de html se le puede poner un atributo <b>className</b>, que sirve justamente para estilizar de manera especifica ciertos elementos. Ejemplo para 
                    que se vizualize:
                </p>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <CodeTextHTML code={`<div>
    <button>Boton comun</button>
    <button className="boton-azul">Boton azul</button>
</div>`} />
                    <CodeTextCSS code={`.boton-azul {
    color: white;
    background-color: blue
}`}/>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <button>Boton comun</button>
                        <button className="boton-azul">Boton azul</button>
                    </div>
                </div>
                <p>
                    Si aprecias en el ejemplo, a <b>un solo boton</b> le puse de nombre de clase <b>"boton-azul"</b>, y en el archivo css le defini estilo solo a aquellos componentes que se llamen como
                    clase "boton-azul". Fijate que, a diferencia de como estaba antes, ahora la primer linea de css donde va el selector empieza con un punto. Esa es la forma en la que CSS 
                    entiende que no se trata de un elemento de html como un div o un boton, sino que se trata de uno o varios elementos que se llaman "boton-azul" y solo a esos elementos le
                    aplica ese estilo.
                    <br />Entonces, como un <b>ayuda memoria</b>:
                </p>
                <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
                    <CodeTextCSS  code={`/*En este caso se aplica a todos las etiquetas que se llamen elemento*/
elemento {
    color: red
}`} />
                    <CodeTextCSS code={`/*En este caso solo se aplica a aquellas etiquetas que su clase sea "elemento"*/
.elemento {
    color: red
}`}/>
                </div>
                <p> 
                    Con esto en mente, ya tenemos una base para estilizar toda nuestra pagina de multiples maneras, y de maneras flexibles. Hay otras formas de estilizar especificamente, como
                    por <b>"#id"</b> o con <b>"*"</b> pero no creo que lo usemos en la materia. Con esto de <b>className</b> estamos sobrados, asi que empecemos a ver unas propiedades de CSS 
                    basicas para ir arrancando.
                </p>

                <h2>Propiedades de estilo para texto</h2>
                <p>
                    Con estas propiedades basicas de texto que vamos a ver ahora, vamos a poder estilizar nuestro texto de muchisimas maneras y hacer todo mas bonito. No son muchas y son bastante sencillas
                    y autodescriptivas, asi que vamos una por una.
                </p>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <CodeTextCSS code={`.texto-de-ejemplo-color {
    color: red
}`}/>
                    <CodeTextHTML code={`<p className="texto-de-ejemplo-color">
    Texto de ejemplo. Esta es una etiqueta <b>p</b> que
    le puse como className "texto-de-ejemplo-color".
</p>`} />
                    <div style={{width: '900px'}}>
                        <p> <b><u>color</u></b>
                            <br />Esta propiedad ya la vimos y es sencilla, lo unico que hace es cambiar el texto de lo que haya dentro de ella. Si se pone en una etiqueta p, ese texto tendra color
                            rojo, si se pone en un boton el texto sera de color rojo, y en un div y en un span, y asi con todas las etiquetas.
                        </p>
                        <p className="texto-de-ejemplo-color">
                            Texto de ejemplo. Esta es una etiqueta <b>p</b> que 
                            le puse como className "texto-de-ejemplo".
                        </p>
                    </div>
                    
                </div>
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <div style={{width: '600px'}}>
                        <p> <b><u>font-family</u></b>
                            <br />Esta propiedad sirve para cambiar la fuente. Hay varias ya predefinidas que se pueden usar y
                            VS Code te ayuda a autocompletar y seleccionarlas mas rapido. Se pueden usar fuentes externas pero eso es un tema aparte.
                        </p>
                        <p className="texto-de-ejemplo-fuente">
                            Texto de ejemplo. Esta es una etiqueta <b>p</b> que 
                            le puse como className "texto-de-ejemplo-fuente".
                        </p>
                    </div>
                    <CodeTextCSS code={`.texto-de-ejemplo-fuente {
    font-family: 'Times New Roman', Times, serif;
}`}/>
                    <CodeTextHTML code={`<p className="texto-de-ejemplo-fuente">
    Texto de ejemplo. Esta es una etiqueta <b>p</b> que
    le puse como className "texto-de-ejemplo-fuente".
</p>`} />
                </div>

                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <CodeTextCSS code={`.texto-de-ejemplo-size {
    font-size: 22px;
}`}/>
                    <CodeTextHTML code={`<p className="texto-de-ejemplo-size">
    Texto de ejemplo. Esta es una etiqueta <b>p</b> que
    le puse como className "texto-de-ejemplo-size".
</p>`} />
                    <div style={{width: '900px'}}>
                        <p> <b><u>font-size</u></b>
                            <br />Esta propiedad es para cambiar el tamaño de fuente y admite los siguientes valores: xx-large, x-large, larger, large, medium, small, smaller,
                            x-small, xx-small. Tambien se le puede pasar un valor numerico y una medida, como por ejemplo 15px
                        </p>
                        <p className="texto-de-ejemplo-size">
                            Texto de ejemplo. Esta es una etiqueta <b>p</b> que 
                            le puse como className "texto-de-ejemplo".
                        </p>
                    </div>
                    
                </div>

                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <div style={{width: '900px'}}>
                        <p> <b><u>text-align</u></b>
                            <br />Esta propiedad es para poder decir donde se centra el texto que escribamos, si a la <b>izquierda {'(left)'}</b>, a la <b>derecha {'(right)'}</b> 
                            o al <b>centro {'(center)'}</b>. Tiene otras opciones disponibles pero  esas tres son las mas importantes de usar.
                        </p>
                    </div>
                    <CodeTextCSS code={`.texto-de-ejemplo-align {
    text-align: center;
}`}/>
                    <CodeTextHTML code={`<p className="texto-de-ejemplo-align">
    Texto de ejemplo con align centrado
</p>`} />
                </div>
                <p className="texto-de-ejemplo-align">
                    Texto de ejemplo con align centrado
                </p>

                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <CodeTextCSS code={`.texto-de-ejemplo-decoration {
    text-decoration-style: `+ decoration + `;
    text-decoration-line: `+ decorationLine + `;
}`}/>
                    <CodeTextHTML code={`<p className="texto-de-ejemplo-decoration">
    Texto de decoracion de ejemplo.
</p>`} />
                    <div style={{width: '850px'}}>
                        <p> <b><u>text-decoration-style y text-decoration-line</u></b>
                            <br />Text-decoration-style sirve para elegir el estilo de decoracion, vease el estilo de subrayado, y text-decoration-line es para indicar donde se subraya. Tambien existe 
                            <b>texto-decoration-color</b> para cambiar el color de la linea.
                            Viene en varios estilos asi que aca te 
                            dejo botones interactivos para que juegues y veas como cambia dependiendo que elijas:
                        </p>
                    </div>
                    
                </div>
                <p style={{fontSize: 'larger', textDecorationStyle: decoration, textDecorationLine: decorationLine}}>
                    Texto de decoracion de ejemplo.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <p>text-decoration-style:</p>
                    <div>
                        <button className='boton-decoration'onClick={() => setDecoration('solid')} >solid</button>
                        <button className='boton-decoration'onClick={() => setDecoration('dashed')} >dashed</button>
                        <button className='boton-decoration'onClick={() => setDecoration('dotted')}>dotted</button>
                        <button className='boton-decoration'onClick={() => setDecoration('double')}>double</button>
                        <button className='boton-decoration'onClick={() => setDecoration('wavy')}>wavy</button>
                    </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                    <p>text-decoration-line:</p>
                    <div>
                        <button className='boton-decoration'onClick={() => setDecorationLine('underline')}>underline</button>
                        <button className='boton-decoration'onClick={() => setDecorationLine('overline')}>overline</button>
                        <button className='boton-decoration'onClick={() => setDecorationLine('line-through')}>line-through</button>
                    </div>
                </div>
                <p>
                    Con todo esto visto, veamos un ejemplo que combine todos los estilos de texto en uno mismo:
                </p>
                <CodeTextHTML code={`<p className="texto-ejemplo-muy-estilizado">
    Texto de ejemplo muy estilizado.
</p>`} />
                <CodeTextCSS code={`.texto-ejemplo-muy-estilizado {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; /*Cambiamos la font*/
    color: crimson; /*Cambiamos el color del texto*/
    text-decoration-style: double; /*Cambiamos el estilo de subrayado*/
    text-decoration-line: underline; /*Indicamos donde aparece ese subrayado*/
    text-decoration-color: blue; /*Cambiamos el color del subrayado*/
    text-align: center; /*Alineamos el texto al centro*/
    font-size: 35px; /*Cambiamos el tamaño de la letra*/
}`} />
                <p className="texto-ejemplo-muy-estilizado">
                    Texto de ejemplo muy estilizado.
                </p>
                <p> 
                    Todas estas opciones de estilo, las mostre como ejemplo en etiquetas <b>&lt;p&gt;</b>, pero podrian usarse para estilizar un <b>&lt;div&gt;</b> o un <b>&lt;button&gt;</b>,
                    por ejemplo. Siempre se pueden usar cuando el contenido sea texto. Al usarlas en un div, lo que pasaria es que todo el texto que aparezca dentro se veria afectado, pero no
                    el texto de botones.
                    Aca va otro ejemplo para que se entienda a lo que voy, utilizando la misma clase de CSS que antes:
                </p>
                <CodeTextHTML code={`<div className="texto-ejemplo-muy-estilizado">
    Texto de ejemplo muy estilizado.
    <p>Otro texto de ejemplo muy estilizado</p>
    
    <div>
        <a>Otro texto de ejemplo mas</a>
        <button>Boton de ejemplo </button>
        <button className="texto-ejemplo-muy-estilizado">Boton de ejemplo </button>
    </div>
</div>`} />
                <div className="texto-ejemplo-muy-estilizado">
                    Texto de ejemplo muy estilizado.
                    <p>Otro texto de ejemplo muy estilizado</p>
                    <div>
                        <a>Otro texto de ejemplo mas</a>
                        <button>Boton de ejemplo </button> 
                        <button className="texto-ejemplo-muy-estilizado">Boton de ejemplo </button>
                    </div>
                </div>
                <p>Notaras como el boton estilizado no quedo bien, veamos como solucionar eso en la siguiente seccion y ademas hacerlo mas bonito.</p>
                <h2>Espacios, bordes y tamaños</h2>
                <p>
                    Ahora vamos a ver propiedades utiles para los <b>bordes y el tamaño de nuestro contenido</b>. Pero antes, para hacer la explicación mas facil y entendible, veamos una explicacion
                    de una propiedad de estilo sencilla que ya vimos pero no explique: El <b>background-color</b>, que sirve justamente para cambiar el color de fondo de un elemento, como
                    de un <b>&lt;button&gt;</b> o de un <b>&lt;div&gt;</b> o de <b>&lt;p&gt;</b>. Aca hay un ejemplo visual:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow">
    Color de fondo de este div cambiado a yellow
</div>`} 
                />
                    <CodeTextCSS code={`.fondo-yellow {
    background-color: yellow;
}`} />
                </div>
                <div className="fondo-yellow">
                    Color de fondo de este div cambiado a yellow
                </div>
                <p>Es solo eso, y ahora que lo sabemos nos ayuda visualmente a ver las siguientes 2 propiedades que siguen.</p>

                <h3><u>padding y margin</u></h3>
                <p>
                    Estas 2 propiedades son similares ya que ambas son para manejar <b>el espacio de nuestros elementos</b>, pero ambas trabajan de una manera distinta.
                </p>
                <p>
                    El <b>padding</b> sirve para manejar el <b>espacio interno</b> que hay entre un contenido y el borde del elemento. Se puede usar <b>padding</b> que afecta ese espacio
                    en todas las direcciones o se puede usar solo una, o varias a la vez, de sus variantes para manejar ese espacio interno de distintos lados. Las variantes 
                    son <b>padding-left, padding-right, padding-bottom</b> y <b>padding-top</b>. Si no es visualmente no creo que se aprecie asi que va ejemplo:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow">
    Un div sin padding
</div>
<div className="fondo-cyan-con-padding">
    Un div con padding
</div>`} 
                />
                    <CodeTextCSS code={`.fondo-yellow {
    background-color: yellow;
}
.fondo-cyan-con-padding {
    background-color: cyan;
    padding: 50px;
}`} />
                </div>
                <div className="fondo-yellow">
                    Un div sin padding
                </div>
                <div className="fondo-cyan-con-padding">
                    Un div con padding
                </div>
                <p>
                    Como ves, el texto del div que tiene padding, aparece alejado de los bordes del elemento. Aparece alejado especificamente 50px en todas las direcciones, aunque del lado
                    derecho no se aprecie porque el texto no llegue hasta alla. Otro ejemplo que podes pensar es este fondo blanco en el que estas leyendo. ¿Notaste como el texto no aparece
                    pegado a los bordes como el div con fondo amarillo de arriba? Eso es gracias a la propiedad de padding que le aplique a este div que contiene todo lo que estoy escribiendo.
                </p>
                <p>
                    Ahora, yendo a la propiedad de <b>margin</b>, sirve para manejar el <b>espacio externo</b> de un elemento con otros elementos. Si prestas atencion, los 2 divs de arriba, el 
                    amarillo y el cyan, estan pegados.¿Pero y si quiero que esten mas separados? Bueno, margin sirve para eso, para separar elementos. Al igual que padding, se puede usar <b>margin</b> que afecta
                    el espacio entre elementos en todas las direcciones, o se puede usar solo una, o varias a la vez, de sus variantes para manejar ese espacio externo. Las variantes, igual que
                    en padding, son <b>margin-left, margin-right, margin-bottom</b> y <b>margin-top</b>. Ejemplo visual, solo con margin-top, para separar ambos divs
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow">
    Un div sin padding
</div>
<div className="fondo-cyan-con-margin">
    Un div con margin-top
</div>`} 
                />
                    <CodeTextCSS code={`.fondo-yellow {
    background-color: yellow;
}
.fondo-cyan-con-margin {
    background-color: cyan;
    margin-top: 50px;
}`} />
                </div>
                <div className="fondo-yellow">
                    Un div sin padding
                </div>
                <div className="fondo-cyan-con-margin">
                    Un div con margin-top
                </div>
                <p>
                    Estas propiedades de margin y padding, en estos ejemplos las aplique a divs, pero tambien se pueden aplicar a <b>&lt;img&gt;</b>, a <b>&lt;p&gt;</b>, a <b>&lt;button&gt;</b>, 
                    a varios elementos, no estan restringidas a divs.
                </p>
                <h3><u>width y height</u></h3>
                <p>
                    <b>width y height</b> son sencillas, simplemente establecen <b>el alto</b> y <b>el ancho</b> que un elemento va a tener. Nuevamente veamos un ejemplo, con un div, aunque se pueden usar con otros elementos
                    y mas adelante vamos a ver que eso es muy muy util.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-height100-width100 {
    background-color: yellow;
    width: 100px;
    height: 100px;
}`}/>
                    <div className="fondo-yellow-height100-width100">
                        Texto de ejemplo medianamente largo 
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-height50-width500 {
    background-color: yellow;
    width: 500px;
    height: 50px;
}`}/>
                    <div className="fondo-yellow-height50-width500">
                        Texto de ejemplo largo para que ocupe todo el div posible
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-height100-width300 {
    background-color: yellow;
    width: 300px;
    height: 100px;
}`}/>
                    <div className="fondo-yellow-height100-width300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam quibusdam ducimus impedit in enim rem atque commodi unde. Sapiente dolor omnis mollitia ratione itaque deserunt exercitationem quae minus hic.
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-height100-width1000 {
    background-color: yellow;
    width: 1000px;
    height: 100px;
}`}/>
                    <div className="fondo-yellow-height100-width1000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestias ex saepe fugiat odio deserunt necessitatibus libero vitae delectus! Quia obcaecati corporis repellat nulla? Commodi non consequuntur repellendus quam corporis!
                    </div>
                </div>
                <p>
                    Notaras como en uno de los casos el contenido se escapa del div, porque el texto es muy largo. Bueno, hay varias formas de solucionarlo, pero si quisiera que el texto se viera dentro del
                    div, deberia dejar que el height se calcule automaticamente. Eso es sencillo, ya que width y height, ademas de recibir medidas, pueden recibir valores especiales para calcular
                    automaticamente su ancho/alto, los cuales son: <b>fit-content</b>, <b>max-content</b> y <b>min-content</b>. Centremonos ahora en <b>max-content</b> solamente.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-maxHeight-width200 {
    background-color: yellow;
    width: 200px;
    height: max-content;
}`}/>
                    <div className="fondo-yellow-maxHeight-width200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam quibusdam ducimus impedit in enim rem atque commodi unde. Sapiente dolor omnis mollitia ratione itaque deserunt exercitationem quae minus hic.
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-height25-maxWidth {
    background-color: yellow;
    width: max-content;
    height: 25px;
}`}/>
                    <div className="fondo-yellow-height25-maxWidth">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam quibusdam ducimus impedit in enim rem atque commodi unde. Sapiente dolor omnis mollitia ratione itaque deserunt exercitationem quae minus hic.
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.fondo-yellow-maxHeight-maxWidth {
    background-color: yellow;
    width: max-content;
    height: max-content;
}`}/>
                    <div className="fondo-yellow-maxHeight-maxWidth">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam quibusdam ducimus impedit in enim rem atque commodi unde. Sapiente dolor omnis mollitia ratione itaque deserunt exercitationem quae minus hic.
                    </div>
                </div>
                <p>
                    En el primer ejemplo, la altura se calculo automaticamente para que el contenido del div se viera completo a pesar de tener un ancho fijo muy pequeño
                    En el segundo ejemplo, el ancho se calculo automaticamente para ocupar todo el contenido posible, aunque no basto debido a la poca altura que tenia ese div.
                    Finalmente, en el tercero, deje que tanto el width como el height se calculen automaticamente para que el contenido ocupe lo que tenga que ocupar.
                </p>
                <p>
                    Estas propiedades de <b>width</b> y <b>height</b> nos sirven para poder manejar tambien imagenes, botones y mas elementos. Ya que estamos, arreglemos el boton de 
                    antes que se veia muy chico para el texto de ejemplo con muchos estilos.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'25px'}}>
                    <CodeTextCSS code={`.texto-ejemplo-muy-estilizado {
    font-family: 'Lucida Sans';
    color: crimson;
    text-decoration-style: double;
    text-decoration-line: underline;
    text-decoration-color: blue;
    text-align: center;
    font-size: 35px;
}
.boton-maxWidth-maxHeight {
    background-color: black;
    width: max-content;
    height: max-content;
}`}/>
                    <CodeTextHTML code={`------------------------------------------------v----------------------------
<button className="texto-ejemplo-muy-estilizado   boton-maxWidth-maxHeight">
    Boton de ejemplo
</button>`} />
                    <button className="texto-ejemplo-muy-estilizado boton-maxWidth-maxHeight">
                        Boton de ejemplo
                    </button>
                </div>
                <p>
                    Nuestro boton ahora quedo perfecto, y si sos atenta, veras que en el className del boton le aplicamos al mismo tiempo <b>2 estilos</b>, separados por un espacio. 
                    Eso es algo posible, no hace falta escribir otro estilo de css con todos los mismos estilos que tiene otro y añadirle una boludez. Se pueden aplicar 2 estilos en 
                    simultaneo siempre que tenga sentido, por ejemplo no tendria sentido aplicar estos 2 estilos a un mismo elemento:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.sin-sentido {
    color:blue;
    background-color: gold;
}
.sin-sentido2 {
    color: red;
    background-color: black;
}`}/>
                    <CodeTextHTML code={`
<button className="sin-sentido   sin-sentido-dos">
    Boton de ejemplo
</button>`} />
                    <button className="sin-sentido sin-sentido-dos">
                        Boton de ejemplo
                    </button>
                </div>
                <p>
                    Como ves, el primer estilo de color azul y fondo dorado se ignoro completamente, ya que el segundo estilo le piso todos los datos. Este es un caso que no tiene sentido, o
                    sea, se puede hacer, pero no logras nada haciendolo ya que lo que hace uno lo termina pisando el otro.
                </p>
                <h3><u>Bordes estilizados</u></h3>
                <p>
                    Los bordes de los componentes se pueden estilizar con varias propiedades. Empecemos con algunas sencillas: <b>border-color</b> que sirve para cambiar el color del borde de un
                    elemento, <b>border-width</b> que sirve para cambiar el grosor, y <b>border-style</b>, que sirve, como text-decoration-style, para cambiar el estilo del borde de un componente.
                    Tiene multiples estilos, y aunque no vayamos a usar todos, te los muestro. Creo que se explican mejor visualmente, asi que va un ejemplo interactivo como antes, donde el ancho
                    es de 5 pixeles y el color de borde es rojo, y vos podes jugar cambiandole y viendo los distintos estilos:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`bordesEstilizados {
    background-color: black;
    color: white;
    border-color: red;
    border-width: 5px;
    border-style: ` + borderStyle +` 
}`}/>
                    <button style={{borderStyle: borderStyle, borderColor: 'red', backgroundColor: 'black', color: 'white', borderWidth: '5px'}}>Boton de ejemplo</button>
                    <img style={{borderStyle: borderStyle, borderColor: 'red', backgroundColor: 'black', color: 'white', borderWidth: '5px'}} 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg"
                        width={200}
                    />
                </div>
                <div style={{borderStyle: borderStyle, borderColor: 'red', backgroundColor: 'black', color: 'white', borderWidth: '5px'}}>Div de ejemplo</div>
                <div style={{display: 'flex', gap: '20px', marginTop: '15px', justifyContent: 'center'}}>
                    <button className="boton-decoration" onClick={() => setBorderStyle('solid')}>solid</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('dashed')}>dashed</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('dotted')}>dotted</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('double')}>double</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('groove')}>groove</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('hidden')}>hidden</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('inset')}>inset</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('outset')}>outset</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('ridge')}>ridge</button>
                    <button className="boton-decoration" onClick={() => setBorderStyle('none')}>none</button>
                </div>
                <p style={{textAlign:'right', marginBottom:'35px'}}>{'('}Nota, no se la diferencia entre hidden y none, pero no debe ser importante. De todas formas solo vamos a usar el estilo solid en la cursada seguro {')'}</p>
                
                
                <p>
                    Otra propiedad util para bordes es <b>border-radius</b>, que sirve para cambiar el radio de los bordes. Dicho de otra manera mas sencilla, con esta propiedad podes aplicar bordes
                    redondeados a componentes. Aca va otro ejemplo interactivo para que puedas jugar. Podes poner la medida en pixeles, px como venimos haciendo, o con porcentaje, por ejemplo 25%. La
                    diferencia entre usar pixeles o porcentaje se nota bastante.
                </p>
                <form>
                    <label>Completa el campo poniendo un numero y al lado px o %, y mira como las esquinas/bordes  cambian: <br /></label>
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="border-radius"
                        onChange={(e) => setBorderRadius(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                </form>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`bordesEstilizados {
    background-color: white;
    color: black;
    border-color: blue;
    border-width: 2px;
    border-style: solid;
    border-radius: ` + borderRadius + ` 
}`}/>               
                    <button style={{borderStyle: 'solid', borderColor: 'blue', backgroundColor: 'white', color: 'black', borderWidth: '2px', borderRadius: borderRadius}}> Ejemplo</button>
                    <img style={{borderStyle: 'solid', borderColor: 'blue', backgroundColor: 'white', color: 'black', borderWidth: '2px', borderRadius: borderRadius}} 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Example_image.svg"
                        width={200}
                    />
                </div>
                <div style={{borderStyle: 'solid', borderColor: 'blue', backgroundColor: 'white', color: 'black', borderWidth: '2px', padding: '25px', borderRadius: borderRadius}}>
                    Div de ejemplo que tambien tiene un poco de padding.
                </div>
                
                <h3><u>box-shadow</u></h3>
                <p>
                    <b>box-shadow</b> es una propiedad que en esencia es sencilla, pero como tiene multiples parametros, se hace complicado de entender. Asi que empecemos de a 
                    poco. <b>box-shadow</b> sirve para darle a un elemento una sombra. En su forma mas simple de usar recibe <b>2</b> parametros, que son la posicion <b>horizontal y 
                    vertical</b> de la sombra. Estos son numeros de pixeles, por ejemplo 10px, y ademas se pueden pasar valores negativos, como -15px para que mueva la sombra en otra
                    dirección. Podes probarlo, ponele a ambos 10px y fijate como cambia y anda jugando con valores negativos y positivos:
                </p>
                <form>
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion horizontal"
                        value={horizontalShadow}
                        onChange={(e) => setHorizontalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion vertical"
                        value={verticalShadow}
                        onChange={(e) => setVerticalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                </form>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`divConSombra {
    background-color: orange;
    height: 100px;
    padding: 15px;
    box-shadow: ` + horizontalShadow + ` ` + verticalShadow  + ` 
}`}/>               
                    <div style={{background: 'orange', height: '100px', padding: '15px', boxShadow: horizontalShadow + " " + verticalShadow}}>Un div que va a tener una sombra</div>
                </div>
                

                <p>Otro parametro mas que puede recibir es el <b>color</b>. Nuevamente te lo dejo para que juegues. De paso te dejo 
                un <a href="https://www.w3schools.com/cssref/css_colors.php" target="_blank"> enlace</a> para que 
                veas <b>todos los colores</b> que podes poner y son validos. Siempre arrancan en minuscula.</p>
                <form>
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion horizontal"
                        value={horizontalShadow}
                        onChange={(e) => setHorizontalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion vertical"
                        value={verticalShadow}
                        onChange={(e) => setVerticalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Color"
                        value={colorShadow}
                        onChange={(e) => setColorShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                </form>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`divConSombra {
    background-color: orange;
    height: 100px;
    padding: 15px;
    box-shadow: ` + horizontalShadow + ` ` + verticalShadow  + ` ` + colorShadow + ` 
}`}/>               
                    <div style={{background: 'orange', height: '100px', padding: '15px', boxShadow: horizontalShadow + " " + verticalShadow + " " + colorShadow}}
                    >
                        Un div que va a tener una sombra de color.
                    </div>
                </div>
                <p>Otro parametro que tambien puede recibir es el <b>blur</b>, que va antes del color. Este se pone en pixeles antes del color, y lo que hace es afectar como se ve la sombra,
                le da como un toque borroso. Probalo poniendo de blur 15px:
                </p>
                <form>
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion horizontal"
                        value={horizontalShadow}
                        onChange={(e) => setHorizontalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion vertical"
                        value={verticalShadow}
                        onChange={(e) => setVerticalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Blur"
                        value={blurShadow}
                        onChange={(e) => setBlurShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Color"
                        value={colorShadow}
                        onChange={(e) => setColorShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                </form>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`divConSombra {
    background-color: orange;
    height: 100px;
    padding: 15px;
    box-shadow: ` + horizontalShadow + ` ` + verticalShadow  + ` ` + blurShadow + ` ` + colorShadow + `  
}`}/>               
                    <div style={{
                        background: 'orange', 
                        height: '100px', 
                        padding: '15px', 
                        boxShadow: horizontalShadow+" "+verticalShadow+" "+blurShadow+" "+colorShadow}}
                    >
                        Un div que va a tener una sombra blurreada
                    </div>
                </div>
                <p>Y ahora si, el ultimo parametro que le podemos pasar es <b>spread</b>, que es como para cambiar el tamaño de la sombra, y al igual que blur, se escribe con
                pixeles. Va entre el blur y el color. Podes probarlo y jugar. Algo muy divertido de esta propiedad es que <u>si dejas en 0px a la posicion vertical y horizontal</u> y 
                jugas cambiando solo blur y spread, vas a darle como un <b>estilo de brillo</b> a tu elemento. Probalo:
                </p>
                <form>
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion horizontal"
                        value={horizontalShadow}
                        onChange={(e) => setHorizontalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Posicion vertical"
                        value={verticalShadow}
                        onChange={(e) => setVerticalShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Blur"
                        value={blurShadow}
                        onChange={(e) => setBlurShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Spread"
                        value={spread}
                        onChange={(e) => setSpread(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px', margin: '10px'
                        }}
                    />
                    <input 
                        type="text" 
                        name="borderRadius" 
                        placeholder="Color"
                        value={colorShadow}
                        onChange={(e) => setColorShadow(e.target.value)}
                        style={{
                            padding: '10px', borderColor: 'grey', borderRadius: '15px'
                        }}
                    />
                </form>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'55px'}}>
                    <CodeTextCSS code={`divConSombra {
    background-color: orange;
    height: 100px;
    padding: 15px;
    box-shadow: ` + horizontalShadow + ` ` + verticalShadow  + ` ` + blurShadow + ` `+ spread + ` ` + colorShadow + `  
}`}/>               
                    <div style={{
                        background: 'orange', 
                        height: '100px', 
                        padding: '15px', 
                        boxShadow: horizontalShadow+" "+verticalShadow+" "+blurShadow+" "+spread+" "+colorShadow}}
                    >
                        Un div que va a tener una sombra con spread
                    </div>
                    <div style={{
                        background: 'orange', 
                        height: '100px', 
                        padding: '15px', 
                        boxShadow: horizontalShadow+" "+verticalShadow+" "+blurShadow+" "+spread+" "+colorShadow,
                        borderRadius: '25px'
                        }}
                    >
                        Un div que va a tener una sombra con spread y tambien le puse border radius
                    </div>
                </div>
                <p>Ahora, con todo esto que vimos, tratemos de estilizar un boton bien bonito:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.boton-muy-bonito {
    font-family: 'Times New Roman';
    font-size: large;
    color: navy;
    background-color: seashell;
    text-decoration-style: solid;
    text-decoration-line: underline;
    border-color: navy;
    border-style: solid;
    border-width: 3px;
    border-radius: 25px;
    padding: 15px;
    height: max-content;
    width: max-content;
}
`}/>
                    <div style={{width: '1300px'}}>
                        <CodeTextHTML code={`<button className="boton-muy-bonito">Boton muy bonito</button>`}/>
                        <button className="boton-muy-bonito">Boton muy bonito</button>
                        <p>
                            Leyendo en orden: a este boton se le cambio la <b>familia de letra</b> por <i>Times New Roman</i>, se le cambio el <b>tamaño de fuente</b> a <i>large</i>, se 
                            le cambio el <b>color</b> a <i>navy</i>, que es un azul oscuro, y se le cambio el <b>color</b> de fondo a <i>seashell</i>. Con <b>text-decoration-style</b> y
                            con <b>text-decoration-line</b> le pusimos un <i>subrayado solido debajo</i>. Le cambiamos el <b>color del borde</b> a <i>navy</i> tambien, el <b>estilo del 
                            borde</b> a <i>solid</i>, le cambiamos el <b>ancho del borde</b> a <i>3 pixeles</i> y el <b>radio del borde</b> a <i>25 pixeles</i> para que tenga ese efecto de
                            redondeo. Por ultimo, le puse un <b>padding</b> para que el texto de adentro no este pegado a los bordes, y deje que el <b>height</b> y el <b>width</b> se calculen
                            automaticamente
                        </p>
                        <p>
                            Quedo bonito dentro de todo, pero ahora me pregunto ¿Cómo puedo hacer para que cuando pase el mouse por arriba <b>cambie su estilo</b>? Este boton solo se agranda, 
                            pero me gustaria darle un efecto de brillo con box-shadow solo cuando paso el mouse por arriba, y cambiarle el fondo y el color de la letra. 
                            ¿Se podra de alguna manera?
                        </p>
                        <p> 
                            La respuesta es: <b>¡SI!</b> Pero es necesario algo mas de lo que tenemos hasta ahora. Necesitamos poder controlar el estilo de un elemento en un momento determinado, 
                            que es cuando se pasa el mouse por arriba. Esto se puede lograr con las <b>pseudo-clases de css</b>. 
                        </p>
                    </div>
                </div>


                <h3><u>Pseudo-clases, estado hover y active</u></h3>
                <p>
                    Las <b>pseudo-clases</b> de css son clases temporales que un elemento toma en un momento determinado. Por ejemplo, cuando se pasa el mouse por arriba, o cuando se 
                    clickea un elemento, esos son momentos determinados y temporales donde quiero que mi elemento tenga un estilo distinto. ¿Como se logran en css? Para eso, es necesario
                    declararlo en el archivo css en otro cuerpo, donde pongo el mismo nombre de clase, pero seguido del nombre, escribo dos puntos y el estado especifico que quiero estilizar.
                    Veamoslo con un ejemplo muy sencillo, en este caso del estado <b>hover</b> que se usa para cambiar el estado cuando pasas el mouse por arriba de un elemento:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextCSS code={`.div-de-ejemplo {
    background-color: orange
}`}/>            
                    <CodeTextCSS code={`.div-de-ejemplo:hover {
    background-color: cyan
}`}/>
                    <CodeTextHTML code={`<div className="div-de-ejemplo">
    Div que cuando pases el mouse por arriba cambiara de color el fondo
</div>`}/>
                </div>
                <div className="div-de-ejemplo">Div que cuando pases el mouse por arriba cambiara de color el fondo</div>
                <p>
                    Fijate como hay dos estilos CSS para "div-de-ejemplo" pero uno dice <b>":hover"</b>. Eso indica que cuando se pase el mouse por arriba de aquellos elementos cuya clase
                    sea "div-de-ejemplo", en su estado normal, su color de fondo sera naranja, pero cuando pase el mouse por arriba, su estilo cambiara al que indique "div-de-ejemplo:hover". 
                    En este caso cambia su color de fondo a cyan. Pero podria haberle cambiado cualquier cosa: El margin, el padding, el border color, border radius, border-style, height, width,
                    tamaño, familia de fuente, todo lo que vimos se puede cambiar si asi lo quiero con hover.
                </p>
                <p>
                    Perfecto, pongamosle entonces un estado de hover al boton anterior, algo sencillo que le de brillo con box-shadow de color <i>royalblue</i>.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'start', gap:'15px'}}>
                    <CodeTextCSS code={`.boton-muy-bonito-v2 {
    font-family: 'Times New Roman';
    font-size: large;
    color: navy;
    background-color: seashell;
    text-decoration-style: solid;
    text-decoration-line: underline;
    border-color: navy;
    border-style: solid;
    border-width: 3px;
    border-radius: 25px;
    padding: 15px;
    height: max-content;
    width: max-content;
}`}/>
                    <div>
                        <CodeTextCSS code={`.boton-muy-bonito-v2:hover {
    box-shadow: 0px 0px 5px 5px royalblue
}`}/>
                        <CodeTextHTML code={`<button className="boton-muy-bonito-v2">Boton muy bonito con hover</button>`}/>
                        <button style={{margin: '10px'}} className="boton-muy-bonito-v2">Boton muy bonito con hover</button>
                    </div>
                </div>
                <p>
                    Bueno, bien, ahora pongamosnos locos y cambiemosle el color de fondo y del texto, pongamosle una sombrita con box-shadow, y cambiemosle el border-width a 0px, 
                    para ver como queda:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'start', gap:'15px'}}>
                    <CodeTextCSS code={`.boton-muy-bonito-v3 {
    font-family: 'Times New Roman';
    font-size: large;
    color: navy;
    background-color: seashell;
    text-decoration-style: solid;
    text-decoration-line: underline;
    border-color: navy;
    border-style: solid;
    border-width: 3px;
    border-radius: 25px;
    padding: 15px;
    height: max-content;
    width: max-content;
}`}/>
                    <div>
                        <CodeTextCSS code={`.boton-muy-bonito-v3:hover {
    background-color: navy;
    color: seashell;
    border-width: 0px;
    box-shadow: 0px 0px 5px 5px royalblue
}`}/>
                        <CodeTextHTML code={`<button className="boton-muy-bonito-v3">Boton muy bonito con hover</button>`}/>
                        <button style={{margin: '10px'}} className="boton-muy-bonito-v3">Boton muy bonito con hover</button>
                    </div>
                </div>
                <p>
                    Perfecto, ahora esta bastante más profesional. Pero todavia falta algo, y es que cambia muy brusco de un estado a otro. Deberia de haber una forma de que el boton tarde un
                    poco más de cambiar de estilo. Para eso, tenes una propiedad CSS llamada <b>transition</b>. Esta propiedad indica cuanto tiempo tarda en pasar un elemento de un estado a otro.
                    Es util para temas esteticos, y se pone en el estilo principal, no en el de hover {'(Se puede poner en hover pero hace otra cosa, no te voy a marear)'}. Veamoslo en funcionamiento:
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'start', gap:'15px'}}>
                    <CodeTextCSS code={`.boton-muy-bonito-v4 {
    font-family: 'Times New Roman';
    font-size: large;
    color: navy;
    background-color: seashell;
    text-decoration-style: solid;
    text-decoration-line: underline;
    border-color: navy;
    border-style: solid;
    border-width: 3px;
    border-radius: 25px;
    padding: 15px;
    height: max-content;
    width: max-content;

    //Aca va transition
    transition: 400ms
}`}/>
                    <div>
                        <CodeTextCSS code={`.boton-muy-bonito-v4:hover {
    background-color: navy;
    color: seashell;
    border-width: 0px;
    box-shadow: 0px 0px 5px 5px royalblue
}`}/>
                        <CodeTextHTML  code={`<button className="boton-muy-bonito-v4">Boton muy bonito con hover</button>`}/>
                        <button style={{margin: '10px'}} className="boton-muy-bonito-v4">Boton muy bonito con hover</button>
                    </div>
                </div>
                <p>
                    Aca vemos en el estilo principal, que le puse un <b>transition</b> con un valor de 400ms. Esto lo que hace es que cuando el elemento en cuestion, en este caso un boton, 
                    cambie de un estado a otro, eso demorará 400 milisegundos. Cuando <b>paso el mouse por arriba</b>, tarda 400 milisegundos en cambiar, y cuando <b>saco el mouse de arriba</b>, 
                    tarda 400 milisegundos en cambiar.
                    <br /> Se puede poner un tiempo distinto, incluso segundos, y eso cambia la velocidad en la que tarda en pasar de un estado a otro. Aca te dejo varios botones con distintos
                    tiempos de transiciones:
                </p>
                <div style={{display:'flex', flexDirection:'row', gap: '25px'}}>
                    <button className="boton-muy-bonito-v3" style={{transition: '0ms', width: '8rem'}}>0ms</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '100ms', width: '8rem'}}>100ms</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '400ms', width: '8rem'}}>400ms</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '500ms', width: '8rem'}}>500ms</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '1s', width: '8rem'}}>1s</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '3s', width: '8rem'}}>3s</button>
                    <button className="boton-muy-bonito-v3" style={{transition: '5s', width: '8rem'}}>5s</button>
                </div>

                <p style={{marginTop: '40px'}}>
                    El otro estado, <b>:active</b> es un estado que se aplica cuando se hace click en un elemento. Se puede usar en cualquier elemento, aunque tiene mas sentido en los botones. 
                    Tratemos de que el boton anterior tenga un estado <b>:active</b>. Hagamos que el mismo ejemplo anterior cambie el color de texto, el de fondo y el de borde solo cuando se lo clickea:
                </p>
                <div>
                    <CodeTextCSS code={`.boton-muy-bonito-v4:active {
    background-color: seashell;
    color: navy;
    border-color: navy;
    border-width: 3px;
}`}/>
                    <button style={{marginTop: '20px',marginBottom: '20px'}} className="boton-muy-bonito-v4">Clickeame asi cambia mi estilo</button>
                </div>
                <p>
                    Bueno, funciona, pero el tiempo de transicion tambien se le paso a este estado. Tendria que ponerle una transición de cero mili segundos cuando el estado esta activo, 
                    pero que cuando se pasa el mouse por arriba o se saca el mouse de arriba la transicion permanezca. Esto lo podemos hacer facilmente, solo tenemos que ponerle transición de
                    cero milisegundos al estado de active, y dejar la otra transición como estaba:
                </p>
                <div>
                    <CodeTextCSS code={`.boton-muy-bonito-v4:active {
    background-color: seashell;
    color: navy;
    border-color: navy;
    border-width: 3px;
    //Esto de aca mismo
    transition: 0ms
}`}/>
                    <button style={{marginTop: '20px',marginBottom: '20px'}} className="boton-muy-bonito-v4 transicion-0ms">Clickeame asi cambia mi estilo</button>
                </div>
                <p>
                    Ahora esta mucho mejor. Y ya con todo esto que vimos tenemos una base solida para estilizar y hacer cosas medianamente bonitas. Podemos manipular las letras, 
                    manejar el espacio de los objetos, el ancho y el alto, los bordes, los colores, los fondos, como se comporta al pasarle el mouse por arriba o al clickearlo. Nos queda
                    un ultimo tema de CSS, pero es bastante complicado, asi que no te preocupes si no lo entendes. A mi me costo un monton entenderlo en su momenot, pero bueno, yo no tenia 
                    nadie que me ayude, asi que quizas te sirva a aprenderlo mas facil y suavizarte el camino. De todas formas si llegaste hasta aca entendiendo todo, ya es un montón.
                </p>
                <h2><u>El display de un elemento</u></h2>
                <p>
                    <b>Display</b> es una propiedad de estilo que define como un elemento se comporta en la pagina. Vease, como ocupa el espacio y se relaciona con los demas elementos.
                    Por lo general, esta propiedad de estilo la vamos a usar en divs porque es dentro de los divs donde vamos a poner cosas adentro y nos ayuda a controlar como se comportan
                    esos elementos internos. Me parece que con ejemplos visuales se puede ver mejor, asi que vayamos con cada tipo de display.
                </p>
                <h3><u>Display block</u></h3>
                <p>
                    Este tipo de display ocupa todo el ancho posible y arranca en otra linea, este es digamos el estilo que un div tiene por defecto.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow  display-block">
    Este div tiene display block, fijate como ocupa todo el ancho que puede.
</div>
Y si pongo un texto por fuera del div aparece en otra linea, me fuerza a saltar la linea.`} 
                />
                    <CodeTextCSS code={`.fondo-yellow {
    background-color: yellow;
}`} />
                    <CodeTextCSS code={`.display-block {
    display: block;
}`} />
                </div>
                <div className="fondo-yellow  display-block">
                    Este div tiene display block, fijate como ocupa todo el ancho que puede.
                </div>
                Y si pongo un texto por fuera del div aparece en otra linea, me fuerza a saltar la linea.

                <h3><u>Display inline</u></h3>
                <p>
                    Este tipo de display ocupa solo el ancho de su contenido, y no arranca en otra linea. Tampoco se le puede cambiar el width ni el height.
                </p>
                <div style={{display: 'flex', flexDirection:'row',  alignItems: 'center', gap:'15px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow  display-block">
    Este div tiene display inline, fijate como solo ocupa lo que ocupe el contenido.
</div>
Y si pongo un texto aparece al lado, no salta de linea.`} 
                />
                    <CodeTextCSS code={`.fondo-yellow {
    background-color: yellow;
}`} />
                    <CodeTextCSS code={`.display-inline {
    display: inline;
}`} />
                </div>
                <div className="fondo-yellow  display-inline">
                    Este div tiene display inline, fijate como solo ocupa lo que ocupe el contenido.
                </div>
                Y si pongo un texto aparece al lado, no salta de linea.
                
                <h3><u>Display inline-block</u></h3>
                <p>
                    Se comporta exactamente igual que el display inline, con la diferencia de que inline-block si admite cambio de height y width.
                </p>

                <h3><u>Display flex</u></h3>
                <p>
                    Este tipo de display convierte un elemento en un <b>“contenedor flexible”</b>. Todos los elementos que tenga dentro se organizan usando un <i>"sistema inteligente
                    que facilita la alineación, la distribución y el espaciado".</i>
                    <br />Traducción porque ni yo lo entendería así: Es una forma de acomodar elementos uno al lado del otro, o uno debajo del otro, de forma sencilla.
                </p>
                <p>
                    Este es el mas dificil de entender en un principio porque tiene varias propiedades que lo acompañan para entender su funcionamiento,
                </p>
                <h3><u>flex-direction</u></h3>
                <p>
                    Esta propiedad es para manejar como van a acomodarse los elementos dentro del elemento con display flex. Tiene más, pero centremonos en dos valores que se le puede pasar
                    a esta propiedad: <b>Row</b> y <b>Column</b>. <b>Row</b>{'(fila)'} los pones uno al lado del otro, como en una misma fila, y <b>Column</b>{'(columna)'} los pone uno debajo
                    del otro, como si de columnas apiladas se tratase. Tiene otras 2 propiedades que con <b>column-reverse</b> y <b>row-reverse</b> pero no las voy a explicar porque ya me parece
                    demasiado.
                </p>
                <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow display-flex padding-25px">
    <div className="fondo-cyan padding-25px black-border">Elemento 1</div>
    <div className="fondo-cyan padding-25px black-border">Elemento 2</div>
    <div className="fondo-cyan padding-25px black-border">Elemento 3</div>
</div>`} />
                    <CodeTextCSS code= {`.display-flex {
    display: flex;
    flex-direction: ` + flexDirection + `
}`} />
                    <div style={{display: 'flex', flexDirection: 'column', gap: '2px', width: '500px', alignSelf: 'center'}}>
                        Te dejo esto para que juegues cambiarle el tipo de flex direction al ejemplo de abajo:
                            <select label='flex-direction' 
                                style={
                                    {
                                        height: 'min-content', width: '125px', color: 'black',
                                        padding: '10px', borderRadius: '5px'
                                    }
                                }
                                onChange={(e) => setFlexDirection(e.target.value)}
                                >
                            <option>row</option>
                            <option>column</option>
                        </select>
                    </div>
                    
                </div>
                <div className="fondo-yellow display-flex padding-25px" style={{flexDirection: flexDirection}}>
                    <div className="fondo-cyan padding-25px black-border">Elemento 1</div>
                    <div className="fondo-cyan padding-25px black-border">Elemento 2</div>
                    <div className="fondo-cyan padding-25px black-border">Elemento 3</div>
                </div>

                <h3><u>gap</u></h3>
                <p>
                    Esta propiedad es para manejar cuanta distancia entre si van a tener los elementos internos del div con display. Aca va un ejemplo en donde los elementos internos 
                    no van a estar pegados, van a estar separados entre si 7 pixeles:
                </p>
                <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                    <CodeTextHTML code={`<div className="fondo-yellow display-flex padding-25px">
    <div className="fondo-cyan padding-25px black-border">Elemento 1</div>
    <div className="fondo-cyan padding-25px black-border">Elemento 2</div>
    <div className="fondo-cyan padding-25px black-border">Elemento 3</div>
</div>`} />
                    <CodeTextCSS code= {`.display-flex {
    display: flex;
    flex-direction: ` + flexDirection + `;
    gap: 25px
}`} />
                    <div style={{display: 'flex', flexDirection: 'column', gap: '2px', width: '500px', alignSelf: 'center'}}>
                            <select label='flex-direction' 
                                style={
                                    {
                                        height: 'min-content', width: '125px', color: 'black',
                                        padding: '10px', borderRadius: '5px'
                                    }
                                }
                                onChange={(e) => setFlexDirection2nd(e.target.value)}
                                >
                            <option>row</option>
                            <option>column</option>
                        </select>
                    </div>
                    
                </div>
                <div className="fondo-yellow display-flex padding-25px" style={{flexDirection: flexDirection2nd, gap: '7px'}}>
                    <div className="fondo-cyan padding-25px black-border">Elemento 1</div>
                    <div className="fondo-cyan padding-25px black-border">Elemento 2</div>
                    <div className="fondo-cyan padding-25px black-border">Elemento 3</div>
                </div>
                <h3><u>align-items y justify-content</u></h3>
                <p>
                    Esta propiedades sirven para manejar la alineación de los elementos en ambos ejes, <b>justify-content</b> para el eje principal, y <b>align-items</b> para 
                    el eje secundario. Basicamente, para manejar como se reparte el espacio de los elementos en un contenedor con display flex.
                    <br /> Empecemos con <b>justify-content</b>, el cual sirve para alinear en el eje principal. Este eje es distinto, dependiendo de si el flex-direction es row
                    o column. <b>justify-content</b> tiene varios valores posibles: <b>'center</b>, que lo posiciona en el centro del eje, <b>'start'</b>, que lo posiciona en el
                    comienzo del contendor, <b>'end</b>, que lo posiciona al final del contenedor, <b>'space-between'</b> que hace que los elementos se peguen a los bordes,
                    y el espacio se reparte solo entre ellos; <b>'space-evenly'</b>, que hace que todo el espacio entre los elementos y los bordes sea el mismo, y <b>space-around</b> que
                    hace que el margin de los elementos se calcule solo y sea el mismo para todos, pero hace que el espacio entre elementos sea mayor.
                </p>
                
                <div>
                    Div con <b>display flex</b> y <b>flex-direction: row</b>
                    <div className="fondo-yellow display-flex padding-5px" style={{flexDirection: 'row', gap: '7px', justifyContent: justifyContent1, height: '320px', border:'solid black 2px'}}>
                        <div className="fondo-cyan padding-5px black-border">Elemento 1</div>
                        <div className="fondo-cyan padding-5px black-border">Elemento 2</div>
                        <div className="fondo-cyan  padding-5px black-border">Elemento 3</div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop:'15px'}}>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('center')}>justify-content: center</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('start')}>justify-content: start</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('end')}>justify-content: end</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('space-between')}>justify-content: space-between</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('space-evenly')}>justify-content: space-evenly</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent1('space-around')}>justify-content: around</button>
                </div>

                <div style={{marginTop: '85px'}}>
                    Div con <b>display flex</b> y <b>flex-direction: column</b>
                    <div className="fondo-yellow display-flex padding-5px" style={{flexDirection: 'column', gap: '7px', justifyContent: justifyContent2, height: '320px', border:'solid black 2px'}}>
                        <div className="fondo-cyan padding-5px black-border">Elemento 1</div>
                        <div className="fondo-cyan padding-5px black-border">Elemento 2</div>
                        <div className="fondo-cyan  padding-5px black-border">Elemento 3</div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '85px', marginTop:'15px'}}>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('center')}>justify-content: center</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('start')}>justify-content: start</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('end')}>justify-content: end</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('space-between')}>justify-content: space-between</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('space-evenly')}>justify-content: space-evenly</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent2('space-around')}>justify-content: around</button>
                </div>
                <p>
                    Ahora, pasando a <b>align-items</b>, que funciona de manera similar a justify content pero este modifica otro eje, y solo tiene 3 valores: <b>start</b> que lo posiciona
                    donde comienza el container flex, <b>center</b>, que lo posiciona en el centro, y <b>end</b>, que lo posiciona al final.
                </p>
                <div>
                    Div con <b>display flex</b> y <b>flex-direction: row</b>
                    <div className="fondo-yellow display-flex padding-5px" style={{flexDirection: 'row', gap: '7px', alignItems: alignItems1, height: '320px', border:'solid black 2px'}}>
                        <div className="fondo-cyan padding-5px black-border">Elemento 1</div>
                        <div className="fondo-cyan padding-5px black-border">Elemento 2</div>
                        <div className="fondo-cyan  padding-5px black-border">Elemento 3</div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop:'15px'}}>
                    <button className='boton-justifyContent' onClick={() => setAlignItems1('start')}>align-items: start</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems1('center')}>align-items: center</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems1('end')}>align-items: end</button>
                </div>
                <div style={{marginTop: '85px'}}>
                    Div con <b>display flex</b> y <b>flex-direction: column</b>
                    <div className="fondo-yellow display-flex padding-5px" style={{flexDirection: 'column', gap: '7px', alignItems: alignItems2, height: '320px', border:'solid black 2px'}}>
                        <div className="fondo-cyan padding-5px black-border">Elemento 1</div>
                        <div className="fondo-cyan padding-5px black-border">Elemento 2</div>
                        <div className="fondo-cyan  padding-5px black-border">Elemento 3</div>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '85px', marginTop:'15px'}}>
                    <button className='boton-justifyContent' onClick={() => setAlignItems2('start')}>align-items: start</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems2('center')}>align-items: center</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems2('end')}>align-items: end</button>
                </div>

                <p> 
                    Estas propiedades usadas en conjunto, permiten cosas de estilo muy interesantes y utiles. Te dejo un ejemplo para que juegues pero en lugar de elementos celestes,
                    te dejo imagenes, para que ya veas un ejemplo mas realista:
                </p>
                
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '5px', gap: '15px'}}>
                    <p><b>flex-direction: {flexDirection3}</b></p>
                    <button className="boton-justifyContent" onClick={() => { setHeightEjemplo('400px'); setFlexDirection3('row')}}>row</button>
                    <button className="boton-justifyContent" onClick={() => { setHeightEjemplo('700px');setFlexDirection3('column')}}>column</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '5px', gap: '15px'}}>
                    <p><b>justify-content: {justifyContent3}</b></p> 
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('center')}>justify-content: center</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('start')}>justify-content: start</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('end')}>justify-content: end</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('space-between')}>justify-content: space-between</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('space-evenly')}>justify-content: space-evenly</button>
                    <button className='boton-justifyContent' onClick={() => setJustifyContent3('space-around')}>justify-content: around</button>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '5px', gap: '15px'}}>
                    <p><b>align-items: {alignItems3}</b></p> 
                    <button className='boton-justifyContent' onClick={() => setAlignItems3('start')}>align-items: start</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems3('center')}>align-items: center</button>
                    <button className='boton-justifyContent' onClick={() => setAlignItems3('end')}>align-items: end</button>
                </div>

                <div style={{backgroundColor: 'white', border: 'solid black 2px', padding: '10px', display: 'flex', 
                            flexDirection: flexDirection3, alignItems: alignItems3, justifyContent: justifyContent3, gap: '5px',
                            minHeight: heightEjemplo, marginBottom: '25px'
                }}>
                    <img src="https://i.redd.it/wxg0pordq6ya1.jpg" height={250} style={{borderRadius: '10px', maxHeight: '170px'}}></img>
                    <img src="https://m.media-amazon.com/images/M/MV5BODAxZjhiYTMtODJlNS00ZjM5LWJkYTUtMzc0YjBhN2ZkMmFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" height={250} style={{borderRadius: '10px', maxHeight: '170px'}}></img>
                    <img src="https://www.ps4digitalargentina.com/files/images/productos/1635035259-3-juegos-en-1-outlast-outlast-whistleblower-outlast-2-ps5.jpg" height={250} style={{borderRadius: '10px', maxHeight: '170px'}}></img>
                </div>
                <div>
                Se que quizas este ultimo estilo de flex y todas sus propiedades parecen muy complido de entender, pero todo se resuelve con practica y ademas con ir probando las distintas propiedades mientras
                codeas, y ver si queda o no acorde a lo que vos queres.
                De todas formas te dejo esta linda <a href="https://flexboxfroggy.com/#es">pagina para aprender y jugar con flex, con ranitas.</a>
                </div>

                <h2>¿Fin?</h2>
                <p>
                    Bueno, digamos que es el fin de lo basico de CSS, pero la realidad es que hay tantas cosas que se pueden hacer que no explique. Pero con esto deberias tener una base como para poder programar cosas al 
                    nivel que piden en interfaces de usuario, asi que es un golazo. De todas formas durante la cursada seguro vas a tener mil dudas y siempre me podes preguntar a mi cualquier duda de como
                    hacer algun estilo puntual.
                </p>
                <p>
                    Ahora, pasemos a REACT y Javascript.
                </p>
                <button className="home-button-react">JavaScript y React</button>
            </div>
        </div>
    )
}