define(['jquery', 'scorm' ], function ($) {
    'use strict';

    var navegacao = function () {
        var $public = {};
        var $private = {};
        var $parent = {};

        $public.init = function init( _parent ) {
            $parent = _parent;
            $private.initEvents();
        };


        $public.returnMain = function () {
            $parent.moduloIndice++;
            $parent.telaIndice = 0;
            $parent.setLocation("screenWhere", $parent.moduloIndice + "_" + $parent.telaIndice);
            $parent.gotoScreen("BA1");
        };

        $public.menuAuxiliar = function () {
            $parent.setData("menu", "init");
            $("#ajuda").on("click", function () {
                $parent.setData("menu", "modal");
                $parent.createModal("paginas/AA2/index.html", 875, 520, false, true);
            });


            $("#fechar").on("click", function () {
                $parent.createModal("base/exit/index.html", 400, 100, false, false);
                $(".preloader").css("display", "none");
            });

        };

        $public.custonMenu = function () {

            console.log($parent.getLocation("screenWhere"));

            var _menuContent = "";
            $(".menuContainer").empty();

            $.ajax({
                url: "base/menu/index.html",
                cache: false,
                success: function (_page) {
                    _menuContent = _page;
                },
                error: function () {
                    //alert("error"); 
                },
                complete: function () {

                    $(".menuContainer").append(_menuContent);

                    if ($parent.moduloIndice > 1) {
                        $public.controlMenu();
                    }
                }
            });
            
             $public.clienteBio();

        };

        $public.controlMenu = function () {

            var screenWhere = $parent.getLocation("screenWhere");
            var modulo = parseInt(screenWhere.substr(0, 1));
            var tela = parseInt(screenWhere.substr(2, 2));

            if (modulo == $parent.moduloIndice) {
                var _moduloConfig = $parent.modulosData["config"];
                
                if (tela > 0) {
                    $.each(_moduloConfig[modulo]["telas"], function (index, element) {
                        if (index < tela) {
                            $("#btn" + index).addClass("menuCheck");
                            $("#btn" + index).attr("tela", element[0]);
                            $("#btn" + index).on("click", function () {
                                $parent.gotoScreen($(this).attr("tela"));
                            });

                        } else if (index == tela) {
                            $("#btn" + index).addClass("menuUp");
                            $("#btn" + index).attr("tela", element[0]);
                            $("#btn" + index).on("click", function () {
                                $parent.gotoScreen($(this).attr("tela"));
                            });
                        }
                    });
                } else {
                    //
                    $("#btn1").addClass("menuCheck");
                    $("#btn1").attr("tela", _moduloConfig[modulo]["telas"][1][0]);
                    $("#btn1").on("click", function () {
                        $parent.gotoScreen($(this).attr("tela"));
                    });
                }
            }
        };

        $public.clienteBio = function () {

            if ($parent.moduloCurrent == "cliente1" || $parent.moduloCurrent == "cliente2" || $parent.moduloCurrent == "cliente3") {
                $("#pesquisa").css("opacity", 1);
                $("#pesquisa").css("cursor", "pointer");

                $("#pesquisa").on("click", function () {

                    $parent.createModal("img/" + $parent.moduloCurrent + "Bio.jpg", 895, 520, true, true);
                    $(".preloader").css("display", "none");
                    return false;

                });

            } else {

                $("#pesquisa").css("opacity", 0.2);
                $("#pesquisa").css("cursor", "default");
            }
        };

        $private.initEvents = function initEvents() {

        };

        return $public;
    };

    return navegacao();
});