import propTypes from "prop-types";

const Pagination = ({ currentPage, numberOfPages, onClick }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item cursor-pointer">
                    <a className="page-link">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {Array(numberOfPages)
                    .fill(1)
                    .map((value, index) => value + index)
                    .map((pageNumber) => {
                        return (
                            <li
                                key={pageNumber}
                                className={`page-item cursor-pointer ${
                                    currentPage === pageNumber ? "active" : ""
                                }`}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => {
                                        onClick(pageNumber);
                                    }}
                                >
                                    {pageNumber}
                                </div>
                            </li>
                        );
                    })}
                <li className="page-item cursor-pointer">
                    <a className="page-link">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: propTypes.number,
    numberOfPages: propTypes.number.isRequired,
    onClick: propTypes.func.isRequired,
};

Pagination.defaultProps = {
    currentPage: 1,
};

export default Pagination;
