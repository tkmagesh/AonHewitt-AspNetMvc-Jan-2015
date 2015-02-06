var list = [];
function add(taskName){
	list.push(taskName);

}
function getAll(){
	return list;
}
module.exports =  {
	add : add,
	getAll : getAll
}