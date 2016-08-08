$( document ).ready(function() {
    console.log( "ready!" );

$(function(){
	var $range = $(".js-range-slider");
	var obj={
						0: "0years",
						0.5 : "0years 6 months",
						1: "1 years",
						1.5 : "1 years 6 months",
						2: "2years",
						2.5 : "2years 6 months",
						3: "3years",
						3.5 : "3years 6 months",
						4: "4years",
						4.5 : "4years 6 months",
						5: "5years",
						5.5 : "5years 6 months",
						6: "6years",
						6.5 : "6years 6 months",
						7: "7years",
						7.5 : "7years 6 months",
						8: "8years",
						8.5 : "8years 6 months",
						9: "9years",
						9.5 : "9years 6 months",
						10: "10years",
						10.5 : "10years 6 months",
						11: "11 years",
						11.5 : "11 years 6 months",
						12: "12years",
						12.5 : "12years 6 months",
						13: "13years",
						13.5 : "13years 6 months",
						14: "14years",
						14.5 : "14years 6 months",
						15: "15years",
						15.5 : "15years 6 months",
						16: "16years",
						16.5 : "16years 6 months",
						17: "17years",
						17.5 : "17years 6 months",
						18: "18years",
						18.5 : "18years 6 months",
						19: "19years",
						19.5 : "19years 6 months",
						20: "20years",
						20.5 : "20years 6 months",
						21: "21 years",
						21.5 : "21 years 6 months",
						22: "22years",
						22.5 : "22years 6 months",
						23: "23years",
						23.5 : "23years 6 months",
						24: "24years",
						24.5 : "24years 6 months",
						25: "25years",
						25.5 : "25years 6 months",
						26: "26years",
						26.5 : "26years 6 months",
						27: "27years",
						27.5 : "27years 6 months",
						28: "28years",
						28.5 : "28years 6 months",
						29: "29years",
						29.5 : "29years 6 months",
						30: "30years",
						30.5 : "30years 6 months",
						31: "31 years",
						31.5 : "31 years 6 months",
						32: "32years",
						32.5 : "32years 6 months",
						33: "33years",
						33.5 : "33years 6 months",
						34: "34years",
						34.5 : "34years 6 months",
						35: "35years",
						35.5 : "35years 6 months",
						36: "36years",
						36.5 : "36years 6 months",
						37: "37years",
						37.5 : "37years 6 months",
						38: "38years",
						38.5 : "38years 6 months",
						39: "39years",
						39.5 : "39years 6 months",
						40: "40years"
					}
	$range.ionRangeSlider({
	    min: 0,
	    max: 40,
	    from: 0,
	    step: 0.5,
	    grid: true,
	    prettify: function (num, ctx) {
	     	return obj[num];
	    },
	    onFinish:  function (data) {
	        //console.log(data.from);
	        var result = $( "#result");
	        //var data=data.from;
	        result.html(obj[data.from]);
	        //console.log(data.from);
	    }
	});
});//]]> 
});
