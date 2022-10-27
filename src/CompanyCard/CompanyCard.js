import "./CompanyCard.css";

/** CompanyCard Component
 * Props: company object with company details
 * State: none
 * Companies -> Company
 */

function CompanyCard({ company }) {
  const { name, description, numEmployees, logoUrl, handle } = company;
  return (
    <div className="CompanyCard container d-flex justify-content-center">
      <div className="card col-9 col-12-small d-flex justify-content-center border border-3 border-secondary">
        <div className="card-body">
          {logoUrl && <img className="Company-logo" alt={handle} src={logoUrl} />}
          <h4>{name}</h4>
          <p>{description}</p>
          {/* <p>{numEmployees}</p> */}
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
