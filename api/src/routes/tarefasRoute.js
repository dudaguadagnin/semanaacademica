import tarefasContollers from "../controllers/tarefasContollers";

export default (app) => {
    app.post('/tarefas', tarefasContollers.create)
    app.get('/tarefas', tarefasContollers.get)
}