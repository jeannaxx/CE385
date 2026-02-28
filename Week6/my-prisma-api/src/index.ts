import express from 'express';
import { prisma } from '../lib/prisma';


const app = express();
const port = process.env.PORT || 8080;


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from Prisma API!');
});


app.post('/user', async(require, res) => {
    const { name, email } = require.body;
    try {
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});


// get all users
app.get('/user', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' })
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);

    
});
