/* 
    hr.form
 * 
 * Complete the javascript logic below to make the form functional.
 * See each //todo comment
 * 
 * 
 * 
  */


function initForm() {
    //todo: Populate the Role (#ddlRole) select control with the following options
    //  - Display     - Value
    //  ---------------------
    //  - Admin       - 0
    //  - Member      - 1
    //  - Tester      - 2

    var roles = [
    	{ label: "Admin", value: "0" },
      { label: "Member", value: "1" },
      { label: "Tester", value: "2" }
    ];

    var r = $('#ddlRole');
    var i;

    for (i = 0; i < roles.length; i++) {

        r.append('<option value="' + roles[i].value + '">' + roles[i].label + '</option>');

    }

    //todo: Create a jQuery UI Autocomplete control for State (#txtState) textbox
    // - Use the states variable for the source
    // https://jqueryui.com/autocomplete/#custom-data


    $("#txtState").autocomplete({
        minLength: 0,
        source: states,

        focus: function (event, ui) {
            $("#txtState").val(ui.item.label);

            return false;
        },

        select: function (event, ui) {
            $("#txtState").val(ui.item.label);
            $("#txtState-code").val(ui.item.code);

            return false;
        }
    })
    .autocomplete("instance")._renderItem = function (ul, item) {
        return $("<li>")
          .append("<div>" + item.label + "<br>" + item.code + "</div>")
          .appendTo(ul);
    }
};


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
        userName: $('#txtUserName').val(),
        fName: $('#txtFirstName').val(),
        lName: $('#txtLastName').val(),
        role: $("#ddlRole :selected").text(),
        stateName: $('#txtState').val(),
        stateCode: $('#txtState-code').val(),
        isActive: $('#chkIsActive').is(':checked')
    };

    //validate the data, if the data is not valid return false
    if (isFormDataValid(data)) {
        return data;
    }
    return null;
}

function isFormDataValid(data) {
    //todo: Clear all previous form validation classes and alert messages

    if((data.userName == null) || (data.userName == ""))
    {
        $('#txtUserName').closest('.form-group').removeClass('has-success').addClass('has-error');

    } else 
        $('#txtUserName').closest('.form-group').removeClass('has-error').addClass('has-success');

    if ((data.fName == null) || (data.fName == "")) {
        $('#txtFirstName').closest('.form-group').removeClass('has-success').addClass('has-error');

    } else
        $('#txtFirstName').closest('.form-group').removeClass('has-error').addClass('has-success');

    if ((data.lName == null) || (data.lName == "")) {
        $('#txtLastName').closest('.form-group').removeClass('has-success').addClass('has-error');

    } else
        $('#txtLastName').closest('.form-group').removeClass('has-error').addClass('has-success');

    if ((data.role == null) || (data.role == "")) {
        $('#ddlRole').closest('.form-group').removeClass('has-success').addClass('has-error');

    } else
        $('#ddlRole').closest('.form-group').removeClass('has-error').addClass('has-success');

    if ((data.stateName == null) || (data.stateName == "")) {
        $('#txtState').closest('.form-group').removeClass('has-success').addClass('has-error');

    } else
        $('#txtState').closest('.form-group').removeClass('has-error').addClass('has-success');
    

    //todo: Validate the data with the following specifications
    // http://getbootstrap.com/css/#forms-control-validation
    // - Username must be unique, existing user names are stored in the currentUsers variable
    console.log(currentUsers);
    for (i = 0; i < currentUsers.length; i++) {
        if (data.userName == currentUsers[i]){
            data.userName == "";
            $('#txtUserName').addClass('alert').addClass('alert-danger').addClass('has-error');
            $('#txtUserName').val('');
        } else 
            $('#txtUserName').removeClass('alert').removeClass('alert-danger');
    }

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