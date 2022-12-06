import { Header } from "../components/Header"
import { useState } from "react"
import { database } from '../services/firebase'
import {ref, push, set} from 'firebase/database'

import img from '../assets/contato.svg'
import styles from '../styles/pages/contato.module.css'

export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputName(event) {
        setNome(event.target.value)
    }

    function handleInputEmail(event) {
        setEmail(event.target.value)
    }

    function handleInputMensagem(event) {
        setMensagem(event.target.value)
    }

    function createMessage(event) {
        event.preventDefault()
        
        console.log('nome: ', nome)
        console.log('email: ', email)
        console.log('mensagem: ', mensagem)

        const mensagensListRef = ref(database, 'mensagens')
        const novaMensagemRef = push(mensagensListRef)
        set(novaMensagemRef, {
            nome: nome,
            email: email,
            texto: mensagem

        })

        setNome('')
        setEmail('')
        setMensagem('')
    }

    return(
        <>
            <Header text="Entre em contato" image={img} />
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={createMessage}>
                    <input onChange={handleInputName} className={styles.formInput} placeholder="Digite seu nome" value={nome}/>
                    <input onChange={handleInputEmail} className={styles.formInput} placeholder="Digite seu email" value={email}/>
                    <textarea onChange={handleInputMensagem} className={styles.formTextArea} placeholder="Digite sua mensagem" value={mensagem}></textarea>
                    <button className={styles.formBtn} type="submit ">Enviar mensagem</button>
                </form>
            </div>
        </>
    )
}