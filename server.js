const express = require('express')
const userRouter = require('./routes/user.routes')
const cors = require('cors')

const PORT = process.env.PORT || 8080 // берет порт из сис. переменных, если таких нет то 8080

const app = express();

app.use(express.json()) // что express мог разпарсить json строку

app.use(cors({
    origin: ["http://localhost:3000"],
}));

app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

