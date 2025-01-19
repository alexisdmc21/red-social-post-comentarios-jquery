$(document).ready(() => {
  $("#divnuevocomentario").hide();
  $("#diveditarcomentario").hide();

  let comentarioid = 1;
  let idpadre = "";

  $(document).on("click", "#comentar", function () {
    $("#divnuevocomentario").show();
    idpadre = $(this).parent().attr("id");
    $("#eliminar").hide();
  });

  $("#cancelarcomentario").on("click", () => {
    $("#divnuevocomentario").hide();
    $("#eliminar").show();
    $("#idcomentario").val(""); 
  });

  $("#formnuevocomentario").on("submit", (e) => {
    e.preventDefault();

    const idcomentario=$("#idcomentario").val()


    if (idcomentario === "") {
      alert("Los comentarios no pueden estar vacíos");
        $("#eliminar").show();
    } else {
      let divcomentario = $("<div></div>", {
        id: "comentario_post_" + comentarioid,
      });
      let comentario = $("<p></p>").text(idcomentario);
      let Eliminar = $("<button></button>", { id: "eliminar_comentario" }).text(
        "Eliminar"
      );
      let Editar = $("<button></button>", { id: "editar_comentario" }).text(
        "Editar"
      );

      $(divcomentario).append(comentario);
      $(divcomentario).append(Eliminar);
      $(divcomentario).append(Editar);

      Eliminar.on("click", () => divcomentario.remove());
      Editar.on("click", () => {
        Eliminar.hide();
        $("#eliminar").hide();

        $("#diveditarcomentario").show();
        $("#idcomentario_editar").val(comentario.text());
      });

      $(`#${idpadre} #comentarios`).append(divcomentario);

      //Editar comentario
      $("#formeditarcomentario").on("submit", (e) => {
        e.preventDefault();

        const idcomentario_editar=$("#idcomentario_editar").val()

        if ( idcomentario_editar=== "") {
          alert("Los comentarios no pueden estar vacíos");
          $("#diveditarcomentario").hide();
        } else {
          comentario.text(idcomentario_editar);
          $("#diveditarcomentario").hide();
        }

        Eliminar.show();
        $("#eliminar").show();
      });
      comentarioid = comentarioid + 1;
      $("#eliminar").show();
      $("#divnuevocomentario").hide();
    }

    $("#idcomentario").val("");

  });
});