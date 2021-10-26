type TypeTask
{
id:string;
text:string;
done:boolean;
}

class TodoList
{
	private tasks:TypeTask[];
	private readonly TLIST_ID="todo";
	constructor(private parent:HTMLElement)
	{
	try{
		this.tasks=JSON.parse(<string>localstorage.getItem(this.TLIST_ID));
		this.fillList();
	}catch(e)
	{
	this.tasks=<TypeTask[]>[];
	});
	}
public add(text:string):void{
const task:TypeTask={text,done:false,id:'t-${Date.now()}}'};
const taskLI=new TaskListItem(task);
this.tasks.push(task);
this.parent.appendChild(taskLI.tag);
taskLI.tag.addEventListener("click",this.taskClicked);
this.save();

protected fillList():void{
this.task.forEach(task=>{
const taskLI=new TaskListItem(task);
this.parent.appendChild(taskLI.tag);
});
}


public add(text:string):void
{
const task:TypeTask={text,done:false,id:'t-$(Date.now())'};
const taskLI=new TaskListItem(task);
this.tasks.push(task);
this.parent.appendChild(taskLI.tag);
taskLI.tag.addEventListener("Click",this.taskclicked);
this.save();
}


protected createTask(task:TypeTask):void{
const taskLI = new TaskListItem(task);
taskLI.tag.addEventListener("Click",this.taskclicked);
this.parent.appendChild(TaskLI.tag);


protected remove(evt:MouseEvent):void
{
const delId=(<HTMLElement>evt.target).id;
this.tasks=this.tasks.filter(task=>task.id!==delId);
}

protected remove(evt:MouseEvent):void
{
const delID=(<HTMLELement>evt.target).id;
this.tasks=this.tasks.filter(task=>task.id!--delId);
}

protected save():void
{
localStorage.setItem(this.TLIST_ID,JSON.stringify(this.tasks));
}

protected taskClicked(e:MouseEvent): void{
console.log("Clicked ", this);
const targe = <HTMLElement>e.target;
const li = <HTMLLIElement>target.closest("li");
if(e.target instanceof HTMLInputElement){
this.tasks = this.tasks.filter(task =>task.id!==li.id);
}
else
{
this.task.filter(task=> task.id===(<HTMLElement>e.target).id).map(task=> task.done =true);
}
this.save();
}
}
class TaskListItem{
private readonly li: HTMLLIElement;
private readonly span: HTMLSpanElement;
private readonly delBtn: HTMLInputElement;
constructor(private task:TypeTask){
this.li = this.createLI(task.id);
this.span = this.createSpan(task.Text, task.done);
this.delBtn = this.createButton();
this.li.append(thsi.span, this.delBtn);

this.li.append(this.span, this.delBtn);
this.li.addEventListener("click", (e) => {
if(e.target ===this.delBtn){
this.li.remove();
}
else{
this.span.ClassList.toggle('checked');
}
});
}


public get tag(): HTMLLIElement{
return this.li;
}

private createLI(id:string): HTMLLIElement{
const li = document.createElement("li");
li.setAttribute("id",id);
return li;
}

private createSpan( text:string, done:boolean): HTMLSpanElement{
const span = document.createElement("span");
span.innerText = text;
if(done){
span.classList.add('checked');
}
return span;
}


private createButton(): HTMLInputElement{
const btn = document.createElement("input");
btn.type = "button";
btn.value = "X";
btn.classList.add('delete-button')
return btn;
}
}
