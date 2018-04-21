'use strict';

var WorkingApp = function WorkingApp(props) {
    return React.createElement(
        'div',
        null,
        'It works'
    );
};

ReactDOM.render(React.createElement(WorkingApp, null), document.getElementById('app'));
