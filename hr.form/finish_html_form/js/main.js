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


    var roles = [{
        label: "Admin",
        value: "0"
    }, {
        label: "Member",
        value: "1"
    }, {
        label: "Tester",
        value: "2"
    }];

    var r = $('#ddlRole');
    var i;
    for (i = 0; i < roles.length; i++) {

        r.append('<option value="' + roles[i].value + '">' + roles[i].label + '</option>');

    };

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
            $("#txtStateCode").val(ui.item.code);

            return false;
        }
    })
      .autocomplete("instance")._renderItem = function (ul, item) {
          return $("<li>")
            .append("<div>" + item.label + "<br>" + item.code + "</div>")
            .appendTo(ul);
      };
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
        stateCode: $('#txtStateCode').val(),
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
    $('#createForm :input').removeClass('has-success has-error');
    $('#successAlert').addClass('hidden');
    $('#errorAlert').addClass('hidden');

    //todo: Validate the data with the following specifications
    // http://getbootstrap.com/css/#forms-control-validation
    // - Username must be unique, existing user names are stored in the currentUsers variable
    // - First and Last name must be 2 to 25 characters, only alow A-Z and a-z characters
    // - State must be in the states list variable


    $.validator.addMethod("isDistinct", function (value, element) {

        var user = data.userName;
        for (i = 0; i < currentUsers.length; i++) {
            if (user.toLowerCase() == (currentUsers[i].toLowerCase())) {
                isDistinct = false;
                break;
            }
            else {
                isDistinct = true;
            }
        }
        return isDistinct;
    }, "User Name already taken.");


    $.validator.addMethod("requireLetters", function (value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z]+$/);
    }, "Letters only please.");


    $.validator.addMethod("isState", function (value, element) {
        var stateInput = data.stateName;
        for (i = 0; i < states.length; i++) {
            if (stateInput.toLowerCase() == (states[i].label.toLowerCase())) {
                isState = true;
                break;
            }
            else {
                isState = false;
            }
        }
        return isState;
    }, "Please select a valid state.");


    $('#createForm').validate({

        highlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        },

        rules: {

            userName: {
                required: true,
                isDistinct: true
            },

            firstName: {
                required: true,
                minlength: 2,
                maxlength: 25,
                requireLetters: true

            },

            lastName: {
                required: true,
                minlength: 2,
                maxlength: 25,
                requireLetters: true
            },

            stateName: {
                required: true,
                isState: true
            }
        }

    }).form();


    //todo: If the data is not valid notify the user by adding a bootstrap alert message in the form and return false, otherwise return true
    // http://getbootstrap.com/components/#alerts
    if (!$('#createForm :input').valid()) {
        $('#successAlert').addClass('hidden');
        $('#errorAlert').removeClass('hidden');
        return false;
    }
    else {
        $('#errorAlert').addClass('hidden');
        return true;
    }

}



function postFormData(data) {
    //todo: Ignore the data and add a bootstrap alert message to the form notifying the user the data was send successfully
    //http://getbootstrap.com/components/#alerts

    $('#successAlert').removeClass('hidden');
}

/////////////////////////////////////////////////////////////////////////////////
//           Do not modify code below this point
/////////////////////////////////////////////////////////////////////////////////

//list of acceptable states for the state input
var states = [{
    code: "CA",
    label: "California"
}, {
    code: "AK",
    label: "Alaska"
}, {
    code: "AZ",
    label: "Arizona"
}];

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


