import "./style.scss";
import $ from 'jquery';
import 'bootstrap';
import {edit as addPerson} from "./addperson.js";
import {editName as editNamePerson} from "./edit.js";
window.jQuery = $;
window.$ = $;


addPerson();
editNamePerson();
