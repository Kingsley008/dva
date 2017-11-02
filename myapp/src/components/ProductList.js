import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import { connect } from 'dva';

/**
 * 定义 Table 控件  columns  row
 * **/
const ProductList = ({ onDelete, products}) => {
  const columns = [{
    title: 'Name',
    dataIndex:'name',
  },{
    title:'Actions',
    render:(text, record) => {

      return(
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }];
  return (
    <Table
      dataSource = { products }
      columns = { columns }
    />
  )
};

// 自定义需要的外部参数
ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};


export default connect()(ProductList);
