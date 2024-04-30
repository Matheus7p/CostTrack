import styles from './ProjectForm.module.css'
import Input from '../../form/Input/Input'
import Select from '../../form/Select/Select'
import SubmitButton from '../../form/Submit/SubmitButton'

export default function ProjectForm( { btnText }) {
    return (
        <form className={styles.form}>

            <Input
                type='text'
                text="Nome do Projeto"
                name="name"
                placeholder='Insira o nome do Projeto'
            />
              <Input
                type='number'
                text="Orçamento do Projeto"
                name="budget"
                placeholder='Insira o Orçamento do Projeto'
            />

            <Select name='category_id' text='Selecione a Categoria' />
            
            <SubmitButton text={btnText}/>
        </form>
    )
}