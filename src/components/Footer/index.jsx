import PropTypes from 'prop-types';
import { Heart } from 'react-feather';

import './style.scss';

function Footer({
  isLiked,
  toggle,
}) {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p
          className="footer-content__infos"
        >
          <Heart
            className={isLiked ? 'heart' : 'heart-empty'}
            isLiked={isLiked}
            onClick={toggle}
          />
        </p>
      </div>

    </footer>
  );
}

Footer.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Footer;