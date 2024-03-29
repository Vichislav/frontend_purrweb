const db = require('../db')

class UserController {

    async createUser(req, res) {
        const {name, surname, email, phone, password} = req.body
        const newPerson
            = await db.query('INSERT INTO person (name, surname, email, phone, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, surname, email, phone, password])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

   /* async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }*/

    async getOneUser(req, res) {
        const email = req.params.email
        //const password = req.params.password
        const user = await db.query('SELECT * FROM person where email = $1', [email])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, surname} = req.body
        const user = await db.query(
            'UPDATE person set name = $2, surname = $3 where id = $1 RETURNING *',
             [id, name, surname]
        )
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()