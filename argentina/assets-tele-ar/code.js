var App = {
    tunedIn: [],
    channels: {
        'tn': {
            'nombre': 'Todonoticias',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/wHn1_QVoXGM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">TN&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'cronica': {
            'nombre': 'Crónica TV',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/5patYbzarRg?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Crónica TV&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'canal26': {
            'nombre': 'Canal 26',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/lUFwVsREwrs?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Canal 26&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'cnn-cl': {
            'nombre': 'CNN Chile',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/y5vvZ5gbF10?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CNN Chile</div>'
        },
				
        'c5n': {
            'nombre': 'C5N',
			'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCFgk2Q2mVO1BklRQhSv6p0w&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">C5N&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'telefe': {
            'nombre': 'Telefé Noticias',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/fq6u9fqcjTk?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Telefé N.&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'tpa': {
            'nombre': 'TV Pública',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCs231K71Bnu5295_x0MB5Pg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">TV Pública&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'tn-web': {
            'nombre': 'TN Lado Web',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/yLu4GfeJ6B4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">TN Lado Web&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'venticuatro': {
            'nombre': '24 Horas (Chile)',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCTXNz3gjAypWp3EhlIATEJQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">24H Chile&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'la-nacion': {
            'nombre': 'LN+',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCba3hpU7EFBSk817y9qZkiA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">LN+&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
				
        'a24': {
            'nombre': 'A24',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCR9120YBAqMfntqgRTKmkjQ&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">A24&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },

        'ip-digital': {
            'nombre': 'I. Periodística',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC1bBjOZieJWHbsFA0LwjjJA&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">iP &nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
    },
    templateCanal: '<div class="col-4 col-md-4 col-lg-4 un-player" data-canal="{canal}">{htmelele}</div>',
    templateCanalMobile: '<div class="col-12 col-md-6 col-lg-4 un-player" data-canal="{canal}">{htmelele}</div>',
    templateCanalVertical: '<div class="col-12 col-md-6 col-lg-5 un-player" data-canal="{canal}">{htmelele}</div>',
    add: function (canal) {
        if (App.channels[canal]) {
            let sintonizados = App.tunedIn.length;
            let thisCanal = App.templateCanal.replace('{canal}', 'player-' + canal).replace('{htmelele}', App.channels[canal].code);

            var $losCanales = jQuery('#los-canales');

            switch (sintonizados) {
                case 0:
                    // Siempre va antes del reloj
                    $losCanales.find('#reloj-control').removeClass('offset-md-4').before(jQuery.parseHTML(thisCanal));
                    break;
                case 1:
                    // Siempre va después del reloj
                    $losCanales.find('#reloj-control').after(jQuery.parseHTML(thisCanal));
                    break;
                case 2:
                    // Arriba con offsets
                    var $video = jQuery(jQuery.parseHTML(thisCanal)).addClass('offset-md-4 mr-3');
                    $losCanales.prepend($video);
                    break;
                case 3:
                    // Arriba con offset
                    var $video = jQuery(jQuery.parseHTML(thisCanal)).addClass('offset-md-4');
                    $losCanales.find('.un-player').eq(0).removeClass('offset-md-4 mr-3').after($video);
                    break;
                case 4:
                    // Arriba, vuela offsets
                    $losCanales.find('.un-player').eq(1).removeClass('offset-md-4').after(jQuery.parseHTML(thisCanal));
                    break;
                default:
                    // Siempre al final
                    $losCanales.append(jQuery.parseHTML(thisCanal));
                    break;
            }

            jQuery('#modal-selecta .modal-body').find('button[data-canal="' + canal + '"]').removeClass('btn-outline-secondary').addClass('btn-primary');
            App.tunedIn.push(canal);
        }
    },
    remove: function (canal) {
        let $findCanal = jQuery('.row').find('div[data-canal="player-' + canal + '"]');
        let sintonizados = App.tunedIn.length;
        var $losCanales = jQuery('#los-canales');

        if (1 == $findCanal.length) {
            $findCanal.remove();
            App.tunedIn = _.remove(App.tunedIn, function (el) { return el != canal; });
            sintonizados--;

            switch (sintonizados) {
                case 0:
                    $losCanales.find('#reloj-control').addClass('offset-md-4');
                    break;
                case 1:
                    // Si el primer elemento de $losCanales es el reloj, le agregamos offset
                    let $firstEle = $losCanales.find('div').eq(0);
                    if ('reloj-control' == $firstEle[0].id) {
                        $losCanales.find('#reloj-control').addClass('offset-md-4');
                    }

                    break;
                default:
                    break;
            }

            jQuery('#modal-selecta .modal-body').find('button[data-canal="' + canal + '"]').removeClass('btn-primary').addClass('btn-outline-secondary');
        }
    },
    isMobile: function () {
        // https://stackoverflow.com/a/11381730
        var check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    },
    isVertical: function(){
        return null != document.location.search.match(/modo=vertical/)
    },
    initProcess: {
        initReloj: function () {
            time_is_widget.init({ Buenos_Aires_z105: { template: "TIME" } });
        },
        initRelojUtc: function () {
            time_is_widget.init({ UTC_za00: { template: "TIME" } });
        },
        seedModal: function () {
            let htmlBotones = '';
            _.forEach(App.channels, function (el, llave) {
                if (!el.status || 'offline' != el.status) {
                    htmlBotones += '<button type="button" class="btn btn-outline-secondary" data-canal="' + llave + '">' + el.nombre + '</button>';
                }
            });
            jQuery('#modal-selecta .modal-body').html(jQuery.parseHTML(htmlBotones));
            jQuery('#modal-selecta .modal-body button').on('click', function (ev) {
                let $this = jQuery(this);
                queClases = $this[0].className.replace('btn ', '');
                if ('btn-outline-secondary' == queClases) {
                    App.add($this.data('canal'));
                } else if ('btn-primary' == queClases) {
                    App.remove($this.data('canal'));
                }
            });
        },
        fixMobile: function () {
            if (App.isMobile()) {
                App.templateCanal = App.templateCanalMobile;
                jQuery('#reloj-control').removeClass('col-4 col-md-4').addClass('col-12 col-md-6');
            }
        },
        fixVertical: function() {
            if( App.isVertical() ){
                App.modo = 'vertical';
                App.templateCanal = App.templateCanalVertical;
                jQuery('#reloj-control').removeClass('col-4 col-md-4').addClass('col-6 col-md-6 col-lg-5');
            }
        }
    },
    init: function(){
        App.initProcess.initReloj();
        App.initProcess.seedModal();
        App.initProcess.fixMobile();
        App.initProcess.fixVertical();

        // Como estaban los canales al comienzo
        if( App.isMobile() ){
            App.add('tn');
            App.add('c5n');
        } else {
            App.add('a24');
            App.add('ip-digital');
            App.add('cronica');
            App.add('tn');
            App.add('c5n');
        }
        
    }
};

jQuery(document).ready( function(){
    App.init();
});
