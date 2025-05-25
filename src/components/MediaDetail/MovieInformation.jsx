import { currencyFormatter } from "@libs/utils";

const MovieInformation = ({
  movieInfo: { original_title, origin_country, budget, revenue, status },
}) => {
  return (
    <div className="sticky right-0 top-8 max-h-[90vh] overflow-auto">
      <p className="mb-4 text-[1.4vw] font-bold uppercase">Information</p>
      <div className="mb-4">
        <strong className="mb-1 block font-bold">Original Name</strong>
        <p>{original_title}</p>
      </div>
      <div className="mb-4">
        <strong className="mb-1 block font-bold">Original Country</strong>
        <p className="flex flex-wrap items-center">
          {(origin_country || []).map((country_code) => (
            <img
              key={country_code}
              src={`https://flagcdn.com/${country_code.toLowerCase()}.svg`}
              width="25"
              alt={country_code.toLowerCase()}
              className="mb-1 mr-1"
            />
          ))}
        </p>
      </div>
      <div className="mb-4">
        <strong className="mb-1 block font-bold">Status</strong>
        <p>{status}</p>
      </div>
      <div className="mb-4">
        <strong className="font-bold">Budget</strong>
        <p>{budget ? currencyFormatter(budget) : "updating..."}</p>
      </div>
      <div className="mb-4">
        <strong className="mb-1 block font-bold">Revenue</strong>
        <p>{revenue ? currencyFormatter(revenue) : "updating..."}</p>
      </div>
    </div>
  );
};
export default MovieInformation;
