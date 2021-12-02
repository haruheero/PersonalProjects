// require("./db/conn");
// const User=require("./models/usermessage")
// app.use(express.urlencoded({extended:false}));


// function deletethis(id){
// User.deleteOne({ _id: 'id' }, function (err) {
//     if (err) return handleError(err);
//     // deleted at most one tank document
//   });
// }

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);