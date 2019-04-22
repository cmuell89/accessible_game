$(document).ready(function () {
    if (annyang) {
        console.log("We got annyang gee")
        // Let's define our first command. First the text we expect, and then the function it should call
        var commands = {
            'accessibility': function () {
                if (!document.getElementById('accessibility').checked) {
                    document.getElementById('accessibility').checked = true;
                    document.getElementById('accessibility').dispatchEvent(new Event('change', {'checked': true}))

                } else {
                    document.getElementById('accessibility').checked = false;
                    document.getElementById('accessibility').dispatchEvent(new Event('change', {'checked': false}))

                }
            },
            'sound': function () {
                if (!document.getElementById('sound').checked) {
                    document.getElementById('sound').checked = true;
                    document.getElementById('sound').dispatchEvent(new Event('change', {'checked': true}))

                } else {
                    document.getElementById('sound').checked = false;
                    document.getElementById('sound').dispatchEvent(new Event('change', {'checked': false}))

                }
            },
            'play': function () {
                window.game.play();
            },
            'start': function () {
                window.game.play();
            },
            'launch': function () {
                window.game.play();
            },
            'quit': function () {
                window.game.abandon();
            },
            'stop': function () {
                window.game.abandon();
            },
            'level up': function () {
                window.game.nextLevel();
            },
            'level down': function () {
                window.game.prevLevel();
            }
        };
        // Add our commands to annyang
        annyang.addCommands(commands);
        annyang.debug()
        // Start listening. You can call this here, or attach this call to an event, button, etc.
        annyang.start({continuous: false});
    }
});