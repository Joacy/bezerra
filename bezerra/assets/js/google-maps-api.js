var stylesArray = [
    {
        featureType: 'landscape',
        stylers: [
            { color: '#abd284' },
        ]
    },
    {
        featureType: 'road',
        stylers: [
            { color: '#9ac173' },
        ]
    }
]
function initMap() {
    map = new google.maps.Map(document.getElementById('google-maps-api'), {
        center: {
            lat: -12.709901,
            lng: -38.354935
        },
        zoom: 15,
        styles: stylesArray
    });
    var marker = new google.maps.Marker({
        position: {
            lat: -12.709901,
            lng: -38.339935
        },
        map: map,
        icon: '/assets/imagens/map-marker.png'
    });
    var contentString = '<div class="box"><p class="font-weight-bold lead mb-3">Loja Produtos BioAlimentos </p><p class="-2">Rua Santa Isabel, S/N, Qd. 16</p></div>';
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    })
    var infowindow = new google.maps.InfoWindow({ content: contentString });
}

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCsM9zeQPCdX8LMfpNFyabc-GrRQx84DpA&callback=initMap" async="async" defer="defer"></script>