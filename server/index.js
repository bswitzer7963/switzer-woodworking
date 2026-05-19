const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const saltRounds = 10

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        res.json(users);
    }
    catch (err) {
        console.error("GET /users error", err);
        res.status(500).json({error: "Failed to GET /users"});
    }
});

app.get('/orders', async (req, res) => {
    try {
        const orders = await prisma.req.findMany();

        res.json(orders);
    }
    catch (err) {
        console.error("GET /orders error", err);
        res.status(500).json({error: "Failed to GET /orders"});
    }
});

//will make once i have an idea of my system
/* app.post('/orders', async (req, res) => {
    try {

    }
    catch (err) {

    }
}); */

app.post('/login', async (req, res) =>  {
    try {
        const username = req.body.email;
        const password = req.body.password;
        const user = await prisma.user.findUnique({where: {email: username}});

        let pwCorrect;
        if (user) {
            pwCorrect = await bcrypt.compare(password, user.pwHash);
        }
        else {
            pwCorrect = false;
            console.error('Incorrect email');
            return res.status(401).json({error: "Incorrect email"});
        }

        if (pwCorrect) {
            const curToken = jwt.sign(
                {userID: user.userID, accType: user.accType},
                process.env.JWT_SECRET,
                {expiresIn: '7d'}
            )

            const {pwHash, ...userNoPW} = user;
            res.json({curToken, user: userNoPW})
        }
        else {
            console.error('Incorrect password');
            res.status(401).json({error: "Incorrect Password"});
        }
    }
    catch (err) {
        console.error('POST /login error:', err);
        res.status(401).json({error: "Failed to POST login"});
    }
});

//Strcture from my routes on my 'phreddit' project from school
app.post('/register', async (req, res) => {
    try {
        //const pwAtt = req.body.pw.toLowerCase();
        const validEmail = /^\w+@\w+\.\w+/;
        //For dashes or space separations: 123-456-7890 or 123 456 7890
        const validPNumberWFormat = /^\d{3}[\-\s]\d{3}[\-\s]\d{4}$/;
        //For if they enter like 1234567890
        const validPNumberBasic = /^\d{10}$/;
        const first = req.body.fName
        const last = req.body.lName;
        const uEmail = req.body.email;
        const userNumber = req.body.phNumber;

/*         let iOfAt = uEmail.indexOf('@');
        let emailName = uEmail.substring(0, iOfAt).toLowerCase(); */

/*         if (pwAtt.includes(first.toLowerCase()) || pwAtt.includes(last.toLowerCase()) || pwAtt.includes(emailName) || pwAtt.includes(display.toLowerCase())) {
            console.error('Invalid password: contains sensitive information');
            return res.status(401).json({error: "Incorrect Password: contains sensitive information"});
        } */

        const sameEmail = await prisma.user.findFirst({where: {email: uEmail}});

        if (sameEmail) {
            console.error("Existing user email");
            return res.status(401).json({error: "Existing user email"});
        }
        //Might move into client
        if (userNumber) {
            if (!validPNumberWFormat.test(userNumber) && !validPNumberBasic.test(userNumber)) {
                return res.status(401).json({error: "Invalid Phone Number"});
            }
        }
        if (!validEmail.test(uEmail)) {
            return res.status(401).json({error: "Invalid Email"});
        }

        
        const salt = await bcrypt.genSalt(saltRounds);
        const pass = await bcrypt.hash(req.body.pw, salt);

        const newUser = await prisma.user.create({
            data: {
                fName: first,
                lName: last,
                email: uEmail,
                pwHash: pass,
                phNumber: userNumber,
                accType: 'Customer'
            }
        });

        const curToken = jwt.sign(
            {userID: newUser.userID, accType: newUser.accType},
            process.env.JWT_SECRET,
            {expiresIn: '7d'}
        );

        //So we dont send pw to the JWT
        const {pwHash, ...userNoPW} = newUser;

        res.json({curToken, user: userNoPW});
    }
    catch (err) {
        console.error('POST /register error:', err);
        res.status(500).json({error: "Failed to POST new user"});
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));