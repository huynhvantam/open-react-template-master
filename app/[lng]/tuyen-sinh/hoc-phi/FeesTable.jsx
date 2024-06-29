// components/FeeTable.js

const FeeTable = () => {
  return (
    <section>
      {/* 1 */}
      <h3 className="h3  text-center pb-3 mb-10 pt-32 border-b-[3px] border-rose-500 w-fit mx-auto">
        Chính sách phí năm học 2024-2025
      </h3>
      <div>
        <h5 className="h4 font-playfair pt-3 pb-3 ">I/ Khối mầm non</h5>
        <div className="overflow-x-auto ">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="px-4 py-2 border border-gray-300 text-left whitespace-nowrap"
                  rowSpan="2"
                >
                  Chương trình học
                </th>
                <th
                  className="px-4 py-2 border border-gray-300 text-center"
                  rowSpan="2"
                >
                  Khối lớp
                </th>
                <th
                  colSpan="3"
                  className="px-4 py-2 border border-gray-300 text-center bg-red-500 text-white"
                >
                  Học phí đóng theo năm
                  <br />
                  (Giảm 5%*)
                </th>
                <th
                  colSpan="3"
                  className="px-4 py-2 border border-gray-300 text-center bg-gray-500 text-white"
                >
                  Học phí đóng theo kì
                </th>
              </tr>
              <tr className="bg-gray-100 whitespace-nowrap">
                <th className="px-4 py-2 border border-gray-300">Khóa học</th>
                <th className="px-4 py-2 border border-gray-300">
                  Tổng học phí
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Tiền ăn/năm
                </th>
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
                <td className="px-4 py-2 border border-gray-300">
                  Học cả ngày
                </td>
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
        <h5 className="h4 font-playfair pt-10 pb-3 ">
          II/ Khối tiểu học và trung học
        </h5>

        <div className="overflow-x-auto p">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className="px-4 py-2 border border-gray-300 text-left whitespace-nowrap"
                  rowSpan="2"
                >
                  Chương trình học
                </th>
                <th
                  className="px-4 py-2 border border-gray-300 text-left whitespace-nowrap"
                  rowSpan="2"
                >
                  Khối lớp
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center bg-red-500 text-white whitespace-nowrap">
                  Học phí đóng theo năm
                  <br />
                  (Giảm 5%*)
                </th>
                <th
                  colSpan="4"
                  className="px-4 py-2 border border-gray-300 text-center bg-gray-500 text-white whitespace-nowrap"
                >
                  Học phí đóng theo học phần
                </th>
              </tr>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300 whitespace-nowrap text-center">
                  Tổng học phí
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center">
                  Học phần 1 <br />
                  (30%)
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center">
                  Học phần 2 <br />
                  (30%)
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center">
                  Học phần 3 <br />
                  (25%)
                </th>
                <th className="px-4 py-2 border border-gray-300 text-center">
                  Học phần 4 <br />
                  (15%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan="2">
                  Tiểu học
                </td>
                <td className="px-4 py-2 border border-gray-300">Song ngữ</td>
                <td className="px-4 py-2 border border-gray-300 text-red-500">
                  39.600.000
                </td>
                <td className="px-4 py-2 border border-gray-300">9.900.000</td>
                <td className="px-4 py-2 border border-gray-300">9.900.000</td>
                <td className="px-4 py-2 border border-gray-300">9.900.000</td>
                <td className="px-4 py-2 border border-gray-300">9.900.000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Quốc tế</td>
                <td className="px-4 py-2 border border-gray-300 text-red-500">
                  6.600 USD
                </td>
                <td className="px-4 py-2 border border-gray-300">2,178 USD</td>
                <td className="px-4 py-2 border border-gray-300">2,178 USD</td>
                <td className="px-4 py-2 border border-gray-300">1,815USD</td>
                <td className="px-4 py-2 border border-gray-300">1,089USD</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300" rowSpan="2">
                  Trung học
                </td>
                <td className="px-4 py-2 border border-gray-300">Song ngữ</td>
                <td className="px-4 py-2 border border-gray-300 text-red-500">
                  54.450.000
                </td>
                <td className="px-4 py-2 border border-gray-300">13.612.500</td>
                <td className="px-4 py-2 border border-gray-300">13.612.500</td>
                <td className="px-4 py-2 border border-gray-300">13.612.500</td>
                <td className="px-4 py-2 border border-gray-300">13.612.500</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Quốc tế</td>
                <td className="px-4 py-2 border border-gray-300 text-red-500">
                  7,260 USD
                </td>
                <td className="px-4 py-2 border border-gray-300">2,396USD</td>
                <td className="px-4 py-2 border border-gray-300">2,396USD</td>
                <td className="px-4 py-2 border border-gray-300">1,997 USD</td>
                <td className="px-4 py-2 border border-gray-300">1198 USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2 */}
      <h3 className="h3  text-center pb-3 mb-10 pt-32 border-b-[3px] border-rose-500 w-fit mx-auto">
        Các phí khác
      </h3>
      <h5 className="h4 font-playfair pt-10 pb-3">
        Áp dụng cho toàn bộ chương trình học
      </h5>
      <div className=" ">
        <div className="overflow-x-auto  p">
          <table className="table-auto  min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-300 text-left min-w-[500px]">
                  Khoản Phí
                </th>
                <th className="px-4 py-2 border border-gray-300 text-left  min-w-[500px]">
                  Chi Tiết
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí nhập học
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  500.000 VND/năm
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí cơ sở vật chất & phí sách vở, dụng cụ học tập
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  2.000.000 VND/năm (đóng vào đầu năm học)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí bán trú
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  150.000 VND/tháng
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí sách vở & Giáo trình
                  <br /> (áp dụng cho chương trình tiểu học & trung học song
                  ngữ)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Vui lòng liên hệ nhân viên văn phòng để biết thêm chi tiế
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Học phí các môn năng khiếu (võ thuật, cầu lông, đàn...)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Vui lòng liên hệ nhân viên văn phòng để biết thêm chi tiết
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Đồng phục</td>
                <td className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc list-inside">
                    <li>Bộ sơ mi: 250.000 VND – 270.000 VND</li>
                    <li>Bộ thể thao: 230.000 VND – 250.000 VND</li>
                    <li>Bộ mùa đông: 270.000 VND – 300.000 VND</li>
                    <li>Mũ: 85.000 VND</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí xe bus đưa đón
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  1.540.000 VND/tháng (22 ngày)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Phí ăn sáng tại trường
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  15.000 VND/ngày
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3 */}
      <h3 className="h3  text-center pb-3 mb-10 pt-32 border-b-[3px] border-rose-500 w-fit mx-auto">
        Chính sách ưu đãi
      </h3>
      <div className="overflow-x-auto p">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-300 text-left min-w-[300px]">
                Chính Sách
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left min-w-[500px]">
                Chi Tiết
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                I. Chính sách ưu đãi cho học sinh Mầm non, Tiểu học, Trung học
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-disc list-inside">
                  <li>10% học phí cho người con thứ 2</li>
                  <li>15% học phí cho anh chị em tiếp theo</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                II. Chính sách ưu đãi cho Học sinh Mầm non
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-disc list-inside">
                  <li>
                    Giảm 2 triệu đồng phí xây dựng cơ sở vật chất và giảm thêm
                    10% học phí cho năm học đầu tiên Tiểu học nếu đã học mầm non
                    từ 1 năm trở lên
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                III. Chính sách giảm giá dành cho tất cả học sinh Tiểu học &
                THCS Phượng Hoàng đã đạt thành tích năm học trước sẽ giảm học
                phí cho năm học tiếp theo
                <div className="text-slate-400 text-xs pt-1">
                  Môn văn hóa: Toán, Văn, tiếng Anh, Vật lý, Hóa học, Lịch sử,
                  Địa lý <br />
                  Môn năng khiếu: Múa hát, Thể thao, IOE, VIOLYMPIC, Rung chuông
                  vàng
                  <br />{" "}
                </div>
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-decimal list-inside">
                  <li className="pl-[4.5px]">
                    Giảm 5% học phí cho học sinh đạt kết quả học sinh Giỏi
                  </li>
                  <li>
                    <b>Các kỳ thi cấp thành phố:</b>
                    <ul className="list-disc list-inside ml-6">
                      <li>Giải Nhất: Giảm 10%</li>
                      <li>Giải Nhì: Giảm 7%</li>
                      <li>Giải Ba: Giảm 5%</li>
                    </ul>
                  </li>
                  <li>
                    <b>Các kỳ thi cấp tỉnh:</b>
                    <ul className="list-disc list-inside ml-6">
                      <li>Giải Nhất: Giảm 15%</li>
                      <li>Giải Nhì: Giảm 10%</li>
                      <li>Giải Ba: Giảm 5%</li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      Học sinh dành các giải thưởng trong các kỳ thi cấp quốc
                      gia:
                    </b>
                    <ul className="list-disc list-inside ml-6">
                      <li>Giải Nhất: Giảm 20%</li>
                      <li>Giải Nhì: Giảm 15%</li>
                      <li>Giải Ba: Giảm 10%</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">
                IV. Chính sách ưu đãi cho học sinh Tiểu học & THCS
              </td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="list-disc list-inside">
                  <li>
                    Giảm 2 triệu đồng phí xây dựng cơ sở vật chất cho 50 học
                    sinh Tiểu học & THCS đầu tiên khi đăng ký trước 01/07/2024
                  </li>
                  <li>
                    Giảm 2 triệu đồng phí xây dựng cơ sở vật chất khi đăng ký
                    trước 01/08/2024
                  </li>
                  <li>
                    Giảm 5% học phí cho phụ huynh đóng học phí nguyên năm học
                    trước ngày khai giảng năm học (*có thể cộng dồn với các
                    chính sách ưu đãi khác)
                  </li>
                  <li>
                    Học sinh giỏi và xuất sắc bậc THCS (Điểm trung bình: trên
                    8.0/10): Giảm 10% học phí cho năm học đầu tiên tại trường
                    (*có thể cộng dồn với các chính sách ưu đãi khác)
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeeTable;
