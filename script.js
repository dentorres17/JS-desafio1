// Se crea página web exclusiva. Para poder ingresar a la misma, el usuario podrá acceder sólo a través de una contraseña que se le enviará por mail.

let currentPassword = 123456;
let validation = false;

do{
    let password = parseInt(prompt("Ingrese contraseña válida para ingresar al sitio web"))
    validation = password == currentPassword
}while (validation==false)
alert("Bienvenido al sitio web")