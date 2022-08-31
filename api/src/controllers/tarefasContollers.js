import Tarefa from "../models/Tarefa";

async function create (request, response) {
    let {descricao} = request.body
    let tarefa = await Tarefa.create({
        descricao
    })
    response.send(tarefa)
} 
async function get (request, response) {
    let tarefas = await Tarefa.findAll()
    response.send(tarefas)
} 

export default {
    create,
    get
}