/*
<div class="input-container">
    0<input class="input-field" id="disp-input" type="text" placeholder="Enter Display Name" required>
    1<input class="input-field" id="email-input" type="email" placeholder="Enter Email" required>
    2<input class="input-field" id="pass-input" type="password" placeholder="Enter Password" required>
    3<input class="input-field" id="check-input" type="checkbox">
    4<input class="input-field" id="radio-input" type="radio button">
    5<input class="input-field" id="radio-input" type="radio button">
    6<input class="input-field" id="range-input" type="range">
    7<select>
</div>*/

function createInputs() {
    let inputs = [];

    //We create input elements and push them into an array
    for (let i = 0; i < 10; i++) {
        let input_elem;

        switch (i) {
            case 0:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "disp-input";
                input_elem.type = "text";
                input_elem.placeholder = "Enter Display Name";
                input_elem.required = true;
                break;
            case 1:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "email-input";
                input_elem.type = "email";
                input_elem.placeholder = "Enter Email";
                input_elem.required = true;
                break;
            case 2:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "pass-input";
                input_elem.type = "password";
                input_elem.placeholder = "Enter Password";
                input_elem.required = true;
                input_elem.pattern = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,}";
                input_elem.title = "Password must contain at least 8 characters, including UPPER/lowercase, numbers and " +
                    "special characters !@#$%^&*(),.?\":{}|<>";
                break;
            case 3:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "radio-input-male";
                input_elem.type = "radio";
                input_elem.name = "gender";
                input_elem.value = "male";
                break;
            case 4:
                input_elem = document.createElement('label');
                input_elem.setAttribute('for', "radio-input-male");
                input_elem.textContent = "Male";
                break;
            case 5:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "radio-input-female";
                input_elem.type = "radio";
                input_elem.name = "gender";
                input_elem.value = "female";
                break;
            case 6:
                input_elem = document.createElement('label');
                input_elem.setAttribute('for', "radio-input-female");
                input_elem.textContent = "Female";
                break;
            case 7:
                input_elem = document.createElement('p');
                input_elem.textContent = "Select year and month of birth";
                break;
            case 8:
                input_elem = document.createElement("input");
                input_elem.className = "input-field";
                input_elem.id = "range-input";
                input_elem.type = "range";
                input_elem.min = '1900';
                let d = new Date();
                input_elem.max = d.getFullYear().toString();
                input_elem.oninput = function () {
                    let slider = document.getElementById('range-input');
                    let label = document.getElementById('range_val');
                    label.textContent = slider.value;
                };
                break;
            case 9:
                input_elem = document.createElement('label');
                input_elem.id = "range_val";
                input_elem.setAttribute('for', "range-input");
                input_elem.textContent = "Year";
        }
        inputs.push(input_elem);
    }

    let sel_elem = document.createElement("select");
    sel_elem.id = "sel_month";
    sel_elem.className = "input-field";
    let months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let i = 0; i < months.length; i++) {
        let option_elem = document.createElement('option');
        option_elem.text = months[i];
        sel_elem.add(option_elem, null);
    }

    let cont_elem = document.getElementById("input-container");
    let ts_cont = document.getElementById('ts-container');
    let checkbox_elem = document.createElement('input');
    checkbox_elem.type = "checkbox";
    checkbox_elem.id = "ts_agree_cb";
    checkbox_elem.required = true;
    let checkbox_label = document.createElement('label');
    checkbox_label.setAttribute('for', 'ts_agree_cb');
    checkbox_label.innerHTML = "I agree to the <a href=\"#\">Terms & Privacy</a>.";

    // Then we add them to the inputs container
    for (let i = 0; i < inputs.length; i++) {
        cont_elem.appendChild(inputs[i]);
    }
    cont_elem.appendChild(sel_elem);
    ts_cont.appendChild(checkbox_elem);
    ts_cont.appendChild(checkbox_label);
}

