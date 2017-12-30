$(()=>{
	$("#vip").hover(function(){


		changeWidth(100,100,100)
	}, ()=>{
		changeWidth(0,0,0)
	})
	$("#pro").hover(function(){

		changeWidth(20, 70, 50)

	}, ()=>{
		changeWidth(0,0,0)
	})
	$("#rookie").hover(function(){
		
		changeWidth(5, 5, 5)

	}, ()=>{
		changeWidth(0,0,0)
	})

	function changeWidth(users, gb, repos){
		console.log(users, gb, repos);
		console.log(users + "%");
		$("#users").css('width', users + "%")
		$("#repos").css('width', repos + "%")
		$("#gb").css('width', gb + "%")
	}
})

