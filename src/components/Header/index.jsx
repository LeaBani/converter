import PropTypes from 'prop-types';
import Toggler from '../Toggler';

import './style.scss';

function Header({
  value, isOpen, toggle, change
}) {

  // TODO add form to change value

  const handleChange = (e) => {
    console.log('handleChange', e.target.value);
    change(value);
    
  }

  const handleSubmit = (e) => {
      e.preventDefault();

          // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    console.log(formData, form);

    }

  return (
    <header className="header">

      <div className="header-content">
        <h1 className="header-content__title">Converter</h1>
        <form method="post" onSubmit={handleSubmit}>
        <input className="header-content__infos" name="value" placeholder="valeur" value={value} onChange={handleChange}/>
        <button className="header-content__infos" type='submit'>Change</button>
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