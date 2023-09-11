import express from "express"
let app = express()

app.use(express.static("."))

app.get("/", (request, response) => {
	response.sendFile(__dirname + "/index.html")
})

const port = process.env.PORT || 3333
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port + "...")
})
