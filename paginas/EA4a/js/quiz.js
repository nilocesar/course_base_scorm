/////////////////////////
// MONSANTO
// Autor: Nilo/ Alexandre
// Data: 14/07/2015
/////////////////////////

/////////////////////////
//              QUIZ //
/////////////////////////

var quiz = {

    nivelCurrent: 1,
    subNivelCurrent: 1,
    configContent: "",
    notaConsolidada: 25,
    questoesArray: [],

    boot: function () {
        $(window).load(
            function () {
                quiz.createQuiz();
            }
        );

    }(),

    createQuiz: function () {

        var configContent = "";
        $(".centerContainer").empty();
        $(".centerContainer").removeClass('animated');
        $(".centerContainer").removeClass('fadeInRight');


        $.getJSON("json/nivel_" + quiz.nivelCurrent + ".json", function (json) {
                quiz.configContent = json;
            })
            .success(function () {})
            .error(function () {
                console.log("error no json");
            })
            .complete(function () {
                quiz.createHtml();
            });

    },

    createHtml: function () {

        var _quizContent = "";

        $.ajax({
            url: "base.html",
            cache: false,
            success: function (_page) {
                _quizContent = _page;
            },
            error: function () {
                //alert("error"); 
            },
            complete: function () {

                $(".centerContainer").append(_quizContent);
                $(".centerContainer").addClass('animated fadeInRight');
                quiz.quizData();

            }
        });

    },

    quizData: function () {
        
        var _titulo = quiz.configContent["questoes"][quiz.subNivelCurrent - 1]["titulo"];
        $("#titulo").html(_titulo);

        var _opc = quiz.configContent["questoes"][quiz.subNivelCurrent - 1]["opc"];
        quiz.questoesArray = [];

        $.each(_opc, function (index, element) {

            var questao = (element[0]);
            var nivel = (element[1]);
            var subnivel = (element[2]);
            var nota = (element[3]);

            var obj = {
                "questao": questao,
                "nivel": nivel,
                "subnivel": subnivel,
                "nota": nota
            }

            quiz.questoesArray.push(obj)
        });


        quiz.shuffle( quiz.questoesArray );

        var _arrayQuestion = quiz.questoesArray;

        for (var i = 0; i < _arrayQuestion.length; i++) {

            $("#question" + (i + 1)).html(_arrayQuestion[i]["questao"]);
            $("#q" + (i + 1)).attr("nivel", _arrayQuestion[i]["nivel"]);
            $("#q" + (i + 1)).attr("subnivel", _arrayQuestion[i]["subnivel"]);
            $("#q" + (i + 1)).attr("nota", _arrayQuestion[i]["nota"]);
            $("#q" + (i + 1)).on("click", function () {

                //console.log( $(this).attr("nota") );
                quiz.nivelCurrent = $(this).attr("nivel");
                quiz.subNivelCurrent = $(this).attr("subnivel");
                quiz.notaConsolidada += parseInt($(this).attr("nota"));

                if (quiz.nivelCurrent != "*") {
                    quiz.createQuiz();
                } else {
                    quiz.completeQuiz();

                }
            });

        }


        if (_opc.length < 3) {

            if (_opc.length == 1) {
                $("#q2").css("display", "none");
                $("#question2").empty();
                $("#q3").css("display", "none");
                $("#question3").empty();
            } else if (_opc.length == 2) {
                $("#q3").css("display", "none");
                $("#question3").empty();
            }

        }
    },
    shuffle: function (array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    completeQuiz: function () {
        var _feedContent = "";
        $(".centerContainerBase").empty();

        $.ajax({
            url: "feed.html",
            cache: false,
            success: function (_page) {
                _feedContent = _page;
            },
            error: function () {
                //alert("error"); 
                console.log("erro no json do feed");
            },
            complete: function () {

                $(".centerContainerBase").append(_feedContent);
                $('.texto_feedback p').html($('.texto_feedback p').html().replace('[pontuação]', quiz.notaConsolidada));

                parent.course.setData("dialogo3", "1");
                parent.course.setData("EA4A", quiz.notaConsolidada);

                $('.btcontinuar').on('click', function () {
                    $('.btcontinuar').on('click', function () {
                        parent.course.nextScreen();
                    })
                })
            }
        });
    }
}