import React from "react";
import {Table, table} from "react-bootstrap";


class Alunos extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            alunos : []
        }
    }

    componentDidMount(){
        fetch("http://localhost:8080/alunos/2")
        .then(resposta => resposta.json())
        .then(dados => {
           this.setState({ alunos : dados}) 
        })
    }

    componentWillUnmount(){
        alert("O componente Alunos foi desmontado!")
    }

    render(){
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.alunos.map((aluno) =>

                            <tr>
                                <td> {aluno.aluno} </td>
                                <td> {aluno.email} </td>
                                <td>Atualizar Excluir</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}

export default Alunos;