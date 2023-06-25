import bcrypt from 'bcryptjs'

const users = [
    {
        name:'Admin',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456', 10),
        isAdmin:true
    },
    {
        name:'Jhon Doe',
        email:'jhon@example.com',
        password:bcrypt.hashSync('123456', 10),
    },
    {
        name:'Jhon Smith',
        email:'smith@example.com',
        password:bcrypt.hashSync('123456', 10),
    }
]


export default users