/*!!!! Ввиду того, что модуль а5 сделан плохо,
выкладываю копирайт того, как я все делал за 
ментором!!!!*/

/*
 В начале создаем функцию: function handleData(data (данные))
{console.log(data["text"])(это говорит о том, что функция 
выводит не просто данные (data), а то что 
находится в этих данных, в данном случае - текст),
 она выводит в консоль данные текста в 
нашем json файле и передается json файлу как параметр. Далее, эту
функцию трансформируем в unction handleData(data){
	let finalMessage = "";
	data["text"].forEach(function(item,index) {
		finalMessage = finalMessage + item + <br> ;
		
	}); */
	
const dataURL = "https://api.myjson.com/bins/jcmhn";

/*создана переменная, значение которой - ссылка на нужный json файл*/

function handleButton() {
  $.getJSON(dataURL, handleData);
}

function handleData(data) {

	let finalMessage = "";

	let var1 = $("input[name=var1]")[0].value;
	/*[0] говорит о том, что берем первый
	элемент из списка значений, .value говорит взять 
	содержимое этого элемента */

	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;

	data["text"].forEach(function(item, index) {

		item = item.replace ("{var1}", var1);/*здесь создается копия и заменяется на 
		новый экземпляр этого объекта*/
		item = item.replace("{var2}", var2);
		item = item.replace("{var3}", var3);
		item = item.replace("{var4}", var4);
		item = item.replace("{var5}", var5);
		item = item.replace("{var6}", var6);
		item = item.replace("{speach}", speach);

		finalMessage = finalMessage + item + "<br>";
		});

	$("div#result").html(finalMessage);
/* Функция forEach "вытаскивает" текст из массива, метод html
 дает понять пк, что нужно рассматривать не просто текст, а
 html*/
}

function init() {
	$("#button-fetch").click(handleButton);
}
//эта функция создана, чтобы привязать событие клик по кнопке
//к выводу текста на экран.
$(document).ready(init);