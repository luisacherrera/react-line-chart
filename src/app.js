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
            {
                Object.keys(props.data).map((product) => (
                    <Product 
                        key={product}
                        productName={product}
                        handleShowPrices={props.handleShowPrices}
                    />
                ))
            }
            {
                Object.values(props.data).map((productValues) => (
                    productValues.map((productValue)=>(
                        <Value 
                            key={productValue}
                            productValue={productValue}
                            showPrices={props.showPrices}
                        />
                    ))
                ))
            }
        </div>
    );
}

const Product = (props) => {
    return (
        <div>
            <button onClick={props.handleShowPrices}>
                {props.productName}
            </button>
        </div>
    );
}

const Value = (props) => {
    return (
        <div>
            {props.showPrices && (
                <p>{props.productValue}</p>
            )}
        </div>
    );
}

ReactDOM.render(<LineChart />, document.getElementById('app'));

