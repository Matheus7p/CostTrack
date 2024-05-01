import styles from './Projects.module.css'
import Message from '../../layout/Message/Message'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/Container/Container'
import LinkButton from '../../layout/LinkButton/LinkButton'
import ProjectCard from '../../project/ProjectCard/ProjectCard'
import { useState, useEffect } from 'react'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))
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
            </Container>
        </div>
    )
}

export default Projects