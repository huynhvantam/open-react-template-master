// components/FeeTable.js

const FeeTable = () => {
  return (
    <section>
      <h3 className="h3  text-center pb-3 mb-10 pt-10 border-b-[3px] border-rose-500 w-fit mx-auto">
        Khối mầm non
      </h3>
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
              <th className="px-4 py-2 border border-gray-300">
                Học phí/tháng
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Tiền ăn/tháng
              </th>
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
      <div className=" pt-10">
        <h4>Các phí khác</h4>
      </div>
      <h3 className="h3  text-center pb-3 mb-10 pt-32 border-b-[3px] border-rose-500 w-fit mx-auto">
        Khối tiểu học & trung học
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-black">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="px-4 py-2 border border-black text-left whitespace-nowrap"
                rowSpan="2"
              >
                Chương trình học
              </th>
              <th
                className="px-4 py-2 border border-black text-left whitespace-nowrap"
                rowSpan="2"
              >
                Khối lớp
              </th>
              <th className="px-4 py-2 border border-black text-center bg-red-500 text-white whitespace-nowrap">
                Học phí đóng theo năm
                <br />
                (Giảm 10%*)
              </th>
              <th
                colSpan="4"
                className="px-4 py-2 border border-black text-center bg-gray-500 text-white whitespace-nowrap"
              >
                Học phí đóng theo học phần
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-black whitespace-nowrap text-center">
                Tổng học phí
              </th>
              <th className="px-4 py-2 border border-black text-center">
                Học phần 1 <br />
                (30%)
              </th>
              <th className="px-4 py-2 border border-black text-center">
                Học phần 2 <br />
                (30%)
              </th>
              <th className="px-4 py-2 border border-black text-center">
                Học phần 3 <br />
                (25%)
              </th>
              <th className="px-4 py-2 border border-black text-center">
                Học phần 4 <br />
                (15%)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-black" rowSpan="2">
                Tiểu học
              </td>
              <td className="px-4 py-2 border border-black">Song ngữ</td>
              <td className="px-4 py-2 border border-black text-red-500">
                39.600.000
              </td>
              <td className="px-4 py-2 border border-black">9.900.000</td>
              <td className="px-4 py-2 border border-black">9.900.000</td>
              <td className="px-4 py-2 border border-black">9.900.000</td>
              <td className="px-4 py-2 border border-black">9.900.000</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-black">Quốc tế</td>
              <td className="px-4 py-2 border border-black text-red-500">
                6.600 USD
              </td>
              <td className="px-4 py-2 border border-black">2,178 USD</td>
              <td className="px-4 py-2 border border-black">2,178 USD</td>
              <td className="px-4 py-2 border border-black">1,815USD</td>
              <td className="px-4 py-2 border border-black">1,089USD</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-black" rowSpan="2">
                Trung học
              </td>
              <td className="px-4 py-2 border border-black">Song ngữ</td>
              <td className="px-4 py-2 border border-black text-red-500">
                54.450.000
              </td>
              <td className="px-4 py-2 border border-black">13.612.500</td>
              <td className="px-4 py-2 border border-black">13.612.500</td>
              <td className="px-4 py-2 border border-black">13.612.500</td>
              <td className="px-4 py-2 border border-black">13.612.500</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-black">Quốc tế</td>
              <td className="px-4 py-2 border border-black text-red-500">
                7,260 USD
              </td>
              <td className="px-4 py-2 border border-black">2,396USD</td>
              <td className="px-4 py-2 border border-black">2,396USD</td>
              <td className="px-4 py-2 border border-black">1,997 USD</td>
              <td className="px-4 py-2 border border-black">1198 USD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeeTable;
