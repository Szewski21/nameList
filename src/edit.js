import $ from 'jquery';
import {validateName} from  './validations';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faSave, faEdit } from '@fortawesome/free-solid-svg-icons';
import notification from './notification.js';

library.add(faSave);
library.add(faEdit);

const saveIcon = icon({ prefix: 'fas', iconName: 'save' })
const editIcon = icon({ prefix: 'fas', iconName: 'edit' })

export function editName () {
    $( document ).ready(function (){
        const editPersonButton = $('.edit-person');
        editPersonButton.unbind('click');
        let previousName = '';
        editPersonButton.click(event => {
           const id = event.target.dataset.id;
           const shouldFetch = !toggleInput(id);
            const buttonSaveIcon = $(`#people-list button.edit-person[data-id=${id}]`);
            const input = buttonSaveIcon.parent().parent().find('input');
            const name = input.val();
           if (shouldFetch) {
               const formData = new FormData();
               formData.append('id', id);
               const isNameNotCorrect = !validateName(name);
               if (isNameNotCorrect) {
                   notification.show('Nazwa jest nie prawidłowa', 'danger');
                   input.val(previousName);
                   return;
               }
               formData.append('name', name);
               notification.show('Dodano ;)', 'success');
               fetch('http://localhost/src/api/update.php', {
                   method: 'POST',
                   body: formData
               });
           } else {
               previousName = name;
           }
        });
    });
}
function toggleInput (personId) {
    const personList = $('#people-list');
    const buttonSaveIcon = $(`#people-list button.edit-person[data-id=${personId}]`);
    const input = buttonSaveIcon.parent().parent().find('input');
    const isDisabled = input.attr('disabled');
    input.prop('disabled', !isDisabled);
    input.toggleClass('format-input').focus();
    buttonSaveIcon.html(isDisabled ? saveIcon.html : editIcon.html);
    return isDisabled;
}