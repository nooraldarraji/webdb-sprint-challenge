const router = require("express").Router()
const Projects = require("./model.js")

router.get("/", (req, res) => {
    Projects.getProjects()
        .then(results => {
            res
                .json(results)
        })
        .catch(() =>
            res
                .status(500)
                .json({ error: "Could not retrive the data" }))
})

router.post("/", (req, res) => {
    Projects.addProject(req.body)
        .then(user =>
            res
                .status(201)
                .json(user))
        .catch(() =>
            res
                .status(500)
                .json({ error: "Could not retrive the data" }))
})

router.get("/tasks", (req, res) => {
    Projects.getTasks()
        .then(results => {
            res
                .json(results)
        })
        .catch(error =>
            res
                .status(500)
                .json({ error: error }))
})

router.post("/:id/tasks", (req, res) => {
    Projects.addTask(req.body, req.params.id)
        .then(tasks => {
            res
                .status(201)
                .json(tasks)
        })
        .catch(error =>
            res
                .status(500)
                .json(error))
})

module.exports = router