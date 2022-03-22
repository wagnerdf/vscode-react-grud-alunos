import React from "react";
import {Table, table} from "react-bootstrap";


class Alunos extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            alunos : [
                {'id':1, 'nome':'Wagner Andrade', 'email':'wagner@gmail.com'},
                {'id':2, 'nome':'Marina', 'email':'Marina@gmail.com'},
                {'id':3, 'nome':'Kelly', 'email':'kelly@gmail.com'},
                {'id':4, 'nome':'Bruna', 'email':'Bruna@gmail.com'}
            ]
        }
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
                                <td> {aluno.nome} </td>
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