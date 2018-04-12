import * as React from 'react'
import ReactTable, {TableProps} from 'react-table'
import './index.scss'

const Table = (props: Partial<TableProps>) => {
  const tableSettings = Object.assign(tableDefaultSettings, props, getDynamicSettings(props))
  return (
    <ReactTable {...tableSettings}/>
  )
}

const tableDefaultSettings = {
  className: '-striped -highlight',
  defaultPageSize: 10,
  minRows: 0,
  previousText: 'Следущая страница',
  nextText: 'Следующая страница',
  noDataText: 'Нету данных',
  pageText: 'Страница',
  ofText: 'из',
  rowsText: 'записей'
}

const getDynamicSettings = (props: Partial<TableProps>) => {
  const tableDataLength = (props.data) ? props.data.length : null
  if (!tableDataLength) return {}
  const pageSizeOptions = [5, 10, 20, 25, 50, 100]
  if (tableDataLength < pageSizeOptions[0]) {
    pageSizeOptions.unshift((props.defaultPageSize) ? props.defaultPageSize : tableDefaultSettings.defaultPageSize)
  }
  return {
    showPagination: (tableDataLength > tableDefaultSettings.defaultPageSize),
    pageSizeOptions: pageSizeOptions
  }
}

export default Table
