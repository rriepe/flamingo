$(document).ready(function() {

    $('#demo_form').submit(function() {
        return false;
    });

    $('#scheme_color').minicolors({
        animationSpeed: 0,
        animationEasing: 'swing',
        change: updateScheme,
        changeDelay: 40,
        control: 'hue',
        defaultValue: '#d94e96',
        hide: null,
        hideSpeed: 100,
        inline: false,
        letterCase: 'lowercase',
        opacity: false,
        position: 'bottom',
        show: null,
        showSpeed: 100,
        swatchPosition: 'left',
        textfield: true,
        theme: 'bootstrap'
    });

});

function updateScheme() {
    var color = $('#scheme_color').val();

    less.modifyVars({
        '@seed-color': color
    });
}

less = {
    env: "development",
    async: false
};