import "./Loading.css";

/**Loading component
 * Props: none
 * State: none
 * {Companies, Jobs, CompanyPage} -> Loading
 */

function Loading() {
  return (
    <div className="Loading container d-flex justify-content-center" role="status">
      <div className="container d-flex justify-content-center">
        <div>
          <span className="sr-only spinner-border Loading text-light"></span>
          <span className="text-light">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
