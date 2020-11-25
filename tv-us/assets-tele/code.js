var App = {
    modo: 'desktop',
    tunedIn: [],
    channels: {
        'nbc-news': {
            'nombre': 'NBC News',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/BInk1AoBHrY?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">NBC News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'nbc-news-stats': {
            'nombre': 'NBC News Stats',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/hNHKczIYqgA?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">NBC News Stats&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'cbs-news': {
            'nombre': 'CBS News',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC8p1vwvWtl6T73JiExfWs1g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CBS News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'abc-news': {
            'nombre': 'ABC News',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCBi2mrWuNuyYy4gbM6fU18Q&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">ABC News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'reuters': {
            'nombre': 'Reuters',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/wL-WEQpnzqQ?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Reuters&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'fox-news': {
            'nombre': 'Fox News (stats)',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/MmrGeWxd87Y?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Fox News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'fox-news-now': {
            'nombre': 'Fox News Now',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCJg9wBPyKMNA5sRDnvzmkdg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Fox News Now&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'usa-today': {
            'nombre': 'USA Today',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCP6HGa63sBC7-KHtkme-p-g&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">USA Today&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'univision': {
            'nombre': 'Univision',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.univision.com/noticias/elecciones-en-eeuu-2020/gran-destino-livestream/embed?eid=00000156-db9d-dd4d-a9f6-fffdec5a0000" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Univisión</div>'
        },
        'telemundo': {
            'nombre': 'Telemundo',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTelemundo%2Fvideos%2F1524955851225726%2F&show_text=0&width=560" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Telemundo</div>'
        },
        'newsmax': {
            'nombre': 'Newsmax',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCx6h-dWzJ5NpAlja1YsApdg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Newsmax&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'now-this': {
            'nombre': 'Now This',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/pGHnxu6oED4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">NowThis&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'global-news': {
            'nombre': 'Global News (CA)',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/tlSJkZbVIi8?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Global News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'bloomberg': {
            'nombre': 'Bloomberg',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/dp8PhLsUcFE?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Bloomberg&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'huffpost': {
            'nombre': 'HuffPost',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/6sc2hyzP6yU?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">HuffPost&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'wapost': {
            'nombre': 'Washington Post',
            'status': 'offline',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/qIEGk7IQ37Q?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Wa Post&nbsp;</div>'
        },
        'yahoo-finance': {
            'nombre': 'Yahoo! Finance',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/pcGy4pWnjA4?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Yahoo! Finance&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'euronews': {
            'nombre': 'Euronews',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/KRP1d3JiWPo?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Euronews&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'sky-news': {
            'nombre': 'Sky News (UK)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/9Auq9mYxFEE?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Sky News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'the-telegraph': {
            'nombre': 'The Telegraph (UK)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/YNgKK2wTvug?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">The Telegraph&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'the-sun': {
            'nombre': 'The Sun (UK)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/i1j8mkrSChw?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">The Telegraph&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'dw-english': {
            'nombre': 'DW (Germany)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCknLrEdhRCp1aegoMqRaCZg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">DW (EN)&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'france24-en': {
            'nombre': 'France 24',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCQfwfsi5VrQ8yKZ-UWmAEFg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">France24&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'rt-news': {
            'nombre': 'RT (Russia)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/NvCSr7qzAAM?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">RT&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'al-jazeera-en': {
            'nombre': 'Al Jazeera (Qatar)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/Btv7G0BV45g?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Al Jazeera&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'channels-ng': {
            'nombre': 'Channels (Nigeria)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/-c8LoR84Xjs?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Channels (NG) &nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'ndtv': {
            'nombre': 'NDTV (India)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/AFNUeUed8Ro?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">NDTV&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'cna-sg': {
            'nombre': 'CNA (Singapore)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UC83jt4dlz1Gjl58fzQrrKZg&autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CNA&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'cgtn-america': {
            'nombre': 'CGTN America (China)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://engine.univtec.com/embed-akamai.php?params=dXJsPXI0c2EtZjZHU04yWEl2ekt2NWpWbmcmdWE9VUEtNTAwNzA5NDQtMTAmdmFzdD1odHRwcyUzQSUyRiUyRnB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldCUyRmdhbXBhZCUyRmFkcyUzRml1JTNEJTJGNDM0NTkyNzElMkZlbmdpbmVtZWRpYWxpdmUlMkZzcy1DR1ROJTI2ZGVzY3JpcHRpb25fdXJsJTNEJTI1JTI1UkVGRVJSRVJfVVJMX0VTQyUyNSUyNSUyNnRmY2QlM0QwJTI2bnBhJTNEMCUyNnN6JTNENjQweDQ4MCUyNm1pbl9hZF9kdXJhdGlvbiUzRDAlMjZtYXhfYWRfZHVyYXRpb24lM0Q2MDAwMCUyNmdkZnBfcmVxJTNEMSUyNm91dHB1dCUzRHZhc3QlMjZ1bnZpZXdlZF9wb3NpdGlvbl9zdGFydCUzRDElMjZlbnYlM0R2cCUyNmltcGwlM0RzJTI2Y29ycmVsYXRvciUzRCUyNSUyNUNBQ0hFQlVTVEVSJTI1JTI1JnRpdGxlRXZlbnQ9Q0dUTiZjYXRlZ29yeT1WaWRlbw==" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CGTN America</div>'
        },
        'ann-jp': {
            'nombre': 'ANN (Japan)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/coYw-eVU0Ks?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">ANN&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'abc-au': {
            'nombre': 'ABC (Australia)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/W1ilCy6XrmI?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">ABC&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'seven-news': {
            'nombre': '7 News (Australia)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/klJJMxH9NA0?autoplay=1&mute=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">7News&nbsp;<img class="rec" src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.0.4/16x16/1f534.png"></div>'
        },
        'cnn-intl': {
            'nombre': 'CNN (!)',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="http://pslabs.cl/tv-us/player-cnn/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">CNN</div>'
        },
        'baroque-beats': {
            'nombre': 'Baroque Beats',
            'status': 'online',
            'code': '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/live_stream?channel=UCwP6-81HmoDyC3nfBAyGPXQ&autoplay=1&vq=medium&enablejsapi=1&modestbranding=1&showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="nombre">Baroque Beats</div>'
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
        initRelojUs: function () {
            time_is_widget.init({ Manhattan__New_York_State__United_States_z161: { template: "TIME" }, UTC_za00: { template: "TIME" }, Los_Angeles_z14e: { template: "TIME" } });
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
                App.modo = 'mobile';
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
    init: function () {
        App.initProcess.initRelojUs();
        App.initProcess.seedModal();
        App.initProcess.fixMobile();
        App.initProcess.fixVertical();

        // Como estaban los canales al comienzo
        if (App.isMobile()) {
            App.add('nbc-news');
            App.add('cnn-intl');
        } else if( App.isVertical() ){
            App.add('sky-news');
            App.add('cbs-news');
            App.add('cnn-intl');
            App.add('fox-news-now');
            App.add('nbc-news');
        }else {
            App.add('sky-news');
            App.add('cbs-news');
            App.add('cnn-intl');
            App.add('fox-news-now');
            App.add('nbc-news');
        }

    }
};

jQuery(document).ready(function () {
    App.init();
});
