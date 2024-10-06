import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { TipoContacto } from '../../utils/enums/Contatos' // Cambio de nombre a GrupoContacto para mayor claridad
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [grupo, setGrupo] = useState<TipoContacto>(TipoContacto.FAMILIAR)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        grupo,
        nombre: '',
        telefono: ''
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Titulo>Novo Contato</S.Titulo>
      <S.Form onSubmit={cadastrarContato}>
        <S.Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <S.Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="Email"
        />
        <S.Opcoes>
          <p>Grupo</p>
          {Object.values(TipoContacto).map((grupo) => (
            <S.Opcao key={grupo}>
              <input
                value={grupo}
                name="grupo"
                type="radio"
                onChange={(evento) =>
                  setGrupo(evento.target.value as TipoContacto)
                }
                id={grupo}
                defaultChecked={grupo === TipoContacto.FAMILIAR}
              />{' '}
              <label htmlFor={grupo}>{grupo}</label>
            </S.Opcao>
          ))}
        </S.Opcoes>
        <S.BotaoSalvar type="submit">Cadastrar</S.BotaoSalvar>
      </S.Form>
    </S.MainContainer>
  )
}

export default Formulario
