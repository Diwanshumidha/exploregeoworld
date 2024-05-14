import React from "react";

const SearchArea = () => {
  return (
    <div className=" mt-[-80px] relative">
      <div className="container mx-auto max-w-7xl px-2">
        <div className=" bg-white h-[200px] rounded-xl shadow-sm py-10 px-8">
          {/* <form action="/">
            <div className="flex flex-wrap items-end ">
              <div className="col-md-6 col-lg-3 search-input">
                <div className=" flex flex-col">
                  <label className="text-[#999] cursor-pointer">Destination</label>
                  
                  <div>
                 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                        d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
                      />
                      <circle
                        cx={256}
                        cy={192}
                        r={48}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={32}
                      />
                    </svg>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="New York, USA"
                  />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 search-input">
                <div className="form-group">
                  <label>Check In</label>
                  <input
                    type="text"
                    className="form-control date-picker"
                    placeholder="MM / DD / YY"
                  />
                  <div>
                    <i className="far fa-calendar-alt" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 search-input">
                <div className="form-group">
                  <label>Check Out</label>
                  <input
                    type="text"
                    className="form-control date-picker"
                    placeholder="MM / DD / YY"
                  />
                  <div>
                    <i className="far fa-calendar-alt" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 search-input">
                <div className="form-group">
                  <label>Travel Type</label>
                  <select className="select nice-select">
                    <option value="">Travel Type</option>
                    <option value={1}>Adventure Tours</option>
                    <option value={2}>City Tours</option>
                    <option value={3}>Couple Tours</option>
                    <option value={4}>Group Tours</option>
                    <option value={5}>Weekend Break</option>
                    <option value={6}>Business Tours</option>
                  </select>
                  <div className="nice-select-icon">
                    <i className="far fa-globe-europe" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 search-input">
                <button type="submit" className="search-btn">
                  {" "}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="magnifying-glass"
                    className="svg-inline--fa fa-magnifying-glass "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                    />
                  </svg>
                  Find Now
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
