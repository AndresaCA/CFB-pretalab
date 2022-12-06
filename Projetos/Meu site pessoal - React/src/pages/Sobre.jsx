import { Header } from "../components/Header"
import img from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
    return(
        <>
           <Header text="Sobre mim" image={img} />
           <div className={styles.sobreContainer}>
                <h2 className={styles.sobreTitle}>Breve introdução</h2>
                <p className={styles.sobreText}>Muito prazer, meu nome é Andresa Crisóstomo Avelar, natural de São José dos Campos, SP. <br />
                <br />
                Desde a minha mais tenra idade, a tecnologia, especificamente informática, me fascina. A primeira vez que tive acesso a um computador foi lá pelos 9 ou 10 anos de idade, graças a um projeto social que existe na minha cidade. Não tinha conexão à internet, e nosso uso era limitado a usar programas como o Paint e jogar alguns jogos que estavam instalados, mas para alguém como eu, que só tinha visto aquelas maravilhosas máquinas mágicas pela TV, aquilo era tudo fantástico. <br />
                <br />             		
                O tempo foi passando, e meu conhecimento em relação a informática foi ficando cada vez menos rudimentar, e logo fui introduzida a este mundo fascinante da internet. E como a pessoa naturalmente curiosa que sou, logo me veio a pergunta: Como tudo isso funciona? O que possibilita um gif de um gatinho fofo existir e nos encantar? No mundo mágico de Harry Potter, imagens se moviam graças a, bem, magia. Mas e no nosso mundo real? <br />
                <br />
                Foi então que comecei a descobrir termos como HTML, CSS e desenvolvimento web. Aprendi que todo o conteúdo da internet, desde texto simples até o youtube, começavam humildes, em um simples arquivo de hiper-texto, ou HTML.  <br />
                <br />               
                Avançando alguns anos e aqui estou eu, uma aspirante e desenvolvedora front-end. Minha versão de 9 anos nunca imaginaria que isso aconteceria (embora dentro de si fosse algo que ela desejasse), porque naquela época, e por muito tempo, ela achava que o mundo da informática não era um lugar que ela pertencesse. Mas o mundo da tecnologia pertence a todos que se esforçam e se dedicam, que buscam aprender coisas novas constantemente (porque no mundo do desenvolvimento, sempre tem algo novo surgindo) e eu sei que eu tenho essas características.
                </p>
           </div>
        </>
    )
}