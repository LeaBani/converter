import PropTypes from 'prop-types';
import Toggler from '../Toggler';

import './style.scss';

function Header({
  value, isOpen, toggle,
}) {
  return (
    <header className="header">

      <div className="header-content">
        <h1 className="header-content__title">Converter</h1>
        <p
          className="header-content__infos"
        >
          {value} euro
        </p>
      </div>
      <Toggler isOpen={isOpen} toggle={toggle} />
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Header;