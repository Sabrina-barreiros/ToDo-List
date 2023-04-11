export class TaskList{
  list: string[] =[];
  ul: HTMLElement;

  constructor(e: HTMLElement){
   
    this.ul = e;
    this.read();
    this.render();
  }

  save(){
    localStorage.setItem('todo-list-ts', JSON.stringify(this.list));
  }

  read(){
    let saved = localStorage.getItem('todo-list-ts');
    if(saved)
    { this.list = JSON.parse(saved);}
  }

  render(){
    this.ul.innerHTML= '';
    this.list.forEach((task) => {
      const li= document.createElement('li');
      const btn = document.createElement('button');

      btn.innerText ='-';
      btn.addEventListener('click', ()=>{
        this.remove(task);
      });
      li.innerText = task;
      li.appendChild(btn);
      this.ul.appendChild(li);

    });
  }

  add(task: string){
    this.list.push(task);
    this.save()';'
    this.render();
  }

  remove(task:string){
    const i= this.list.indexOf(task);
    if(i>=0){
      this.list.splice(i,1);
      this.save();
      this.render();
    }
  }
}