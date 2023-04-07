import PropTypes from 'prop-types';

function Currency({ name, rate, change }) {
  const handleClick = () => {
    change({
      name, // name: name,
      rate, // rate: rate,
    });
  };
  return (
    <li
      className="currencies-list__area"
      onClick={handleClick}
    >
      <span className="currencies-list__name">{name}</span>
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export default Currency;