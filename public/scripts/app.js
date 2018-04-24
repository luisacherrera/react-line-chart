'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = function (_React$Component) {
    _inherits(LineChart, _React$Component);

    function LineChart(props) {
        _classCallCheck(this, LineChart);

        var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, props));

        _this.handleShowPrices = _this.handleShowPrices.bind(_this);
        _this.state = {
            data: {
                product1: [12, 13, 54, 23],
                product2: [4, 31, 25, 22],
                product3: [15, 33, 21, 9]
            },
            showPrices: false
        };
        return _this;
    }

    _createClass(LineChart, [{
        key: 'handleShowPrices',
        value: function handleShowPrices() {
            this.setState(function (prevState) {
                return {
                    showPrices: !prevState.showPrices
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Products, {
                    data: this.state.data,
                    handleShowPrices: this.handleShowPrices,
                    showPrices: this.state.showPrices
                })
            );
        }
    }]);

    return LineChart;
}(React.Component);

;

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        )
    );
};

Header.defaultProps = {
    title: 'Line Chart'
};

var Products = function Products(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleShowPrices },
            Object.keys(props.data)[0]
        ),
        props.showPrices && Object.values(props.data)[0].map(function (price) {
            return React.createElement(
                'p',
                { key: price },
                price
            );
        }),
        React.createElement(
            'button',
            { onClick: props.handleShowPrices },
            Object.keys(props.data)[1]
        ),
        props.showPrices && Object.values(props.data)[1].map(function (price) {
            return React.createElement(
                'p',
                { key: price },
                price
            );
        }),
        React.createElement(
            'button',
            { onClick: props.handleShowPrices },
            Object.keys(props.data)[2]
        ),
        props.showPrices && Object.values(props.data)[2].map(function (price) {
            return React.createElement(
                'p',
                { key: price },
                price
            );
        })
    );
};

//         {
//             Object.keys(props.data).map((product) => (
//                 <Product 
//                     key={product}
//                     productName={product}
//                     handleShowPrices={props.handleShowPrices}
//                 />
//             ))
//         }
//         {
//             Object.values(props.data).map((productValues) => (
//                 productValues.map((productValue)=>(
//                     <Value 
//                         key={productValue}
//                         productValue={productValue}
//                         showPrices={props.showPrices}
//                     />
//                 ))
//             ))
//         }

// const Product = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleShowPrices}>
//                 {props.productName}
//             </button>
//         </div>
//     );
// }

// const Value = (props) => {
//     return (
//         <div>
//             {props.showPrices && (
//                 <p>{props.productValue}</p>
//             )}
//         </div>
//     );
// }

ReactDOM.render(React.createElement(LineChart, null), document.getElementById('app'));
