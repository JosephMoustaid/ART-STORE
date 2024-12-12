import PropTypes from 'prop-types';


function Button({href,content}){
    return <a href={href} className="btn btn-primary">{content}</a>
}
export default Button;

Button.propTypes = {
    href: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};