// импорт для отслеживания ввода
import { useState } from "react";

// импорт для работы с экселем
import * as XLSX from "xlsx";

// импорт стилей для таблицы
import "./style.css";


const ExcelEditor = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setExcelData(data);
    };
    reader.readAsBinaryString(file);
  };

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedData = [...excelData];
    updatedData[rowIndex][colIndex] = value;
    setExcelData(updatedData);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "UpdatedData.xlsx");
  };

  return (
    <div className="ExcelEditor">
      <header className="App-header">
        <h1>Для редактирования таблицы</h1>
        <h2>вставьте файл</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />

        {excelData.length > 0 && (
          <>
            <div className="ExcelTableWrapper">
              <table className="ExcelTable">
                <thead>
                    <tr>
                      {excelData[0].map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {excelData.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>
                            <textarea
                              value={cell || ""}
                              onChange={(e) =>
                                handleCellChange(rowIndex + 1, cellIndex, e.target.value)
                              }
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
            <button onClick={handleDownload}>Скачать файл</button>
          </>
        )}
      </header>
    </div>
  );
};

export default ExcelEditor;