function signUp(){
    // let sName = document.getElementById('sName').value;
    var sEmail = document.getElementById('sEmail').value;
    var sPass  = document.getElementById('sPass').value;

    firebase.auth().createUserWithEmailAndPassword(sEmail, sPass).then((data )=>{
      console.log(data);
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
}

function signIn(){
    var lEmail = document.getElementById('lEmail').value;
    var lPass = document.getElementById('lPass').value;

    console.log(lEmail.value, lPass.value);

    firebase.auth().signInWithEmailAndPassword(lEmail, lPass).then((success) => {
        location.href = "./index.html";
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

saveUser = (data = {name: "wahab"}) =>{
  console.log("TCL: saveUser -> data", data)

  var db = firebase.firestore();
  db.collection("user").add(data)
  .then(() => {
    console.log("TCL: saveUser -> then","then")
  }).catch((err) => { 
    console.log("TCL; saveUSER -> err" , err)
  })
}