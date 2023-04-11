import './global_styles.css';
import { TaskList } from './tasks';

const ul = document.getElementById('tasks-ul');

let myTasks = new TaskList(ul);
