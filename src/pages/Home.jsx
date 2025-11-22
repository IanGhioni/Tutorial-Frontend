import "./home.css"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate()

    return (
        <div className="home-div">
            <h1 className="home-titulo">Tutorial de cositas de Interfaces</h1>
            <p style={{fontSize: '1.2rem'}}>
            Holiiii. Bueno, esta pagina tiene como objetivo 2 cosas: Ayudarme a mi a aprender y prepararme para cursar de nuevo interfaces, y que mejor 
            manera de aprender que enseñando a alguien mas, entonces tambien tiene como objetivo ser un acercamiento temprano para vos a los contenidos 
            de front de la materia. Y creeme que lo vas a necesitar, porque todo el universo de front es algo complicado. Para un cuatrimestre es mucho
            bastante ver HTML, CSS, Javascript y React. Entonces nada, espero suavizar tu aprendizaje con esto y ademas ayudarme a mi porque hay cosas
            que yo no se y esto a mi me sirve. Blep
            </p>
            <p style={{fontSize: '1.2rem'}}>
            Este curso se va a dividir en 3 modulos. Primero <b>HTML</b>, todo lo de como estructurar una pagina web, lo necesario para la materia, luego 
            <b>CSS</b>, todo lo relacionado con estilos y para que todo sea hermoso, y finalmente <b>Javascript y React</b> en un mismo modulo porque van
            de la mano ambos. Entonces nada, empeza por HTML y luego segui con CSS y finalmente con Javascript/React :D
            </p>
            <p className="self-center" style={{fontSize: '1.2rem'}}>
            Asi que nada, arranca nomas ;D
            </p>
            <div className="home-container-buttons">
                <button className="home-button-html" onClick={() => navigate("/html-explicado")}>HTML pelado</button>
                <button className="home-button-css" onClick={() => navigate("/css-explicado")}>CSS y estilos</button>
                <button className="home-button-react">JavaScript y React</button>
            </div>
        </div>
    )
}

export default Home