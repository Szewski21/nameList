import $ from 'jquery';
function show (name, type) {
    $(document).ready(function (){
        const findElement = document.getElementById('notification');
        findElement.innerHTML +="   <div class=\"alert alert-"+type+" alert-dismissible fade show\" role=\"alert\">" +
            "        <strong>Hola guacamole!</strong> " +  name +
            "        <button type=\"button\" class=\"close\" data-dismiss=\"close\" aria-label=\"Close\">" +
            "            <span aria-hidden=\"true\">&times;</span>" +
            "        </button>" +
            "    </div>"
        setTimeout(() => {
            $('.alert').first().alert('close');
        }, 5000);
    });
}
export default {show};