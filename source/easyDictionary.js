javascript: (
    function () {
        var getSelectedText = function () {
            var text = '';
            if (window.getSelection) {
                text = window.getSelection().toString();
            } else if (document.selection && document.selection.type != 'Control') {
                text = document.selection.createRange().text;
            }
            return text;
        };
        window.open('https://dictionary.cambridge.org/dictionary/english/' + getSelectedText())
    })();

