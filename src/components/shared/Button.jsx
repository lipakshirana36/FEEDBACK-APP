import PropTypes from 'prop-types'

function Button({ children, version, type, disabled, className, ...rest }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn btn-${version} ${className ? className : ''}`}
      {...rest}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  disabled: false,
  className: '',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default Button