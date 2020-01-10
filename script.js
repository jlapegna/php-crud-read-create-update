// REPO: php-crud-read-create-update
// GOAL:
// creare una pagina che stampi tutte le configurazioni presenti nel DB. Dare inoltre la possibilita' di aggiungere una nuova configurazione (titolo e descrizione) e tentare l'approccio per una update (aggiornamento di una configurazione esistente).
// BONUS:
// in caso di prematura riuscita di tutto l'esercizio procedere con l'eliminazione di una configurazione esistente



function targetReset() {

  var target = $("#container");
  target.html('');
}

// 1. A function that takes the array returned by AJAX and uses Handlebars to display the results
function printConfig(configurazioni){

    targetReset();

  var target = $("#container");

  var template = $("#box-template").html();
  var compiled = Handlebars.compile(template);

  for(var i = 0; i < configurazioni.length;i++){

    var config = configurazioni[i];
    var compiledCD = compiled(config);
    $("#container").append(compiledCD);
    console.log("hello world");

  }
}

function getConfig(){

  $.ajax({

    url: 'getAllConfig.php',
    method: 'GET',
    success: function(data) {

      printConfig(data);
    },
    error: function(error) {

      console.log("error", error);
    }
  });
}

function changeConfig (){

  var me = $(this);
  var id = me.data('id');

  console.log('id', id);

  console.log("hello world");
}

function init() {

  getConfig();

  // 2. This is to be able to add a new config to the database

  // Use this for buttons created with handlebars, rather than
  // $('.changeconfig').click(changeConfig);
  $(this).on('click', '.changeconfig', changeConfig);
  //

}

$(window).ready(init);
