import React from "react";
import { Header } from "../components";
import { contextMenuItems, employeesData, employeesGrid } from "../data/dummy";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        editSettings={editing}
        contextMenuItems={contextMenuItems}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Edit, Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
