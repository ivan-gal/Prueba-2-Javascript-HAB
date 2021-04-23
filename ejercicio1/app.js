/**
 * Función que devuelve un array de usuarios, De cada usuario
 * guarda el username, el nombre y apellido,
 * el sexo, el país, el email y un enlace a su foto
 * de perfil.
 * @param {Number} num El número de usuario que quieres buscar.
 * @returns Devuelve un array de los usuarios.
 */

async function getUsers(num) {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${num}`
        );
        const { results } = await response.json();
        const users = [];

        for (let user of results) {
            const userName = user.login.username;
            const userFirst = user.name.first;
            const userLast = user.name.last;
            const userGender = user.gender;
            const userCountry = user.location.country;
            const userEmail = user.email;
            const userPicture = user.picture.large;

            users.push({
                UserName: userName,
                Nombre: userFirst,
                Apellido: userLast,
                Sexo: userGender,
                País: userCountry,
                Email: userEmail,
                Picture: userPicture,
            });
        }
        return users;
    } catch (error) {
        console.log(error);
    }
}

getUsers(4)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
