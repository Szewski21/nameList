import notyfication from './notification.js';
import deleteperson from './deleteperson.js';
import {editName} from './edit';
import {validateName} from './validations';
export function edit() {
    window.onload = function () {
        const listButton = document.getElementById('people-list').id.toString();
        const click = document.getElementById('people-list');
        const itemListener = click.addEventListener("click", function (item) {});
        const os = document.getElementById('people-list');
        fetch('http://localhost/src/api/show.php', {mode: 'no-cors'}).then(test => test.json()).then(data => {
            data.forEach(function (person) {
                os.innerHTML += "<div class=\"list-group-item list-group-item-action list-group-item-light d-flex align-items-center\">" +
                    "                            <span  class=\"text-start w-50 d-inline-block\">" +
                    "                                <input type=\"text\" value=\" " + person[1] + " \" disabled class=\"form-control format-input\"/>" +
                    "                            </span>" +
                    "                            <div class=\"w-50 text-end\">" +
                    "                                <button" +
                    "                                        type=\"button\"" +
                    "                                        class=\"btn btn-sm btn-outline-dark edit-person\"" +
                    "                                        data-id=\"" +  person[0] + "\"" +
                    "                                >" +
                    "                                    <i class=\"fas fa-edit\"></i>" +
                    "                                </button>" +
                    "                                <button" +
                    "                                        type=\"button\"" +
                    "                                        class=\"btn btn-sm btn-outline-dark delete-person\"" +
                    "                                        data-id=\"" +  person[0] + "\"" +
                    "                                >" +
                    "                                    <i class=\"fas fa-user-minus\"></i>" +
                    "                                </button>" +
                    "                            </div>";
                deleteperson.addDeleteButtonListener();
               editName();
            });
        });
        const addPersonForm = document.getElementById("addPersonForm");
        addPersonForm.addEventListener("submit", formEvent => {
            formEvent.preventDefault();
        const formData = new FormData(addPersonForm);
        const takeName = formData.get('name');
        const formNameInput = document.getElementById('name');
        const isNameNotCorrect = !validateName(takeName);
        if (isNameNotCorrect) {
            formNameInput.value = null;
            notyfication.show('Nazwa jest nie prawidłowa', 'danger');
            return;
        }
            formNameInput.value = null;
            fetch('http://localhost/src/api/add.php', {
                method: 'POST',
                body: formData
            })
                .then(data => data.json())
                .then(person => {
                    os.innerHTML += "<div class=\"list-group-item list-group-item-action list-group-item-light d-flex align-items-center\">" +
                        "                            <span  class=\"text-start w-50 d-inline-block\">" +
                        "                                <input type=\"text\" value=\" " + person[1] + " \" disabled class=\"form-control format-input\"/>" +
                        "                            </span>" +
                        "                            <div class=\"w-50 text-end\">" +
                        "                                <button" +
                        "                                        type=\"button\"" +
                        "                                        class=\"btn btn-sm btn-outline-dark edit-person\"\n" +
                        "                                        data-id=\"" +  person[0] + "\"" +
                        "                                >" +
                        "                                    <i class=\"fas fa-edit\"></i>" +
                        "                                </button>" +
                        "                                <button" +
                        "                                        type=\"button\"" +
                        "                                        class=\"btn btn-sm btn-outline-dark delete-person\"\n" +
                        "                                        data-id=\"" +  person[0] + "\"" +
                    "                                >" +
                    "                                    <i class=\"fas fa-user-minus\"></i>" +
                    "                                </button>" +
                    "                            </div>";
                    deleteperson.addDeleteButtonListener();
                    editName();
                });
        });
    }
}