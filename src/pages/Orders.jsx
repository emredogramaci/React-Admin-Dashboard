import React from "react";
import { Header } from "../components";
import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Toolbar,
  Search,
} from "@syncfusion/ej2-react-grids";

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        editSettings={editing}
        contextMenuItems={contextMenuItems}
        toolbar={["ExcelExport", "PdfExport", "Search"]}
        width="auto"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Edit,
            Page,
            ExcelExport,
            PdfExport,
            Toolbar,
            Search,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
