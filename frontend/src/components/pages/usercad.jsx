import React, { Component } from 'react'
import Main from '../template/main'
import axios from 'axios'

const headerProps = { 
    icon: 'users',
    title: 'Formulário',
    subtitle: 'Preencha seus dados entrarei em contato'
}

const baseUrl = "http://localhost:3001/users"
    const initialState = { // estado inicial do formulario
        user: { name: '', email: '', telefone: '' },
        list: []
    }

export default class UserCrud extends Component {
            
            state = { ...initialState } //inicial o estado a partir do operador spred

            componentWillMount() { //função chamada quando um componente for exibido na tela, faço uma chamada no meu backend dos id
                axios(baseUrl).then(resp => { //axios traz todos os usuarios
                    this.setState({ list: resp.data }) // aquilo que tenho como resposta é armazenado na minha lista
                })
            }

            clear() { //função clear para limpar o formulario
                this.setState ({ user: initialState.user }) //quero limpar apenas o usuario
            }

            save() { // função para incluir usuario (post)  ou alterar usuario (put) existente
               const user = this.state.user //não altero o usuario, uso atraves do state
               const method = user.id ? 'put' : 'post' //se o id estiver acetado, user.id for verdadeiro eu altero ou se não for verdadeiro eu posto
               const url = user.id ? `${baseUrl}/${user.id}` : baseUrl //ser for um put alem de eu passar a url padrão, passo o id do usuario, no post não preciso passar a url ou id
               axios[method](url, user)
                    .then(resp => {
                        const list = this.getUpdateList(resp.data) //resp.data são dados retornados do json
                        this.setState({ user: initialState.user, list }) //chamos o setState para alterar o user (limpa) e atualizar a lista
                    })
            }

            getUpdateList(user) {
                const list = this.state.list.filter(u => u.id !== user.id) //gera uma nova lista de usuarios com id diferente
                list.unshift(user)//unshift colocar um determinado elemento no inicio do array
                return list
            }

            updateField(event) { // atualiza os campos (nome e email)
                const user = { ...this.state.user } //clono o usuario com operador spreed e depois altere, setando no final, react faz isso, evolui o estado do objeto
                user[event.target.name] = event.target.value // (nome e atributo) (valor dentro do nome(imput))
                this.setState({ user })
            }

    renderForm () {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>WhatsApp</label>
                            <input type="text" className="form-control"
                                name="telefone"
                                value={this.state.user.telefone}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o número..." />
                        </div>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick ={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick ={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // rederizando a tabela

    load(user) { //clica para carregar o usuario
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdateList(user, false)
            this.setState({ list }) //encontrando o usuario
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.telefone}</td>
                    <td>
                        <button className="btn btn-warning" //2 botões para chamar a função
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() { //Função Principal que chamará as outras
        //console.log(this.state.list) // mostra a lista no backend o que está sendo exibido
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
            )
        }
    }