import React from "react";

const Schedule = () => {
  return (
    <section id="schedule">
      <div className="overflow-x-auto m-0 sm:m-14 ">
        <h2 className="mb-12 text-3xl font-bold text-primary dark:text-primary-400 text-center ">
          Schedule and Booking
        </h2>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Day
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Seance
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Duree
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Monday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                14:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ......
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">2hr</td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tuesday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                14:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                .....
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">3h</td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Wednesday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                11:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ........
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">2hr</td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Thursday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                10:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ........
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">2hr</td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Friday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                10:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ........
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">4hr</td>
            </tr>

            <tr className="odd:bg-gray-50">
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Saturday
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                9:00
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                ........
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">2hr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
