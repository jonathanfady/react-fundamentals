export default function Pagination({ goToPreviousPage, goToNextPage, length, count }) {
    return (
        <div className="d-md-flex justify-content-between align-items-center bg-dark rounded">
            <button className={`btn btn-secondary ${goToPreviousPage ? "" : "disabled"}`} onClick={goToPreviousPage}>
                <i className="bi bi-caret-left"></i> Previous
            </button>
            <h6 className="text-light">Showing {length} of {count} pokemons</h6>
            <button className={`btn btn-secondary ${goToNextPage ? "" : "disabled"}`} onClick={goToNextPage}>
                Next <i className="bi bi-caret-right"></i>
            </button>
        </div>
    )
}