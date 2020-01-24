function comprar() {
    var emailValue = document.getElementById("compraEmail").value;
    var timestamp = new Date().getTime();
    var database = firebase.database();
    database.ref(timestamp).set(
        {
            email: emailValue
        }
    );
}