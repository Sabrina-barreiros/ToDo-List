import './global_styles.css';
import { TaskList } from './tasks';

const ul = document.getElementById('tasks-ul');
const input = document.getElementById('task-input');
const button = document.getElementById('task-input-button');

let myTasks = new TaskList(ul);
button.addEventListener('click', ()=>{
  let task = (<HTMLInputElement>input).value;
  (<HTMLInputElement>input).value ='';
  myTasks.add(task);
});
