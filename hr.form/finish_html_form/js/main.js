/* Javascript */


function initForm() {
    //todo: Populate the ddlRole select control with the following options
    //  - Display     - Value
    //  ---------------------
    //  - Admin       - 0
    //  - Member      - 1
    //  - Tester      - 2


    //todo: Create a jQuery UI Autocomplete control for txtState
    // - Use the states variable for the source
    // https://jqueryui.com/autocomplete/#custom-data


}


function getFormData() {
    //todo: Collect the form data and return an object with the following properties
    // - name       - type
    // -----------------------
    // - userName   - string
    // - fName      - string
    // - lName      - string
    // - role       - integer
    // - stateName  - string
    // - stateCode  - string (Bonus, find a way to get this data)
    // - isActive   - bool

    var data = {
        //todo
    };

    //validate the data, if the data is not valid return false
    if (isFormDataValid(data)) {
        return data;
    }
    return null;
}

function isFormDataValid(data) {
    //todo: Clear all previous form validation classes and alert messages


    //todo: Validate the data with the following specifications
    // http://getbootstrap.com/css/#forms-control-validation
    // - Username must be unique, existing user names are stored in the currentUsers variable
    // - First and Last name must be 2 to 25 characters, only alow A-Z and a-z characters
    // - State must be in the states list variable


    //todo: If the data is not valid notify the user by adding a bootstrap alert message in the form and return false, otherwise return true
    // http://getbootstrap.com/components/#alerts

}


function postFormData(data) {
    console.log(data);
    //todo: Ignore the data and add a bootstrap alert message to the form notifying the user the data was send successfully
    //http://getbootstrap.com/components/#alerts

}

/////////////////////////////////////////////////////////////////////////////////
//           Do not modify code below this point
/////////////////////////////////////////////////////////////////////////////////

//list of acceptable states for the state input
var states = [
    { code: "CA", label: "California" },
    { code: "AK", label: "Alaska" },
    { code: "AZ", label: "Arizona" }
];

//Current Usernames that are not allowed to be entered
var currentUsers = ["Billy", "Bob", "Joe"];

function onBtnSubmitClicked() {
    var data = getFormData();
    if (data != null) {
        postFormData(data);
    }
}

$(function () {
    //init the form
    initForm();

    //register the form
    $("#btnSubmit").on('click', onBtnSubmitClicked);
});