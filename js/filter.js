$( ".level-select" ).change( function () {
    var selectedLevel = this.options[this.selectedIndex].value; // get the value of the input, which we filter on
    if (selectedLevel == "all") {
        $('.card').show();
    } else {
        if (selectedLevel =="beginner"){
            $('.beginner').show();
            $('.advanced').hide();
        } else {
            if (selectedLevel == "advanced"){
                $('.beginner').hide();
                $('.advanced').show();
            }
        }
    }
});