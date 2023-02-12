vokabeltest_lektion_anzeigen = true


document.getElementById('letzte_aktualisierung').innerHTML = "Stand: 12.02.23 20:00"


letzte_aktualisierung = document.getElementsByClassName('letzte_aktualisierung')
letzte_aktualisierung[0].classList.add('hidden');




//Suche
/*
$('th').on('click', function(){
	 column = $(this).data('colname')
	 order = $(this).data('order')
	 text = $(this).html()
	text = text.substring(0, text.length - 1);
	
	
	
	if (order == 'desc'){
		myArray = myArray.sort((a, b) => a[column] > b[column] ? 1 : -1)
        $(this).data("order","asc");
        text += '&#9660'
	}else{
		myArray = myArray.sort((a, b) => a[column] < b[column] ? 1 : -1)
        $(this).data("order","desc");
        text += '&#9650'
	}
	
    $(this).html(text)
    buildTable(myArray)
})
*/







random_background()

function random_background() {
	var random = Math.round(14 * Math.random()) + 1;
	console.log(random)
	document.getElementById("background").src = 'Bilder/' + random + '.jpg'
}



setInterval(() => {
	random_background()
}, 600000)
// Alle 10 Min. (Nur wenn aktiv)







insgesamtVokabeltest_Lektion = document.getElementsByClassName('insgesamtVokabeltest_Lektion')
lernen_auswählen_vokabeltest = document.getElementsByClassName('lernen_auswählen_vokabeltest')
auswahl_Vokabeltest = document.getElementsByClassName('auswahl_Vokabeltest')

insgesamtVokabeltest_Lektion[0].classList.add('hidden');
lernen_auswählen_vokabeltest[0].classList.add('hidden');
auswahl_Vokabeltest[0].classList.add('hidden');


if(vokabeltest_lektion_anzeigen == true) {
	insgesamtVokabeltest_Lektion[0].classList.remove('hidden');
	lernen_auswählen_vokabeltest[0].classList.remove('hidden');
	auswahl_Vokabeltest[0].classList.remove('hidden');




buildTableVokabeltest_Lektion(Vokabeltest_Lektion)

function buildTableVokabeltest_Lektion(data) {
	var tableVokabeltest_Lektion = document.getElementById('tableVokabeltest_Lektion')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		tableVokabeltest_Lektion.innerHTML += row
	}
}

}




buildTableVokabeln_aus_keiner_Lektion(Vokabeln_aus_keiner_Lektion)

function buildTableVokabeln_aus_keiner_Lektion(data) {
	var tableVokabeln_aus_keiner_Lektion = document.getElementById('tableVokabeln_aus_keiner_Lektion')

	for (var i = 0; i < data.length; i++) {

		var row = `<tr class="row">
						<td class="first">${data[i].first}</td>
						<td class="second">${data[i].second}</td>
						<td>${data[i].third}</td>
				  </tr>`
		tableVokabeln_aus_keiner_Lektion.innerHTML += row
	}
}



var tables = [
	{ id: 'table01', data: Lektion01 },
	{ id: 'table02', data: Lektion02 },
	{ id: 'table03', data: Lektion03 },
	{ id: 'table04', data: Lektion04 },
	{ id: 'table05', data: Lektion05 },
	{ id: 'table06', data: Lektion06 },
	{ id: 'table07', data: Lektion07 },
	{ id: 'table08', data: Lektion08 },
	{ id: 'table09', data: Lektion09 },
	{ id: 'table10', data: Lektion10 },
	{ id: 'table11', data: Lektion11 },
	{ id: 'table12', data: Lektion12 },
	{ id: 'table13', data: Lektion13 },
	{ id: 'table14', data: Lektion14 },
	{ id: 'table15', data: Lektion15 },
	{ id: 'table16', data: Lektion16 },
	{ id: 'table17', data: Lektion17 },
	{ id: 'table18', data: Lektion18 },
	{ id: 'table19', data: Lektion19 },
	{ id: 'table20', data: Lektion20 },
	{ id: 'table21', data: Lektion21 },
	{ id: 'table22', data: Lektion22 },
	{ id: 'table23', data: Lektion23 },
	{ id: 'table24', data: Lektion24 },
	{ id: 'table25', data: Lektion25 },
	{ id: 'table26', data: Lektion26 },
	{ id: 'table27', data: Lektion27 },
	{ id: 'table28', data: Lektion28 },
	{ id: 'table29', data: Lektion29 },
	{ id: 'table30', data: Lektion30 },
	{ id: 'table31', data: Lektion31 },
	{ id: 'table32', data: Lektion32 },
	{ id: 'table33', data: Lektion33 }
  ];
  
  tables.forEach(function(tableData) {
	var table = document.getElementById(tableData.id);
	var data = tableData.data;

	buildTable(table, data);
  
  
  function buildTable(table, data) {
	for (var i = 0; i < data.length; i++) {
	  var row = `<tr class="row">
					<td class="first">${data[i].first}</td>
					<td class="second">${data[i].second}</td>
					<td>${data[i].third}</td>
				  </tr>`;
	  table.innerHTML += row;
	}
  }
  }
  
  );













var urlMenu = document.getElementById('Lektion_select');
urlMenu.onchange = function () {
	var userOption = this.options[this.selectedIndex];
	if (userOption.value != "all") {
		window.open(userOption.value, "idk", "");
	}
	if (userOption.value == "#all") {
		all()
	}
	if (userOption.value == "#lek_Vokabeltest_Lektion") {
		hide_all_außerVokabeltest_Lektion()
	}
	if (userOption.value == "#lek_Vokabeln_aus_keiner_Lektion") {
		hide_all_außerVokabeln_aus_keiner_Lektion()
	}
	if (userOption.value == "#lek_01") {
		hide_all_außer01()
	}
	if (userOption.value == "#lek_02") {
		hide_all_außer02()
	}
	if (userOption.value == "#lek_03") {
		hide_all_außer03()
	}
	if (userOption.value == "#lek_04") {
		hide_all_außer04()
	}
	if (userOption.value == "#lek_05") {
		hide_all_außer05()
	}
	if (userOption.value == "#lek_06") {
		hide_all_außer06()
	}
	if (userOption.value == "#lek_07") {
		hide_all_außer07()
	}
	if (userOption.value == "#lek_08") {
		hide_all_außer08()
	}
	if (userOption.value == "#lek_09") {
		hide_all_außer09()
	}
	if (userOption.value == "#lek_10") {
		hide_all_außer10()
	}
	if (userOption.value == "#lek_11") {
		hide_all_außer11()
	}
	if (userOption.value == "#lek_12") {
		hide_all_außer12()
	}
	if (userOption.value == "#lek_13") {
		hide_all_außer13()
	}
	if (userOption.value == "#lek_14") {
		hide_all_außer14()
	}
	if (userOption.value == "#lek_15") {
		hide_all_außer15()
	}
	if (userOption.value == "#lek_16") {
		hide_all_außer16()
	}
	if (userOption.value == "#lek_17") {
		hide_all_außer17()
	}
	if (userOption.value == "#lek_18") {
		hide_all_außer18()
	}
	if (userOption.value == "#lek_19") {
		hide_all_außer19()
	}
	if (userOption.value == "#lek_20") {
		hide_all_außer20()
	}
	if (userOption.value == "#lek_21") {
		hide_all_außer21()
	}
	if (userOption.value == "#lek_22") {
		hide_all_außer22()
	}
	if (userOption.value == "#lek_23") {
		hide_all_außer23()
	}
	if (userOption.value == "#lek_24") {
		hide_all_außer24()
	}
	if (userOption.value == "#lek_25") {
		hide_all_außer25()
	}
	if (userOption.value == "#lek_26") {
		hide_all_außer26()
	}
	if (userOption.value == "#lek_27") {
		hide_all_außer27()
	}
	if (userOption.value == "#lek_28") {
		hide_all_außer28()
	}
	if (userOption.value == "#lek_29") {
		hide_all_außer29()
	}
	if (userOption.value == "#lek_30") {
		hide_all_außer30()
	}
	if (userOption.value == "#lek_31") {
		hide_all_außer31()
	}
	if (userOption.value == "#lek_32") {
		hide_all_außer32()
	}
	if (userOption.value == "#lek_33") {
		hide_all_außer33()
	}
	
}



body = document.getElementsByClassName('body')

version_div_groß = document.getElementsByClassName('version_div')
version_info_groß = document.getElementsByClassName('version_info')
version_headline_groß = document.getElementsByClassName('version_headline')
version_number_latest_groß = document.getElementsByClassName('version_number_latest')
version_hide_menü_x_btn_groß = document.getElementsByClassName('version_hide_menü_x_btn')
patch_notes_groß = document.getElementsByClassName('patch_notes')
fehler_seite_groß = document.getElementsByClassName('fehler_seite')
fehler_seite_zurück_pfeil_btn_ = document.getElementsByClassName('fehler_seite_zurück_pfeil_btn')





selected_Vokabeltest_Lektion = document.getElementsByClassName('insgesamtVokabeltest_Lektion')
selected_Vokabeln_aus_keiner_Lektion = document.getElementsByClassName('insgesamtVokabeln_aus_keiner_Lektion')
selected_01 = document.getElementsByClassName('insgesamt01')
selected_02 = document.getElementsByClassName('insgesamt02')
selected_03 = document.getElementsByClassName('insgesamt03')
selected_04 = document.getElementsByClassName('insgesamt04')
selected_05 = document.getElementsByClassName('insgesamt05')
selected_06 = document.getElementsByClassName('insgesamt06')
selected_07 = document.getElementsByClassName('insgesamt07')
selected_08 = document.getElementsByClassName('insgesamt08')
selected_09 = document.getElementsByClassName('insgesamt09')
selected_10 = document.getElementsByClassName('insgesamt10')
selected_11 = document.getElementsByClassName('insgesamt11')
selected_12 = document.getElementsByClassName('insgesamt12')
selected_13 = document.getElementsByClassName('insgesamt13')
selected_14 = document.getElementsByClassName('insgesamt14')
selected_15 = document.getElementsByClassName('insgesamt15')
selected_16 = document.getElementsByClassName('insgesamt16')
selected_17 = document.getElementsByClassName('insgesamt17')
selected_18 = document.getElementsByClassName('insgesamt18')
selected_19 = document.getElementsByClassName('insgesamt19')
selected_20 = document.getElementsByClassName('insgesamt20')
selected_21 = document.getElementsByClassName('insgesamt21')
selected_22 = document.getElementsByClassName('insgesamt22')
selected_23 = document.getElementsByClassName('insgesamt23')
selected_24 = document.getElementsByClassName('insgesamt24')
selected_25 = document.getElementsByClassName('insgesamt25')
selected_26 = document.getElementsByClassName('insgesamt26')
selected_27 = document.getElementsByClassName('insgesamt27')
selected_28 = document.getElementsByClassName('insgesamt28')
selected_29 = document.getElementsByClassName('insgesamt29')
selected_30 = document.getElementsByClassName('insgesamt30')
selected_31 = document.getElementsByClassName('insgesamt31')
selected_32 = document.getElementsByClassName('insgesamt32')
selected_33 = document.getElementsByClassName('insgesamt33')

const selected = [
	selected_01,
	selected_02,
	selected_03,
	selected_04,
	selected_05,
	selected_06,
	selected_07,
	selected_08,
	selected_09,
	selected_10,
	selected_11,
	selected_12,
	selected_13,
	selected_14,
	selected_15,
	selected_16,
	selected_17,
	selected_18,
	selected_19,
	selected_20,
	selected_21,
	selected_22,
	selected_23,
	selected_24,
	selected_25,
	selected_26,
	selected_27,
	selected_28,
	selected_29,
	selected_30,
	selected_31,
	selected_32,
	selected_33
];
  

all_lernen = document.getElementsByClassName('all_lernen')

all_lernen[0].classList.add('hidden');
fehler_seite_groß[0].classList.remove('fehler_seite_groß');
fehler_seite_groß[0].classList.add('hidden');
fehler_seite_zurück_pfeil_btn_[0].classList.add('hidden');


function hide_all() {
	
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}	
			
	selected_Vokabeln_aus_keiner_Lektion[0].classList.add('hidden');
	for (const elem of selected) {
		elem[0].classList.add('hidden');
	  }
	

}

function all() {

	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}

	selected_Vokabeln_aus_keiner_Lektion[0].classList.remove('hidden');
	for (const elem of selected) {
		elem[0].classList.remove('hidden');
	  }
	

}




function hide_all_außerVokabeltest_Lektion() {
	hide_all()
	selected_Vokabeltest_Lektion[0].classList.remove('hidden');
}

function hide_all_außerVokabeln_aus_keiner_Lektion() {
	hide_all()
	selected_Vokabeln_aus_keiner_Lektion[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer01() {
	hide_all()
	selected_01[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer02() {
	hide_all()
	selected_02[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer03() {
	hide_all()
	selected_03[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer04() {
	hide_all()
	selected_04[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer05() {
	hide_all()
	selected_05[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer06() {
	hide_all()
	selected_06[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer07() {
	hide_all()
	selected_07[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer08() {
	hide_all()
	selected_08[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer09() {
	hide_all()
	selected_09[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer10() {
	hide_all()
	selected_10[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer11() {
	hide_all()
	selected_11[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer12() {
	hide_all()
	selected_12[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer13() {
	hide_all()
	selected_13[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer14() {
	hide_all()
	selected_14[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer15() {
	hide_all()
	selected_15[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer16() {
	hide_all()
	selected_16[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer17() {
	hide_all()
	selected_17[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer18() {
	hide_all()
	selected_18[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer19() {
	hide_all()
	selected_19[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer19() {
	hide_all()
	selected_19[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer20() {
	hide_all()
	selected_20[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer21() {
	hide_all()
	selected_21[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer22() {
	hide_all()
	selected_22[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer23() {
	hide_all()
	selected_23[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer24() {
	hide_all()
	selected_24[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer25() {
	hide_all()
	selected_25[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer26() {
	hide_all()
	selected_26[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer27() {
	hide_all()
	selected_27[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer28() {
	hide_all()
	selected_28[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}

function hide_all_außer29() {
	hide_all()
	selected_29[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer30() {
	hide_all()
	selected_30[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer31() {
	hide_all()
	selected_31[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer32() {
	hide_all()
	selected_32[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}
function hide_all_außer33() {
	hide_all()
	selected_33[0].classList.remove('hidden');
	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.add('hidden');
		}
}



lernen_auswahl_latein = document.getElementsByClassName('lernen_auswahl_latein')
all_all = document.getElementsByClassName('all_all')
search_div = document.getElementsByClassName('search_div')

all_lernen_einfach = document.getElementsByClassName('all_lernen_einfach')
btn_gewusst_nichtgewusst = document.getElementsByClassName('btn_gewusst_nichtgewusst')


lernen_auswahl_latein[0].classList.add('hidden');


function lernen() {

	lernen_auswahl_latein[0].classList.remove('hidden');
	all_all[0].classList.add('hidden');
	search_div[0].classList.add('hidden');



}


function lernen_hide_menü() {
	lernen_auswahl_latein[0].classList.add('hidden');
	all_all[0].classList.remove('hidden');
	search_div[0].classList.remove('hidden');


}




document.getElementById('länge_Vokabeltest_Lektion').innerHTML = Vokabeltest_Lektion.length
document.getElementById('länge_01').innerHTML = Lektion01.length
document.getElementById('länge_02').innerHTML = Lektion02.length
document.getElementById('länge_03').innerHTML = Lektion03.length
document.getElementById('länge_04').innerHTML = Lektion04.length
document.getElementById('länge_05').innerHTML = Lektion05.length
document.getElementById('länge_06').innerHTML = Lektion06.length
document.getElementById('länge_07').innerHTML = Lektion07.length
document.getElementById('länge_08').innerHTML = Lektion08.length
document.getElementById('länge_09').innerHTML = Lektion09.length
document.getElementById('länge_10').innerHTML = Lektion10.length
document.getElementById('länge_11').innerHTML = Lektion11.length
document.getElementById('länge_12').innerHTML = Lektion12.length
document.getElementById('länge_13').innerHTML = Lektion13.length
document.getElementById('länge_14').innerHTML = Lektion14.length
document.getElementById('länge_15').innerHTML = Lektion15.length
document.getElementById('länge_16').innerHTML = Lektion16.length
document.getElementById('länge_17').innerHTML = Lektion17.length
document.getElementById('länge_18').innerHTML = Lektion18.length
document.getElementById('länge_19').innerHTML = Lektion19.length
document.getElementById('länge_20').innerHTML = Lektion20.length
document.getElementById('länge_21').innerHTML = Lektion21.length
document.getElementById('länge_22').innerHTML = Lektion22.length
document.getElementById('länge_23').innerHTML = Lektion23.length
document.getElementById('länge_24').innerHTML = Lektion24.length
document.getElementById('länge_25').innerHTML = Lektion25.length
document.getElementById('länge_26').innerHTML = Lektion26.length
document.getElementById('länge_27').innerHTML = Lektion27.length
document.getElementById('länge_28').innerHTML = Lektion28.length
document.getElementById('länge_29').innerHTML = Lektion29.length
document.getElementById('länge_30').innerHTML = Lektion30.length
document.getElementById('länge_31').innerHTML = Lektion31.length
document.getElementById('länge_32').innerHTML = Lektion32.length
document.getElementById('länge_33').innerHTML = Lektion33.length






aktuell_lernen = false


function lernen_einfach_weiter() {
	lernen_modus = "einfach"
	lernen_weiter()
}



function lernen_standard_weiter() {
	lernen_modus = "standard"
	lernen_weiter()
}


function lernen_weiter() {
		checkboxField = document.forms[0].lernen_checked;

	for (i = 0; i < checkboxField.length; i++) {
		if (checkboxField[i].checked) {
			console.log(checkboxField[i].value); //loggt die ausgewählte Lektion

			ausgewählt_lektion = checkboxField[i]










			checkboxField_formen = document.forms[1].checkbox_haken_mit_ohne_sonstige_formen_checked;

			if (checkboxField_formen.checked) {
				mit_formen = true
			} else {
				mit_formen = false
			}





			all_all[0].classList.add('hidden');

			all_lernen[0].classList.remove('hidden');
			all_lernen[0].classList.add('lernen_design_css');

			lernen_auswahl_latein[0].classList.add('hidden');
			search_div[0].classList.add('hidden');


			lernen_lat = document.getElementsByClassName("lernen_lat")
			lernen_de_sonst = document.getElementsByClassName("lernen_de_sonst")
			div_lernen_de_sonst = document.getElementsByClassName("div_lernen_de_sonst")

			lernen_einfach_btn_1_1 = document.getElementsByClassName("lernen_einfach_btn_1")
			lernen_einfach_btn_2_1 = document.getElementsByClassName("lernen_einfach_btn_2")
			lernen_einfach_btn_3_1 = document.getElementsByClassName("lernen_einfach_btn_3")



			if (lernen_modus == "standard") {
				div_lernen_de_sonst[0].classList.remove('hidden');
				all_lernen_einfach[0].classList.add('hidden');
			} else {
				btn_gewusst_nichtgewusst[0].classList.add('hidden');
				div_lernen_de_sonst[0].classList.add('hidden');
			}
			aktuell_lernen = true




			geschafte_wörter = [];
			gesehene_wörter = [];
			gesamt_fehleranzahl = [];
			nicht_beim_ersten_mal = [];


			lösung_angezeigt = false


			neue_vok()




			if (checkboxField[i].value == "Vokabeltest_Lektion") {
				lernen_noch_länge = Vokabeltest_Lektion.length
			}
			if (checkboxField[i].value == "Lektion01") {
				lernen_noch_länge = Lektion01.length
			}
			if (checkboxField[i].value == "Lektion02") {
				lernen_noch_länge = Lektion02.length
			}
			if (checkboxField[i].value == "Lektion03") {
				lernen_noch_länge = Lektion03.length
			}
			if (checkboxField[i].value == "Lektion04") {
				lernen_noch_länge = Lektion04.length
			}
			if (checkboxField[i].value == "Lektion05") {
				lernen_noch_länge = Lektion05.length
			}
			if (checkboxField[i].value == "Lektion06") {
				lernen_noch_länge = Lektion06.length
			}
			if (checkboxField[i].value == "Lektion07") {
				lernen_noch_länge = Lektion07.length
			}
			if (checkboxField[i].value == "Lektion08") {
				lernen_noch_länge = Lektion08.length
			}
			if (checkboxField[i].value == "Lektion09") {
				lernen_noch_länge = Lektion09.length
			}
			if (checkboxField[i].value == "Lektion10") {
				lernen_noch_länge = Lektion10.length
			}
			if (checkboxField[i].value == "Lektion11") {
				lernen_noch_länge = Lektion11.length
			}
			if (checkboxField[i].value == "Lektion12") {
				lernen_noch_länge = Lektion12.length
			}
			if (checkboxField[i].value == "Lektion13") {
				lernen_noch_länge = Lektion13.length
			}
			if (checkboxField[i].value == "Lektion14") {
				lernen_noch_länge = Lektion14.length
			}
			if (checkboxField[i].value == "Lektion15") {
				lernen_noch_länge = Lektion15.length
			}
			if (checkboxField[i].value == "Lektion16") {
				lernen_noch_länge = Lektion16.length
			}
			if (checkboxField[i].value == "Lektion17") {
				lernen_noch_länge = Lektion17.length
			}
			if (checkboxField[i].value == "Lektion18") {
				lernen_noch_länge = Lektion18.length
			}
			if (checkboxField[i].value == "Lektion19") {
				lernen_noch_länge = Lektion19.length
			}
			if (checkboxField[i].value == "Lektion20") {
				lernen_noch_länge = Lektion20.length
			}
			if (checkboxField[i].value == "Lektion21") {
				lernen_noch_länge = Lektion21.length
			}
			if (checkboxField[i].value == "Lektion22") {
				lernen_noch_länge = Lektion22.length
			}
			if (checkboxField[i].value == "Lektion23") {
				lernen_noch_länge = Lektion23.length
			}
			if (checkboxField[i].value == "Lektion24") {
				lernen_noch_länge = Lektion24.length
			}
			if (checkboxField[i].value == "Lektion25") {
				lernen_noch_länge = Lektion25.length
			}
			if (checkboxField[i].value == "Lektion26") {
				lernen_noch_länge = Lektion26.length
			}
			if (checkboxField[i].value == "Lektion27") {
				lernen_noch_länge = Lektion27.length
			}
			if (checkboxField[i].value == "Lektion28") {
				lernen_noch_länge = Lektion28.length
			}
			if (checkboxField[i].value == "Lektion29") {
				lernen_noch_länge = Lektion29.length
			}
			if (checkboxField[i].value == "Lektion30") {
				lernen_noch_länge = Lektion30.length
			}
			if (checkboxField[i].value == "Lektion31") {
				lernen_noch_länge = Lektion31.length
			}
			if (checkboxField[i].value == "Lektion32") {
				lernen_noch_länge = Lektion32.length
			}
			if (checkboxField[i].value == "Lektion33") {
				lernen_noch_länge = Lektion33.length
			}
			

			window.addEventListener("keydown", lösung_anzeigen_event, false)

			function lösung_anzeigen_event(key) {

				if (lernen_modus == "standard") {

					if (key.keyCode == "32") {
						setTimeout(() => {
							lösung_angezeigt = true
						}, 400);

						lösung_anzeigen()

						function lösung_anzeigen() {




							if (mit_formen == true) {
								document.getElementById("lernen_de_sonst").innerHTML = zweites_wort + "<br/><br/>" + drittes_wort
							} else {
								document.getElementById("lernen_de_sonst").innerHTML = zweites_wort + "<br/><br/>"
							}


							lernen_lat[0].classList.add('lösung_gezeigt_lat');
							lernen_de_sonst[0].classList.add('lösung_gezeigt_de_sonst');
							lernen_de_sonst[0].classList.remove('hidden');
						}
					}
					if (key.keyCode == "67" | key.keyCode == "86") {
						nicht_gewusst()


					} else {
						if (key.keyCode == "78" | key.keyCode == "77") {
							gewusst()
						}
					}
				}
			}
		}
	}
}

function gewusst() {

	if (lernen_modus == "standard") {

		if (lernen_noch_länge == 1) {
			geschaft_kürzer_1()
		} else {
			geschaft_länger_1()
		}
	} else {

		if (lernen_noch_länge == 3) {
			geschaft_kürzer_1()
		} else {
			geschaft_länger_1()
		}

	}
}

function nicht_gewusst() {
	if (lernen_modus == "standard") {

		if (lernen_noch_länge == 1) {
			nicht_geschaft_kürzer_1()
		} else {
			nicht_geschaft_länger_1()
		}
	} else {

		if (lernen_noch_länge == 3) {
			nicht_geschaft_kürzer_1()
		} else {
			nicht_geschaft_länger_1()
		}

	}

}

function nicht_geschaft_länger_1() {
	if (lösung_angezeigt == true) {
		gesamt_fehleranzahl ++
		document.getElementById("gesamt_fehleranzahl").innerHTML = "Gesamte <br> Fehleranzahl: " + gesamt_fehleranzahl
		neue_vok()
		//lösung_angezeigt = true
		lösung_angezeigt = false
	}
}

function nicht_geschaft_kürzer_1() {
	lernen_fertig()
}

function geschaft_länger_1() {
	if (lösung_angezeigt == true) {
		geschaft()
		neue_vok()
		//lösung_angezeigt = true
		lösung_angezeigt = false
	}
}

function geschaft_kürzer_1() {
	lernen_fertig()
}

function lernen_einfach_btn_1() {
	lernen_einfach_btn_selected = 1
	lernen_einfach_richtig_oder_nicht()
}


function lernen_einfach_btn_2() {
	lernen_einfach_btn_selected = 2
	lernen_einfach_richtig_oder_nicht()
}


function lernen_einfach_btn_3() {
	lernen_einfach_btn_selected = 3
	lernen_einfach_richtig_oder_nicht()
}

function lernen_einfach_richtig_oder_nicht() {
	if (random_3 == lernen_einfach_btn_selected) {
		lösung_angezeigt = true
		gewusst()

		if (lernen_einfach_btn_selected == 1) {
			console.log("gewusst 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
			}, 1000);

		}
		if (lernen_einfach_btn_selected == 2) {
			console.log("gewusst 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_richtig');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}
		if (lernen_einfach_btn_selected == 3) {
			console.log("gewusst 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}




	} else {
		lösung_angezeigt = true
		nicht_gewusst()


		if (lernen_einfach_btn_selected == 1) {
			console.log("nicht gewusst 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_falsch');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_falsch');
			}, 1000);
		}
		if (lernen_einfach_btn_selected == 2) {
			console.log("nicht gewusst 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_falsch');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_falsch');

			}, 1000);
		}
		if (lernen_einfach_btn_selected == 3) {
			console.log("nicht gewusst 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_falsch');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_falsch');

			}, 1000);
		}




		if (lernen_einfach_btn_richtig == 1) {
			console.log("richtig 1")
			lernen_einfach_btn_1_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
			}, 1000);

		}
		if (lernen_einfach_btn_richtig == 2) {
			console.log("richtig 2")
			lernen_einfach_btn_2_1[0].classList.add('lernen_einfach_richtig');

			setTimeout(() => {
				lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);

		}
		if (lernen_einfach_btn_richtig == 3) {
			console.log("richtig 3")
			lernen_einfach_btn_3_1[0].classList.add('lernen_einfach_richtig');
			setTimeout(() => {
				lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');

			}, 1000);
		}




		/*
	setTimeout(() => {  
		
		lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_1_1[0].classList.remove('lernen_einfach_falsch');
		lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_2_1[0].classList.remove('lernen_einfach_falsch');
		lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_richtig');
		lernen_einfach_btn_3_1[0].classList.remove('lernen_einfach_falsch');

	 }, 1000);
	 */
	}
}







function lernen_fertig() {

	document.getElementById("gesamt_fehleranzahl").innerHTML = ""

	aktuell_lernen = false

	all_lernen[0].classList.remove('lernen_design_css');

	all_lernen[0].classList.add('hidden');
	btn_gewusst_nichtgewusst[0].classList.remove('hidden');

	if(vokabeltest_lektion_anzeigen == true) {
		selected_Vokabeltest_Lektion[0].classList.remove('hidden');
		}

	for (const elem of selected) {
		elem[0].classList.remove('hidden');
	  }
	



	all_all[0].classList.remove('blur');
	search_div[0].classList.remove('blur');



	all_all[0].classList.remove('hidden');
	lernen_auswahl_latein[0].classList.add('hidden');
	search_div[0].classList.remove('hidden');

	all_lernen_einfach[0].classList.remove('hidden');


	document.getElementById("noch_länge_lek").innerHTML = ""
}






function neue_vok() {

	if (lernen_modus == "standard") {
		neue_vok_standard()
	} else {

		neue_vok_einfach()

		function neue_vok_einfach() {




			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_erste_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_erste_option = zweites_wort
			}
			lernen_einfach_erste_option_abgleich = erstes_wort

			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_zweite_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_zweite_option = zweites_wort
			}
			lernen_einfach_zweite_option_abgleich = erstes_wort

			neue_vok_standard()
			if (mit_formen == true) {
				lernen_einfach_dritte_option = zweites_wort + "<br/><br/>" + drittes_wort
			} else {
				lernen_einfach_dritte_option = zweites_wort
			}
			lernen_einfach_dritte_option_abgleich = erstes_wort

			lernen_einfach_abgleich = erstes_wort

			console.log(lernen_einfach_abgleich)
			if ((lernen_einfach_abgleich == lernen_einfach_erste_option_abgleich) || (lernen_einfach_abgleich == lernen_einfach_zweite_option_abgleich) || (lernen_einfach_abgleich == lernen_einfach_dritte_option_abgleich)) {

			} else {

				console.log("Abgleich")
				neue_vok()

			}




			if ((lernen_einfach_erste_option == lernen_einfach_zweite_option) | (lernen_einfach_erste_option == lernen_einfach_dritte_option) | (lernen_einfach_zweite_option == lernen_einfach_dritte_option)) {
				console.log("Mind. eine Übereinstimmung")
				neue_vok()
			}



		}

		setTimeout(() => {



			random_3 = Math.round(2 * Math.random()) + 1;

			if (random_3 == 1) {
				//console.log(random_3)

				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 1
			}
			if (random_3 == 2) {
				console.log(random_3)
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 2
			}
			if (random_3 == 3) {
				console.log(random_3)
				document.getElementById('lernen_einfach_btn_1').innerHTML = lernen_einfach_erste_option
				document.getElementById('lernen_einfach_btn_2').innerHTML = lernen_einfach_zweite_option
				document.getElementById('lernen_einfach_btn_3').innerHTML = lernen_einfach_dritte_option

				lernen_einfach_btn_richtig = 3
			}


		}, 1000);

	}
}


function neue_vok_standard() {







	if (ausgewählt_lektion.value == "Vokabeltest_Lektion") {
		random_item = Vokabeltest_Lektion[Math.floor(Math.random() * Vokabeltest_Lektion.length)];
		lernen_lektion_anzeige = "Vokabeltest"
		länge_lek = "Gesamt : " + Vokabeltest_Lektion.length + " Wörter"
		länge_lek_number = Vokabeltest_Lektion.length
	}
	


/* Hier funktioniert es auch mit "Variabelzahlen" bis ins "unendliche" (Auch wenn die Zehnerstelle anders ist)
   ChatGPTs ausgabe (ohne Kontext):

   Die obige Schleife verwendet eine Template-Literal-Syntax, um die ID-Nummer in den ID-Namen und den Arraynamen einzufügen.

   Der Code verwendet die toString-Methode und die padStart-Methode, um sicherzustellen, dass die ID-Nummer immer mit zwei Stellen 
   angezeigt wird (z.B. "01" anstelle von "1"). Wenn der Wert von i bereits zwei Stellen hat, wird er unverändert zurückgegeben.

   
*/
for (let i = 1; i <= 33; i++) {
	let id = `Lektion${i.toString().padStart(2, '0')}`;
	if (ausgewählt_lektion.value == id) {
	  let array = window[id];
	  random_item = array[Math.floor(Math.random() * array.length)];
	  lernen_lektion_anzeige = `Lektion ${i}`;
	  länge_lek = `Gesamt: ${array.length} Wörter`;
	  länge_lek_number = array.length;
	}
  }
  








	setTimeout(() => {
		lernen_de_sonst[0].classList.add('hidden');
	}, 300);


	lernen_lat[0].classList.remove('lösung_gezeigt_lat');
	lernen_de_sonst[0].classList.remove('lösung_gezeigt_de_sonst');


	all_lernen[0].classList.remove('hidden');




	console.log(random_item)
	random_item = JSON.stringify(random_item)

	// +1 wegen der suche. sonst nicht
	// erster Buchstabe : plus 2
	erster_doppelpunkt = random_item.indexOf(":") + 1
	zweiter_doppelpunkt = random_item.indexOf(":", erster_doppelpunkt) + 1
	dritter_doppelpunkt = random_item.indexOf(":", zweiter_doppelpunkt) + 1


	anfang_erstes_wort = erster_doppelpunkt + 1
	anfang_zweites_wort = zweiter_doppelpunkt + 1
	anfang_drittes_wort = dritter_doppelpunkt + 1



	ende_erstes_wort = anfang_zweites_wort - 12
	ende_zweites_wort = anfang_drittes_wort - 11
	ende_drittes_wort = random_item.length - 2

	erstes_wort = random_item.slice(anfang_erstes_wort, ende_erstes_wort)
	zweites_wort = random_item.slice(anfang_zweites_wort, ende_zweites_wort)
	drittes_wort = random_item.slice(anfang_drittes_wort, ende_drittes_wort)




	/*
	//		Statistik
	if (gesehene_wörter.includes(erstes_wort)) {
		console.log("**Ist** schon in 'gesehene Wörter' drin")
		if (nicht_beim_ersten_mal.includes(erstes_wort)){
		}else{
			nicht_beim_ersten_mal.push(erstes_wort);
			console.log("nicht_beim_ersten_mal : " + nicht_beim_ersten_mal)
		}
	}else{
		console.log("Ist noch **nicht** in 'gesehene Wörter' drin")
	gesehene_wörter.push(erstes_wort);
	console.log("gesehene_wörter : " + gesehene_wörter)
	}
	*/

	// prozent_beim_ersten_mal =   nicht_beim_ersten_mal.length / länge_lek_number
	//console.log(prozent_beim_ersten_mal)






	if (geschafte_wörter.includes(erstes_wort)) {
		neue_vok_standard()
	} else {


		document.getElementById("lernen_lek").innerHTML = lernen_lektion_anzeige
		document.getElementById("länge_lek").innerHTML = länge_lek

		if (lernen_modus == "standard") {
			setTimeout(() => {
				document.getElementById("lernen_lat").innerHTML = erstes_wort
			}, 300);
		} else {
			setTimeout(() => {
				document.getElementById("lernen_lat").innerHTML = erstes_wort
			}, 1000);
		}

		lernen_einfach_abgleich = erstes_wort


	}



} //neu_vok_standard ende


function geschaft() {

	if (geschafte_wörter.includes(erstes_wort)) {
		neue_vok()
	}
	geschafte_wörter.push(erstes_wort);
	console.log("geschafte_wörter : " + geschafte_wörter);

	lernen_noch_länge = lernen_noch_länge - 1
	setTimeout(() => {
		document.getElementById("noch_länge_lek").innerHTML = "Noch : " + lernen_noch_länge + " Wörter"
	}, 300);

}


patch_notes_groß[0].classList.add('hidden');
// Damit beim suchen auf der Seite nicht auch Suchergebnisse aus den Patch Notes mit angezeigt werden

function version_info() {
	version_div_groß[0].classList.add('version_div_groß');
	version_info_groß[0].classList.add('version_info_groß');
	version_headline_groß[0].classList.add('version_headline_groß');
	version_hide_menü_x_btn_groß[0].classList.add('version_hide_menü_x_btn_groß');
	version_number_latest_groß[0].classList.add('version_number_latest_groß');
	patch_notes_groß[0].classList.add('patch_notes_groß');
	letzte_aktualisierung[0].classList.remove('hidden');
	fehler_seite_zurück_pfeil_btn()
	all_all[0].classList.add('hidden');
	body[0].classList.add('noscroll');
}

function hide_version_div_btn() {

	version_div_groß[0].classList.remove('version_div_groß');
	version_info_groß[0].classList.remove('version_info_groß');
	version_headline_groß[0].classList.remove('version_headline_groß');
	version_hide_menü_x_btn_groß[0].classList.remove('version_hide_menü_x_btn_groß');
	patch_notes_groß[0].classList.remove('patch_notes_groß');
	version_number_latest_groß[0].classList.remove('version_number_latest_groß');
	letzte_aktualisierung[0].classList.add('hidden');

	fehler_seite_zurück_pfeil_btn()
	
	patch_notes_groß[0].classList.add('hidden');


	if (aktuell_lernen == false) {
		all_all[0].classList.remove('hidden');
		body[0].classList.remove('noscroll');
	}
}

function fehler_seite() {
	patch_notes_groß[0].classList.add('hidden');
	fehler_seite_groß[0].classList.add('fehler_seite_groß');
	fehler_seite_groß[0].classList.remove('hidden');
	fehler_seite_zurück_pfeil_btn_[0].classList.remove('hidden');

}

function fehler_seite_zurück_pfeil_btn() {
	patch_notes_groß[0].classList.remove('hidden');
	fehler_seite_groß[0].classList.remove('fehler_seite_groß');
	fehler_seite_zurück_pfeil_btn_[0].classList.add('hidden');
	fehler_seite_groß[0].classList.add('hidden');
}
