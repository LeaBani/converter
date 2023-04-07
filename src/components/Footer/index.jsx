import PropTypes from 'prop-types';
import { Heart } from 'react-feather';

import './style.scss';

function Footer({
  isLike,
  toggle,
}) {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p
          className="footer-content__infos"
        >
          <Heart
            className={isLike ? 'heart' : 'heart-empty'}
            isLike={isLike}
            onClick={toggle}
          />
        </p>
      </div>

    </footer>
  );
}

Footer.propTypes = {
  isLike: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Footer;