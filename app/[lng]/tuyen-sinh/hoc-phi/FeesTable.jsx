// components/FeesTable.js

const FeesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-black text-center">
              Độ tuổi
            </th>
            <th className="px-4 py-2 border border-black text-center">
              Học phí/năm (VND)
            </th>
            <th className="px-4 py-2 border border-black text-center">
              Tiền ăn/năm (VND)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 border border-black  text-center" colSpan="3">
              Từ 18 tháng tuổi đến dưới 6 tuổi
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black text-left">
              Học cả ngày
            </td>
            <td className="px-4 py-2 border border-black text-left">
              26.730.000
            </td>
            <td className="px-4 py-2 border border-black text-left">
              9.900.000
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black text-left">
              Học nửa ngày có ăn trưa
            </td>
            <td className="px-4 py-2 border border-black text-left">
              13.365.000
            </td>
            <td className="px-4 py-2 border border-black text-left">
              7.920.000
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-black text-left">
              Học nửa ngày không ăn trưa
            </td>
            <td className="px-4 py-2 border border-black text-left">
              13.365.000
            </td>
            <td className="px-4 py-2 border border-black text-left">
              1.980.000*
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeesTable;
