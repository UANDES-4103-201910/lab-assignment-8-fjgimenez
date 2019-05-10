// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(() => {

	class KeyboardController {
		constructor(id_kcontainer,id_targetelement){
			this.kcontainer = $(id_kcontainer);
			this.targetelement = $(id_targetelement);
		}    

		KeyPressed(key){
			key = key.toLowerCase()
			console.log(key)
			var te = document.getElementById("targetelement")
		}

		ToggleVisibility(){
			var x = document.getElementById("kcontainer");
			if (x.style.display === "none"){
				x.style.display = "block";
			}
			else{
				x.style.display = "none";
			}
		}
	}

	var keyboardc = new KeyboardController("kcontainer","targetelement")
	var toggleButton = document.getElementById("toggleButton")

	$(".key").click(function(){
         console.log(this.innerHTML)
				 keyboardc.KeyPressed($(this).text());
     });

 toggleButton.addEventListener('click',function(){
   	keyboardc.ToggleVisibility();
   },false);
 });
