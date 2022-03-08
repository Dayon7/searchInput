// Take it easy, I'm a designer, not a developer. :)

var searchBody = document.getElementById("search-body");
var searchInput = document.getElementById("search-input");

// On click, trigger open state and focus the input
searchBody.addEventListener("click", function(event) {
	
	searchBody.classList.add('open');
	searchInput.focus();
	
	// Close search if empty and blurred
	searchInput.onblur = function() {
    if (searchInput.value.length == 0) { 
         searchBody.classList.remove('open');
		}
	};
	
	// Remove close state if it had already been opened
	function removeClear(){
		searchBody.classList.remove('clear');
	}
	setTimeout(removeClear, 1000);	
});

// If input is focused, not empty, and enter is pressed trigger loading state
searchInput.addEventListener('keyup',function(e){
	if (e.key === "Enter" && searchInput.value.length > 0) {triggerLoading();}
});

// Loading and complete state sequence
var triggerLoading = function (event) {

	searchBody.classList.add('loading');
	
	// After waiting for loading state sequence, trigger complete state
	function loadingComplete(){
		searchBody.classList.add('complete');
		document.querySelector("#search-body.open.complete .icon").addEventListener('click', clearSearch);
	}
	setTimeout(loadingComplete, 1880);
};

// On clear click trigger clear state, remove previous states, and clear input value
var clearSearch = function(event) {
	searchBody.classList.add("clear");
	searchBody.classList.remove("complete", "loading");
	searchInput.value='';
}