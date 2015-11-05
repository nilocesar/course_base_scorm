/*=============================================================
//  Data: 30/07/2015 - atualizado 05/11/2015
//  COURSE.JS - 2.0.1 - contato com o LMS
//  Autor: Nilo César Lemos de Castro
//  TODO: Essa estrutura tem como intuito componentizar as demanandas
//  para facilitar a customização das necessidades.
//  O controle dos componentes acontece atraves:
        ...  $private.componente( 'PATH' , "NomeDoObj" ); /// Path --> caminho do Js nas pastas 
        ...  $public.setComponente( "NomeDoObj" , componente );
        ...  $public.getComponente( "NomeDoObj" );
//=============================================================*/

define(['jquery', 'scorm'], function ($) {
    'use strict';

    var course = function () {
        var $public = {};
        var $private = {};

        //=============================================================
        // VARIABLES
        //=============================================================

        $private.projectData = {};
        $private.componenteData = {};

        $public.size = null;
        $public.modulosData = null;
        $public.moduloCurrent = null;
        $public.telaCurrent = null;
        $public.moduloIndice = 0;
        $public.telaIndice = 0;


        //=============================================================
        // PUBLIC FUNCTIONS
        //=============================================================  

        $public.init = function init() {

            var comps = [{
                "path": 'componentes/modal',
                "id": "modalObj"
            }, {
                "path": "componentes/navegacao",
                "id": "navegacaoObj"
            }]

            $private.componente(comps, function () {
                
                ///Depois de carregado os componetes chamar as funcoes iniciais do course
                $public.scormInit();
                $public.scormUnload();
                $private.initJson();
                
            });

        };

        $public.setCourse = function setCourse(pathName, pathData) {
            $private.projectData[pathName] = pathData;
            return $public;
        };

        $public.getCourse = function getCourse(pathName) {
            return $private.projectData[pathName];
        };


        $public.setComponente = function setComponente(pathName, pathData) {
            $private.componenteData[pathName] = pathData;
            return $public;
        };

        $public.getComponente = function getComponente(pathName) {
            return $private.componenteData[pathName];
        };

        /////////////////////////
        //     INIT BOOT       //
        /////////////////////////

        $public.initBoot = function initBoot() {
            //
            var _modulosData = $public.modulosData;
            var introStatus = $public.getLocation("screenWhere");
            var _iframeURL = "";
            $public.size = _modulosData["size"];

            if ($public.getLocation("screenWhere") != null && $public.getLocation("screenWhere") != "" && $public.getLocation("screenWhere") != undefined) {
                var screenWhere = $public.getLocation("screenWhere");
                var modulo = parseInt(screenWhere.substr(0, 1));
                var tela = parseInt(screenWhere.substr(2, 2));

                $public.moduloIndice = modulo;
                $public.telaIndice = tela;
            }

            //
            $private.createHTML();
            $private.debug();
            $public.getComponente("navegacaoObj").menuAuxiliar();
        };


        /////////////////////////
        //     RESET BOOT      //
        /////////////////////////

        $public.resetBoot = function resetBoot() {
            $public.scormReset();
            $public.removeModal();

            setTimeout(function () {

                $public.initBoot();

            }, 1000 * 0.5);

        };

        ///////////////////////////////////////////////////
        //                     SCORM                     //
        ///////////////////////////////////////////////////

        $public.setLocation = function setLocation(variable, value) {
            $('body').scorm_set_lessonLocation(variable, value);
        };
        $public.getLocation = function getLocation(variable) {
            return $('body').scorm_get_lessonLocation(variable);
        };
        $public.setData = function setData(variable, value) {
            $('body').scorm_set_suspendData(variable, value);
        };
        $public.getData = function getData(variable) {
            return $('body').scorm_get_suspendData(variable);
        };
        $public.scormScore = function scormScore(raw) {
            $("body").scorm_set_score(raw);
        };
        $public.scormInit = function scormInit() {
            $("body").scorm_start(); /// inicaliza o scorm
        };
        $public.scormComplete = function scormComplete() {
            $("body").scorm_complete();
        };
        $public.scormReset = function scormReset() {
            $("body").scorm_reset();
        };
        $public.scormQuit = function scormQuit() {
            ///melhorar essa funçao para tanto iframe quanto opener
            $("body").scorm_quit();
            var w = window.opener;
            window.opener = self;
            w.close();
        };
        $public.scormUnload = function scormUnload() {
            $(window).unload(
                function () {
                    $('body').scorm_quit();
                }
            );
        };


        /////////////////////////
        //  NAVEGACAÇÂO        //
        /////////////////////////

        $public.nextScreen = function nextScreen() {
            var telaIndicesAll = $public.modulosData["config"][$public.moduloIndice]["telas"].length - 1;

            if ($public.telaIndice < telaIndicesAll) {
                $public.telaIndice++;
            } else {
                $public.moduloIndice++;
                $public.telaIndice = 0;
            }

            //
            $private.createHTML();
        };
        $public.previousScreen = function previousScreen() {
            var telaIndicesAll = $public.modulosData["config"][$public.moduloIndice]["telas"].length - 1;

            if ($public.telaIndice > 0) {
                $public.telaIndice--;
            } else {
                $public.moduloIndice--;
                $public.telaIndice = $public.modulosData["config"][$public.moduloIndice]["telas"].length - 1;
            }

            //
            $private.createHTML();
        };
        $public.gotoScreen = function gotoScreen(_ID) {


            var _moduloConfig = $public.modulosData["config"];

            for (var i = 0; i < _moduloConfig.length; i++) {

                $.each(_moduloConfig[i]["telas"], function (index, element) {

                    if (element[0] == _ID) {

                        $public.moduloIndice = i;
                        $public.telaIndice = index;
                        $private.createHTML();
                    }

                });
            }
        };
        $public.gotoScreenModulate = function gotoScreenModulate(_modulo, _tela) {
            $public.moduloIndice = _modulo;
            $public.telaIndice = _tela;
            $private.createHTML();
        };
        $public.returnMain = function gotoScreenModulate() {
            $public.getComponente("navegacaoObj").returnMain();
        }


        /////////////////////////
        //        MODAL       //
        /////////////////////////

        $public.createModal = function createModal(id_, w_, h_, _scrolling, _close) {
            $public.getComponente("modalObj").createModal(id_, w_, h_, _scrolling, _close);

        };
        $public.removeModal = function removeModal() {
            $public.getComponente("modalObj").removeModal();
        };

        /////////////////////////
        //     PRELOADER       //
        /////////////////////////

        $public.removePreloader = function removePreloader() {
            $(".preloader").css("display", "none");
            $(".telasContainer").addClass("telasShadow");
            $(".centerContainer").addClass('animated ' + $public.modulosData["transition"]);
        };



        //=============================================================
        // PRIVATE FUNCTIONS
        //=============================================================    

        //////////////////////////////// 
        //       INIT JSON            //
        ////////////////////////////////

        $private.initJson = function initJson() {
            //
            var _pathJson = $public.getCourse("PATH_CONFIG");
            $private.resize();

            $.getJSON(_pathJson, function (json) {
                    $public.modulosData = json;
                })
                .success(function () {})
                .error(function () {
                    console.log("error no json");
                })
                .complete(function () {

                    $private.cache();

                    //confere se é a primeira vez que o usuário entrou 
                    setTimeout(function () {
                        if ($public.getLocation("screenWhere") != null && $public.getLocation("screenWhere") != "" && $public.getLocation("screenWhere") != undefined) {
                            $public.createModal("base/init/index.html", 400, 100, false, false);

                        } else {
                            $public.initBoot();
                        }
                    }, 1000 * 0.2);


                });
        };

        $private.createHTML = function createHTML() {

            $(".centerContainer").removeClass('animated');
            $(".centerContainer").removeClass($public.modulosData["transition"]);

            var _iframeURL = $public.modulosData["config"][$public.moduloIndice]["telas"][$public.telaIndice][1];
            $public.telaCurrent = $public.modulosData["config"][$public.moduloIndice]["telas"][$public.telaIndice][0];
            $public.moduloCurrent = $public.modulosData["config"][$public.moduloIndice]["modulo"];

            $(".telasContainer").empty();
            $(".telasContainer").removeClass("telasShadow");
            $(".preloader").css("display", "block");
            $(".telasContainer").append("<iframe id='bootIframe' width=" + $public.modulosData["size"].width + " height=" + $public.modulosData["size"].height + " frameborder='0' scrolling='no' src=" + _iframeURL + "></iframe>");

            ///Loader Iframe
            $("#bootIframe", this.domNode).on("load", function () {
                $private.verification();

                //REMOVENDO BORDAS
                var bodys = $('#bootIframe').contents().find('body');

                for (var i = 0; i < bodys.length; i++) {
                    bodys[i].style.outline = "0";
                    bodys[i].style.padding = "0";
                    bodys[i].style.margin = "0";
                    bodys[i].style.border = "none";
                    bodys[i].style.overflow = "hidden";
                    //bodys[i].style.background = "transparent";
                }

            });

            //
            $public.removeModal();
        };

        $private.verification = function verification() {

            if ($public.getLocation("screenWhere") != null &&
                $public.getLocation("screenWhere") != "" &&
                $public.getLocation("screenWhere") != undefined) {

                var screenWhere = $public.getLocation("screenWhere");
                var modulo = parseInt(screenWhere.substr(0, 1));
                var tela = parseInt(screenWhere.substr(2, 2));

                if ($public.moduloIndice == modulo) {
                    if ($public.telaIndice > tela) {
                        $public.setLocation("screenWhere", $public.moduloIndice + "_" + $public.telaIndice);
                    }
                } else if ($public.moduloIndice > modulo) {
                    if ($public.telaIndice <= tela) {
                        $public.setLocation("screenWhere", $public.moduloIndice + "_" + $public.telaIndice);
                    }
                }

            } else {
                $public.setLocation("screenWhere", $public.moduloIndice + "_" + $public.telaIndice);
            }


            //
            $public.getComponente("navegacaoObj").custonMenu();
        };

        /////////////////////////
        //       DEBUG         //
        /////////////////////////

        $private.debug = function debug() {
            if ($public.modulosData["debug"]) {
                $("#contentDebug").append("<iframe frameborder=0 width='300' height='180' scrolling='no' src='base/debug/index.html'></iframe>");
            }
        };

        /////////////////////////
        //       CACHE         //
        /////////////////////////

        $private.cache = function cache() {
            if (!$public.modulosData["cache"]) {
                if (localStorage)
                    localStorage.clear();
            }
        };


        /////////////////////////
        //       RESIZE         //
        /////////////////////////

        $private.resize = function resize() {
            //Resize
            (function () {
                setTimeout(function () {

                    window.moveTo(0, 0);
                    window.resizeTo(screen.width, screen.height);

                    top.window.moveTo(0, 0);
                    if (document.all) {
                        top.window.resizeTo(screen.availWidth, screen.availHeight);
                    } else if (document.layers || document.getElementById) {
                        if (top.window.outerHeight < screen.availHeight || top.window.outerWidth < screen.availWidth) {
                            top.window.outerHeight = screen.availHeight;
                            top.window.outerWidth = screen.availWidth;
                        }
                    }

                }, 1000 * 0.2);

                ///
                window.addEventListener("resize", function () {
                    // Get screen size (inner/outerWidth, inner/outerHeight)
                    var height = $(window).height();
                    var width = $(window).width();

                    if (width > height) {
                        // Landscape
                        $(".portrait").css("display", "none");
                    } else {
                        // Portrait
                        $(".portrait").css("display", "block");
                    }
                }, false);
            })();

        }


        ///////////////////////////////////////////////////
        //           CONTROLE DE COMPONENTE              //
        ///////////////////////////////////////////////////

        $private.componente = function componente(moduleArray, callModule) {
            
            var _containerComp = [];
            
            $.each(moduleArray, function (index, value) {
                
                var moduleID = value.id;
                var modulePath = value.path;
                
                require([modulePath], function (module) {
                    module.init($public);
                    $public.setComponente(moduleID, module);
                    _containerComp.push(module);
                    
                    if( _containerComp.length == moduleArray.length )
                        callModule();
                });
            });
        }

        return $public;
    };

    return course();
});