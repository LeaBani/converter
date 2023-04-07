import PropTypes from 'prop-types';

import './style.scss';

function ConvertedValue({ currency: { name, rate }, value }) {

  // TODO margin top for converted value
  return (
    <div className="result">
      <span className="result-value">{(rate * value).toFixed(2)}</span>
      <span className="result-currency">{name}</span>
    </div>
  );
}

ConvertedValue.propTypes = {
  currency: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
};

export default ConvertedValue;
