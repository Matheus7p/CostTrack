import styles from './Home.module.css'
import LinkButton from '../../layout/LinkButton/LinkButton'
import savings from '../../../Assets/savings.svg'


function Home() {
    return (
        
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Cost Track</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
           <LinkButton to={'/newProject'} text={'Criar Projeto'} />
            <img src={savings} alt="Cost Track" />

        </section>

    )
}

export default Home