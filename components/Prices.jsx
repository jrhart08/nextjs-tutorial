import PropTypes from 'prop-types';

const currencies = [
  'USD',
  'EUR',
  'GBP',
];

const currencyOptions = currencies.map(curr => (
  <option key={curr}>{curr}</option>
));

class Prices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'USD',
    };

    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }

  onCurrencyChange(e) {
    this.setState({ currency: e.target.value });
  }

  render() {
    const btcRate = this.props.bpi[this.state.currency] || {};

    return (
      <React.Fragment>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {btcRate.description}:&nbsp;
            <span className="badge badge-primary">{btcRate.code}</span>&nbsp;
            <strong>{btcRate.rate}</strong>
          </li>
        </ul>
        <select onChange={this.onCurrencyChange} className="form-control">
          {currencyOptions}
        </select>
      </React.Fragment>
    );
  }
}

Prices.propTypes = {
  bpi: PropTypes.object.isRequired,
};

export default Prices;
