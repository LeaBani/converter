import PropTypes from 'prop-types';
import Toggler from '../Toggler';

import './style.scss';

function Header({
  value, isOpen, toggle, change
}) {

  const handleChange = (e) => {
    console.log('handleChange', e.target.value);
    if (e.target.value > 0) {
      change(parseInt(e.target.value, 10));
    } else {
      change(0);
    }
  }

  const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <header className="header">

      <div className="header-content">
        <h1 className="header-content__title">Converter</h1>
        <form className="header-content__form" method="post" onSubmit={handleSubmit}>
        <input className="header-content__infos" name="value" placeholder="valeur" value={value} onChange={handleChange}/>
        <div className="header-content__infos">€</div>
        </form>
      </div>
      <Toggler isOpen={isOpen} toggle={toggle} />
    </header>
  );
}

Header.propTypes = {
  value: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

export default Header;