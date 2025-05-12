interface CardProps {
    date: string;
    time: string;
    title: string;
    description: string;
}



const CardSchedule = () => {

    return (
        <>
                <div className="p-6 rounded-xl bg-neutral-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-700"></span>
                        <p className="text-base font-medium text-white">Jan 10,2020 - 10:00 - 11:00</p>
                      </div>
                      <div className="dropdown relative inline-flex">
                        <button type="button" data-target="dropdown-default" className="dropdown-toggle inline-flex justify-center py-2.5 px-1 items-center gap-2 text-sm text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-neutral-800 ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
                            <path d="M1.85624 2.00085H1.81458M6.0343 2.00085H5.99263M10.2124 2.00085H10.1707" stroke="currentcolor" stroke-width="2.5" stroke-linecap="round"></path>
                          </svg>
                          
                        </button>
                        <div id="dropdown-default" className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full -left-10 w-max mt-2 hidden" aria-labelledby="dropdown-default">
                          <ul className="py-2">
                            <li>
                              <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="block px-6 py-2 text-xs hover:bg-gray-100 text-gray-600 font-medium" href="javascript:;">
                               Remove
                              </a>
                            </li>
                           
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-xl leading-8 font-semibold text-white mb-1">Meeting with a friends</h6>
                    <p className="text-base font-normal text-white">Meet-Up for Travel Destination Discussion</p>
                </div>
        </>
    )
}

export default CardSchedule;