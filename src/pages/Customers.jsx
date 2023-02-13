import React from "react";
import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  Search,
} from "@syncfusion/ej2-react-grids";

const Customers = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customers" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        editSettings={editing}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Edit, Page, Search, Toolbar, Selection, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
