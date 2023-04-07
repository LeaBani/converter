import PropTypes from 'prop-types';

import './style.scss';

function Toggler({ isOpen, toggle }) {
  return (
    <div className="toggler">
      <button
        className={isOpen ? 'toggler-btn toggler-btn--open' : 'toggler-btn'}
        type="button"
        onClick={toggle}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

Toggler.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Toggler;