function addDeleteButtonListener() {
    const person = $('.delete-person');
    person.unbind('click');
    person.click(event => {
        const id = event.target.dataset.id;
        const deleteFormData = new FormData();
        deleteFormData.append('id', id);
        const queryToDataBase = fetch('http://localhost/src/api/delete.php', {
            method: 'POST',
            body: deleteFormData
        })
            .then(data => data.json())
            .then(data => {});
            $(event.target).parent().parent().remove();
    });
}
export default {addDeleteButtonListener};