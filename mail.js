

const firebaseConfig = {
    apiKey: "AIzaSyAW9gNIMuB-yiL40RiLXWhsW_a57Cy85gQ",
    authDomain: "depotautohub-49bff.firebaseapp.com",
    projectId: "depotautohub-49bff",
    storageBucket: "depotautohub-49bff.appspot.com",
    messagingSenderId: "1054463436492",
    appId: "1:1054463436492:web:bb220f601dd4de228f8469",
  };


// Initialize Firebase

// Initialize Firebase

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Initialize Firestore

const submitformCollection = db.collection('submitform'); // Reference to Firestore collection

document.getElementById('submitform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var service = getElementVal('service');
    var vehicle = getElementVal('vehicle');
    var datetimepicker = getElementVal('datetimepicker');
    var mobilenumber = getElementVal('mobilenumber');

    if (service.trim() === '' || vehicle.trim() === '' || datetimepicker.trim() === '' || mobilenumber.trim() === '') {
        alert('Please fill in all the form fields.');
        return;
    }

    saveMessages(service, vehicle, datetimepicker, mobilenumber);
}

const saveMessages = (service, vehicle, datetimepicker, mobilenumber) => {
    submitformCollection.add({
        service: service,
        vehicle: vehicle,
        datetimepicker: datetimepicker,
        mobilenumber: mobilenumber
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // Optionally, perform actions after data is successfully saved
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        // Handle errors
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
