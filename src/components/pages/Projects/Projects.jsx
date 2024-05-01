import styles from './Projects.module.css'
import Message from '../../layout/Message/Message'
import { useLocation } from 'react-router-dom'

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return (
        <div>
            <h1>
                Meus Projetos
            </h1>
            {message &&
                <Message msg={message} type='sucess' />
            }
        </div>
    )
}

export default Projects