const dotenv = require("dotenv").config()
const server = require("./api/server")
const port = process.env.PORT || 9000
const cors = require("cors")

server.use(cors())

server.listen(port, () => {
	console.log(`Server is running on port ${port}`)