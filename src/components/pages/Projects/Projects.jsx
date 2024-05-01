import styles from './Projects.module.css'
import Message from '../../layout/Message/Message'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'
import ProjectCard from '../../project/ProjectCard/ProjectCard'
import { useState, useEffect } from 'react'
import Loading from '../../layout/Loading/Loading'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    useEffect(() => {
       setTimeout(
        () => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 500)
    }, [])

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>
                    Meus Projetos
                </h1>
                <LinkButton to='/newProject' text='Criar Projeto' />
            </div>
            {message &&
                <Message msg={message} type='sucess' />
            }
            <Container customClass='start'>
                {projects.length > 0 &&
                projects.map((project) =>(
                    <ProjectCard 
                    name={project.name}
                    id={project.id}
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    />
                ))}

                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 &&(
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    )
}

export default Projects