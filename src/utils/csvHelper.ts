export interface CsvColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => string | number);
}

export const exportToCSV = <T>(
  fileName: string,
  data: T[],
  columns: CsvColumn<T>[]
) => {
  if (!data.length) {
    alert("No data available to export.");
    return;
  }

  // CSV Header
  const headers = columns.map(column => column.header).join(",");

  // CSV Rows
  const rows = data.map(item => {
    return columns
      .map(column => {
        const value =
          typeof column.accessor === "function"
            ? column.accessor(item)
            : item[column.accessor];

        const escapedValue = String(value ?? "")
          .replace(/"/g, '""');

        return `"${escapedValue}"`;
      })
      .join(",");
  });

  const csvContent = [headers, ...rows].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `${fileName}.csv`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};