import PropTypes from 'prop-types';

import Currency from './Currency';

import './style.scss';

function CurrenciesList({ currenciesList, change }) {
  const currencies = currenciesList.map(({ name, rate }) => (
    <Currency
      key={name}
      // {...currency}
      name={name}
      rate={rate}
      change={change}
    />
  ));

  // TODO Add currencies from API https://app.freecurrencyapi.com/
  // TODO Add smooth Transitions 

  return (

    <div className="currencies">
      <h2 className="currencies-list__title">Currencies</h2>

      <ul className="currencies-list__type scroller">
        {currencies}
      </ul>
    </div>
  );
}

CurrenciesList.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  change: PropTypes.func.isRequired,
};

export default CurrenciesList;