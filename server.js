const express = require('express')

const PORT = process.env.PORT || 8080 // берет порт из сис. переменных, если таких нет то 8080

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO POSTGRES + NODEJS!!!')
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))

