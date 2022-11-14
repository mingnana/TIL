import PropTypes from "prop-types";

const Card = ({ title, onClick, children }) => {
    return (
        <div className="card mb-3" onClick={onClick}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>{title}</div>
                    {children && <div>{children}</div>}
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    children: null,
    onClick: () => {},
};
Card.defaultProps = {
    title: "Title",
};
export default Card;
