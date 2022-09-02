var slider = document.getElementById('slider');
var min = document.getElementById('min')
var max = document.getElementById('max')
var list = false
noUiSlider.create(slider, {
    start: [20, 1000],
    connect: true,
    range: {
        'min': 0,
        'max': 5000
    }
});
slider.noUiSlider.on('update',function(ev){
    document.getElementById('min').value = Number.parseInt(ev[0])
    max.value = Number.parseInt(ev[1])    
})