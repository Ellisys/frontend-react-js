const axios = require('axios').default;

export default function cadastro(user,password) {
    axios.post('localhost/user', {
        firstName: user,
        lastName: password
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

