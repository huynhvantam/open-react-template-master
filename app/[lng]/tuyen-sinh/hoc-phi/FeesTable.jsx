// components/FeeTable.js

const FeeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-300 text-left whitespace-nowrap">
              Chương trình học
            </th>
            <th className="px-4 py-2 border border-gray-300 text-center">
              Khối lớp
            </th>
            <th
              colSpan="3"
              className="px-4 py-2 border border-gray-300 text-center bg-red-500 text-white"
            >
              Học phí đóng theo năm
              <br />
              (Giảm 10%*)
            </th>
            <th
              colSpan="3"
              className="px-4 py-2 border border-gray-300 text-center bg-gray-500 text-white"
            >
              Học phí đóng theo kì
            </th>
          </tr>
          <tr className="bg-gray-100 whitespace-nowrap">
            <th className="px-4 py-2 border border-gray-300"></th>
            <th className="px-4 py-2 border border-gray-300"></th>
            <th className="px-4 py-2 border border-gray-300"></th>
            <th className="px-4 py-2 border border-gray-300">Tổng học phí</th>
            <th className="px-4 py-2 border border-gray-300">Tiền ăn/năm</th>
            <th className="px-4 py-2 border border-gray-300">Học phí/tháng</th>
            <th className="px-4 py-2 border border-gray-300">Tiền ăn/tháng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300" rowSpan="3">
              Mầm non <br />
              song ngữ
            </td>
            <td
              className="px-4 py-2 border border-gray-300 whitespace-nowrap"
              rowSpan="3"
            >
              Từ 18 tháng tuổi
              <br /> đến dưới 6 tuổi
            </td>
            <td className="px-4 py-2 border border-gray-300">Học cả ngày</td>
            <td className="px-4 py-2 border border-gray-300 text-red-500">
              26.730.000
            </td>
            <td className="px-4 py-2 border border-gray-300">9.900.000</td>
            <td className="px-4 py-2 border border-gray-300">2.970.000</td>
            <td className="px-4 py-2 border border-gray-300">1.100.000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Học nửa ngày có ăn trưa
            </td>
            <td className="px-4 py-2 border border-gray-300 text-red-500">
              13.365.000
            </td>
            <td className="px-4 py-2 border border-gray-300">7.920.000</td>
            <td className="px-4 py-2 border border-gray-300">1.485.000</td>
            <td className="px-4 py-2 border border-gray-300">880.000</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">
              Học nửa ngày không ăn trưa
            </td>
            <td className="px-4 py-2 border border-gray-300 text-red-500">
              13.365.000
            </td>
            <td className="px-4 py-2 border border-gray-300">1.980.000</td>
            <td className="px-4 py-2 border border-gray-300">1.485.000 </td>
            <td className="px-4 py-2 border border-gray-300">220.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;
