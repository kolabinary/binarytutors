//Firebase
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC9VzkK9ZZ4MbVS3TFl0I7ABtQSqOhFwGM",
    authDomain: "registration-form-49c27.firebaseapp.com",
    databaseURL: "https://registration-form-49c27.firebaseio.com",
    projectId: "registration-form-49c27",
    storageBucket: "registration-form-49c27.appspot.com",
    messagingSenderId: "382235692787",
    appId: "1:382235692787:web:a968b83943f96f96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

// Messages collection
var messagesRef = firebase.database().ref();


//My code

document.getElementById('contactform').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();
    
    var name = getInputVal('fullname');
    var email = getInputVal('email');
    var age = getInputVal('age');
    var gender = getInputVal('gender');
    var training = getInputVal('training');
    var address = getInputVal('address');
    var city = getInputVal('city');
    var state = getInputVal('state');
   
    //save message
    saveMessage( name, email, age, gender, training, address, city, state);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save messages to firebase

function saveMessage(name, email, age, gender, training, address, city, state) {
    if (!gender || !age ||!training ||!city) {
        alert('Please select Gender, Age, city and Training method');
        return;
    }



    var newMessageRef = messagesRef.push();
    newMessageRef.set ({
        name:name,
        email:email,
        age:age,
        gender:gender,
        training:training,
        address:address,
        city:city,
        state:state
    }).then(() => {
        messagesRef.once('value').then((snap)=> {
            window.location.href ='auth.html'
        })
    });

}


