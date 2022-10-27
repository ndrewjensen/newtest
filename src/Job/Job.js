/** Job Component
 * Props: job
 * State: none
 * {Jobs, CompanyPage } -> Job
 */

function Job({ job }) {
  const { title, companyName, salary, equity } = job;
  return (
    <div className="Job container d-flex justify-content-center">
      <div className="card m-3 card col-9 col-12-small d-flex justify-content-center border border-3 border-secondary">
        <div className="card-body">
          <h5>{title}</h5>
          <p>{companyName}</p>
          <small>
            Salary: {salary} | Equity: {equity}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Job;
