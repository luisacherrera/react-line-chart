class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowPrices = this.handleShowPrices.bind(this);
        this.state = {
            data: {
                product1: [12,13,54,23],
                product2: [4,31,25,22],
                product3: [15,33,21,9]
            },
            showPrices: false     
        };
    };

    handleShowPrices() {
        this.setState((prevState)=>{
            return {
                showPrices: !prevState.showPrices
            }
        });
    };

    render() {
        return(
            <div>
                <Header />
                <Products 
                    data={this.state.data}
                    handleShowPrices={this.handleShowPrices}
                    showPrices={this.state.showPrices}
                />
            </div>
        )
    }
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

Header.defaultProps = {
    title: 'Line Chart'
}

const Products = (props) => {
    return (
        <div>
            <button onClick={props.handleShowPrices}>
                {Object.keys(props.data)[0]}
            </button>
            {props.showPrices && Object.values(props.data)[0].map((price)=>{
                return <p key={price}>{price}</p>
            })}
            <button onClick={props.handleShowPrices}>
                {Object.keys(props.data)[1]}
            </button>
            {props.showPrices && Object.values(props.data)[1].map((price)=>{
                return <p key={price}>{price}</p>
            })}
            <button onClick={props.handleShowPrices}>
                {Object.keys(props.data)[2]}
            </button>
            {props.showPrices && Object.values(props.data)[2].map((price)=>{
                return <p key={price}>{price}</p>
            })}
        </div>
    );
}

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

ReactDOM.render(<LineChart />, document.getElementById('app'));

