var DRTWidgetElecciones = DRTWidgetElecciones || {};
DRTWidgetElecciones = (function() {
    var initiated = false;

	function init() {
        if (typeof jQuery != 'undefined') {
            if (!initiated) {
				initiated = true;
                $("body").ready(function() {
				   start();
                });
            }
        } else {
            window.setTimeout(init, 50);
        }
    }
	function start() {
        var html = '';
        html += '<link rel="stylesheet" href="https://cdn.rawgit.com/duroty/test/master/widgets/css/style.css">';
        html += '<script src="https://www.gstatic.com/charts/loader.js"></script>';
        html += '<script src="https://cdn.rawgit.com/duroty/test/master/widgets/js/app.js"></script>';
        html += '<div class="container eleccionesdrt">';
        html += '<div class="row">';
          html += '<div class="col-md-12">';
            html += '<section class="section-elecciones">';
              html += '<h1>';
                html += '<a href="http://www.lavanguardia.com" title="Elecciones 21D">Elecciones 21D</a>';
              html += '</h1>';
              html += '<div class="float-right">';
                html += '<a href="http://www.lavanguardia.com" title="Elecciones 21D" class="btn-all-results">Todos los resultados</a>';
              html += '</div>';
              html += '<div class="clearfix"></div>';
            html += '</section>';
          html += '</div>';
        html += '</div>';
      html += '</div>';
        html += '<div id="chart-container" class="container eleccionesdrt">';
            html += '<div class="row">';
                html += '<div class="col-md-6">';
                    html += '<div class="chart-container">';
                        html += '<div id="chart-title" class="chart-title"></div>';
                        html += '<div id="chart" class="chart chart-temp">';
                            html += '<span class="loading">Cargando ...</span>';
                        html += '</div>';
                    html += '</div>';
                html += '</div>';
                html += '<div class="col-md-2">';
                    html += '<div id="chart-legend" class="chart-legend">';
                        html += '<p>Partidos</p>';
                        html += '<span class="party"><span class="party-color" style="background:#ef7a36"></span>Cs</span>';
                        html += '<span class="party"><span class="party-color" style="background:#deae40"></span>ERC</span>';
                        html += '<span class="party"><span class="party-color" style="background:#014984"></span>JxCAT</span>';
                        html += '<span class="party"><span class="party-color" style="background:#f2e919"></span>CUP</span>';
                        html += '<span class="party"><span class="party-color" style="background:#612d62"></span>CatComú</span>';
                        html += '<span class="party"><span class="party-color" style="background:#ef1920"></span>PSC</span>';
                        html += '<span class="party"><span class="party-color" style="background:#00a3df"></span>PP</span>';
                        html += '<span class="party"><span class="party-color" style="background:#5d8aa8"></span>PACMA</span>';
                    html += '</div>';
                html += '</div>';
                html += '<div class="col-md-4">';
                    html += '<div class="search-box">';
                        html += '<p class="copy-search">BUSCAR POR MUNICIPIO</p>';
                        html += '<input id="autocomplete" placeholder="Introduce el municipio" />';
                    html += '</div>';
                    html += '<div id="table-results" class="table-results">';
                        html += '<span class="loading">Cargando ...</span>';
                    html += '</div>';
                html += '</div>';
            html += '</div>';
        html += '</div>';
      html += '<div class="container eleccionesdrt"><div class="row"><div class="col-md-12"><div class="chart-container-border"></div></div></div></div>';

        $("body").find(".breakingnews").first().before(html);
    }

	return {
        init:init
    };
}());
DRTWidgetElecciones.init();