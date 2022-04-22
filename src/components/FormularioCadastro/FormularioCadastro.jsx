import { useState } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@mui/material'

function FormularioCadastro({ handleSubmit, validarCPF }) {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)

    const [erros, setErros] = useState({ cpf: { error: false, texto: '' } })

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                handleSubmit({
                    nome,
                    sobrenome,
                    cpf,
                    novidades,
                    promocoes,
                })
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                id="nome"
                label="Nome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                id="sobrenome"
                label="Sobrenome"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={(event) => {
                    const isValid = validarCPF(event.target.value)
                    setErros({
                        cpf: isValid,
                    })
                }}
                error={erros.cpf.error}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
                margin="normal"
                fullWidth
            />
            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }}
                        name="promocoes"
                    />
                }
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }}
                        name="novidades"
                    />
                }
            />

            <Button variant="contained" type="submit">
                Cadastrar
            </Button>
        </form>
    )
}

export default FormularioCadastro
