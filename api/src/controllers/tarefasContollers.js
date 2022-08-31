import Tarefa from "../models/Tarefa";

async function create (request, response) {
    let {descricao} = request.body
    let tarefa = await Tarefa.create({
        descricao
    })
    responde.send(tarefa)
} 
export default {
    create
}