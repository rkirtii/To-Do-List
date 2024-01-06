var button = document.getElementById("enter");
var input = document.getElementById("input1");
var ul = document.getElementById("unordered")


function createListItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var delbutton = document.createElement("button");
	delbutton.className = "mydel"
	delbutton.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(' '));

	li.appendChild(delbutton);
	ul.appendChild(li);
	input.value="";

	// Attaching event listener to delete button.
	delbutton.addEventListener("click",function(){
		var liToDelete = this.parentElement;
      	if (liToDelete) {
        	liToDelete.remove();
      }
	});
}


button.addEventListener("click",function() {
	if(input.value.length > 0){
		createListItem();
	}
});


input.addEventListener("keydown", function(event){
	if(input.value.length > 0 && event.key === "Enter"){
		createListItem();
	}
});


var delButtons = document.getElementsByClassName("mydel");
for(var i=0 ; i < delButtons.length ; i++ )
{
	delButtons[i].addEventListener("click", function(){
		var liToDelete = this.parentElement;
		if(liToDelete){
			liToDelete.remove();
		}
		
	});
}



