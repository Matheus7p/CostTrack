import styles from './ProjectForm.module.css'
import Input from '../../form/Input/Input'
import Select from '../../form/Select/Select'
import SubmitButton from '../../form/Submit/SubmitButton'
import { useEffect, useState } from 'react'


export default function ProjectForm( { btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    
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

            <Select name='category_id' text='Selecione a Categoria' options={categories}/>
            
            <SubmitButton text={btnText}/>
        </form>
    )
}