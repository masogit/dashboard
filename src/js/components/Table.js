import React, { Component, PropTypes } from 'react';
import { Table, TableRow, Box } from 'grommet';
import { isArray, values } from 'lodash';

export default class GTable extends Component {
  constructor(props) {
    super();
  }

  renderTableHeader() {
    const {data, fields} = this.props;
    const fieldKeys = fields ? fields.split(",") : (data ? Object.keys(data[0]) : []);
    return fieldKeys.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }

  renderTableBody() {
    const {data, fields} = this.props;
    const fieldKeys = fields ? fields.split(",") : (data ? Object.keys(data[0]) : []);
    return (
      data.map((record, index) => {
        return (
          <TableRow key={index}>
            {
              fieldKeys.map((key, tdindex) => (
                <td key={tdindex}>
                  {
                    (record[key] instanceof Object) ? values(record[key])[0] : record[key]
                  }
                </td>
              ))
            }
          </TableRow>
        );
      })
    );
  }

  renderTable() {
    return (
      <Table selectable={true}>
        <thead>
          <tr>
            {this.renderTableHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderTableBody()}
        </tbody>
      </Table>
    );
  }

  render() {
    const {data} = this.props;

    if (data == undefined || data == null) {
      return <div>Loading...</div>;
    } else if (!isArray(data)) {
      return <div>Data type is incorrect</div>;
    }

    return (
      <Box pad={{ horizontal: 'medium' }} flex={true}>
        {this.renderTable()}
      </Box>
    );
  }
}

GTable.propTypes = {
  data: PropTypes.array.isRequired
};
