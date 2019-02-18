$(function(){
setInterval(
	function(){
		let fecha = new Date();
		let hora = fecha.getHours();
		let min = fecha.getMinutes();
		let seg = fecha.getSeconds();

		if (hora<10){
		hora= "0"+hora;
		}
		if (min<10){
		min= "0"+min;
		}
		if (seg<10){
		seg= "0"+seg;
		}

		let x = hora + " : " + min + " : " + seg;

		$("#dingdong").html(x);
	}, 1000);
});
