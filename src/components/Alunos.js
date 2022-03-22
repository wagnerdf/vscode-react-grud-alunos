import React from "react";
import {Table, table} from "react-bootstrap";


class Alunos extends React.Component{

    constructor(props){
        super(props);


        this.state = {
            alunos : []
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
                    <tr>
                        <td>Wagner</td>
                        <td>Wagner@gmail.com</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                    <tr>
                        <td>Marina</td>
                        <td>Marina@gmail.com</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                    <tr>
                        <td>Kelly</td>
                        <td>Kelly@gmail.com</td>
                        <td>Atualizar Excluir</td>
                    </tr>
                </tbody>

            </Table>
        )
        
        
    }
}

export default Alunos;