import express from "express"
import { routes } from "./routes"
const app = express()

const cors = require("cors")

app.use(cors())

app.use(express.json());
app.use(routes);

app.listen(
  3333, () =>
  console.log("Server is Running")
)