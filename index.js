const http = require('http');

const hostname = 'localhost';
const port = 3000;

const USERS = [
    {
        id: 1,
        name: "John",
        surname: "Smith",
        email: "john.smith@gmail.com",
        password: 1234,
        age: 31
    },
    {
        id: 2,
        name: "Jack",
        surname: "Green",
        email: "jack.green@gmail.com",
        password: 1234,
        age: 32
    },
    {
        id: 3,
        name: "Josh",
        surname: "White",
        email: "josh.white@gmail.com",
        password: 1234,
        age: 33
    },
    {
        id: 4,
        name: "Bean",
        surname: "Gate",
        email: "bean.gate@gmail.com",
        password: 1234,
        age: 34
    },
    {
        id: 5,
        name: "Roy",
        surname: "Mayers",
        email: "roy.mayers@gmail.com",
        password: 1234,
        age: 34
    }
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});


//sign-in functionality
// const getUser = (email, password)=>{
//     const user = USERS.find((user)=> email === user.email && password === user.password);

//     return user;
// }

// const email = "roy.mayers@gmail.com";
// const password = 1234;
// const user = getUser(email, password);
// console.log('user >>>', user);

const getUser = (id) => {
    const user = USERS.find((user)=> id === user.id)

    return user
}

const userId = 10;
const user = getUser(userId);

if(user){
    const data = {
        success: true,
        data: user
    }

    console.log("data >>>", data);
} else {
    const data = {
        success: false,
        data: null
    }

    console.log("data >>>", data);
}



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


