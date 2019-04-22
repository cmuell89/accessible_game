$(document).ready(function() {
    if (annyang) {
        console.log("We got annyang gee")
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
            'accessibility': function() {
              if ($('#accessibility').prop('checked') == false){
                $('#accessibility').prop('checked', true).trigger('change');

              };
            },
            'start': function() {
              if ($('input[id="toggle1"]').prop('checked') == true){
                $('input[id="toggle1"]').prop('checked', false).trigger('change');
              };
            },
            'end': function() {
              if ($('input[id="toggle2"]').prop('checked') == false){
                $('input[id="toggle2"]').prop('checked', true).trigger('change');
              };
            },
            'sound': function() {
              if ($('input[id="toggle2"]').prop('checked') == true){
                $('input[id="toggle2"]').prop('checked', false).trigger('change');
              };
            }
        };
        // Add our commands to annyang
        annyang.addCommands(commands);
        annyang.debug()
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start({ continuous: false });
    }
});