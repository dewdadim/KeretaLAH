const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const phoneNum = document.getElementById('phone-number');
const age = document.getElementById('age');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const carmodel = document.getElementById('carmodel');
const pickupLocation = document.getElementById('pickupLocation');
const pickupDate = document.getElementById('pickupDate');
const dropoffLocation = document.getElementById('dropoffLocation');
const dropoffDate = document.getElementById('dropoffDate');
const accept = document.getElementById('accept');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
    isValidForm();
});

const isValidForm = () => {
    var inputs = document.querySelectorAll('#form-input');
    let inputsStatus = [];

    for(let i=0; i < inputs.length; i++){
        var isSuccess = inputs[i].classList.contains('success');

        if(isSuccess){
            inputsStatus[i] = 'success';
            // console.log(inputsStatus[i]);
        } else {
            inputsStatus[i] = 'error';
            // console.log(inputsStatus[i]);
        }
    }

    if (allAreEqual(inputsStatus) && inputsStatus.includes('success')){
        console.log("It is valid form");
        document.getElementById('popup').style.display = "block";
    } else {
        console.log("It its not validdd");
    }
}


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function allAreEqual(array) {
    const result = array.every(element => {
      if (element === array[0]) {
        return true;
      }
    });
  
    return result;
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const phoneNumValue = phoneNum.value.trim();
    const ageValue = age.value.trim();
    const emailValue = email.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();
    const zipValue = zip.value.trim();
    const carmodelValue = carmodel.value;
    const pickupLocationValue = pickupLocation.value;
    const pickupDateValue = pickupDate.value;
    const dropoffLocationValue = dropoffLocation.value;
    const dropoffDateValue = dropoffDate.value;
    const acceptValue = accept.checked;
    
    //first name validation
    if(firstNameValue === '') {
        setError(firstName, 'First Name is required');
    } else {
        setSuccess(firstName);
    }

    //last name validation
    if(lastNameValue === '') {
        setError(lastName, 'Last Name is required');
    } else {
        setSuccess(lastName);
    }

    //phone number validation
    if(phoneNumValue === '') {
        setError(phoneNum, 'Phone number is required');
    } else {
        setSuccess(phoneNum);
    }

    //age validation
    if(ageValue === '') {
        setError(age, 'Age is required');
    } else if(parseInt(ageValue) < 17) {
        setError(age, 'You must be 17 and above to reserve')
    } else {
        setSuccess(age);
    }

    //email address validation
    if(emailValue === '') {
        setSuccess(email);
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    //home address validation
    if(addressValue === '') {
        setError(address, 'Address is required');
    } else {
        setSuccess(address);
    }

    //home city validation
    if(cityValue === '') {
        setError(city, 'City is required');
    } else {
        setSuccess(city);
    }

    //home zip validation
    if(zipValue === '') {
        setError(zip, 'Zip code is required');
    } else {
        setSuccess(zip);
    }

    //car model validation
    if(carmodelValue === '0') {
        setError(carmodel, 'Car model is required');
    } else {
        setSuccess(carmodel);
    }

    //pick-up loation validation
    if(pickupLocationValue === '0') {
        setError(pickupLocation, 'Pick-up location is required');
    } else {
        setSuccess(pickupLocation);
    }

    //pick-up date validation
    if(pickupDateValue === '') {
        setError(pickupDate, 'Pick-up date is required');
    } else {
        setSuccess(pickupDate);
    }

    //drop-off loation validation
    if(dropoffLocationValue === '0') {
        setError(dropoffLocation, 'Drop-off location is required');
    } else {
        setSuccess(dropoffLocation);
    }

    //drop-off date validation
    if(dropoffDateValue === '') {
        setError(dropoffDate, 'Drop-off date is required');
    } else {
        setSuccess(dropoffDate);
    }

    //accept terms validation
    if(!acceptValue) {
        setError(accept, '');
    } else {
        setSuccess(accept);
    }
};
