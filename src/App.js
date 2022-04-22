import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@mui/material'
import './App.css'

function handleSubmit(data) {
    console.log(data)
}

function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return { error: true, texto: 'CPF deve ter 11 digitos' }
    } else {
        return { error: false, texto: '' }
    }
}

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro
                handleSubmit={handleSubmit}
                validarCPF={validarCPF}
            />
        </Container>
    )
}

export default App
