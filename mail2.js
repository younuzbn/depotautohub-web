

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
const db2 = firebase.firestore(); // Initialize Firestore

const secondformCollection = db2.collection('second-form'); // Reference to Firestore collection

document.getElementById('second-form').addEventListener('submit', secondsubmitForm);

function secondsubmitForm(e) {
  e.preventDefault();

  var vehicle2 = getElementVal('vehicle2');
  var datetimepicker2 = getElementVal('datetimepicker2');
  var mobilenumber2 = getElementVal('mobilenumber2');
  var address = getElementVal('address');

  if (vehicle2.trim() === '' || datetimepicker2.trim() === '' || mobilenumber2.trim() === '' || address.trim() === '') {
      alert('Please fill in all the form fields.');
      return;
  }

  secondsaveMessages(vehicle2, datetimepicker2, mobilenumber2, address);
}

const secondsaveMessages = (vehicle2, datetimepicker2, mobilenumber2, address) => {
  secondformCollection.add({
      vehicle2: vehicle2,
      datetimepicker2: datetimepicker2,
      mobilenumber2: mobilenumber2,
      address: address
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

document.getElementById('second-form').addEventListener('submit', secondsubmitForm);