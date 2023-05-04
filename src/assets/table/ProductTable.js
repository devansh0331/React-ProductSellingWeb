import React, { Component } from 'react';
import './Table.css'
 
class ProductTable extends Component {
    render() {
        var heading = ['Name', 'Firehaltt'];
        var body =
            [['Power source', 'DC5V/USB'],
            ['Working current', '120-130mA'],
            ['Operating Temperature', '‘-20℃ ~ 55℃'],
            ['Ambient Humidity', 'Less than 95% RH'],
            ['Sound level', '>80db'],
            ['Standby Mode ', 'Red LED flashes and an intermittent acoustic alarm'],
            ['Response time', '<20 seconds'],
            ['Recovery time', '1 minutes'],
            ['Induced gas', 'Natural gas, Town gas, LPG, CO etc.'],
            ];
        return (
            <div  >
                <Table className="tr" heading={heading} body={body} />,
            </div>
        );
    }
}
 
class Table extends Component {
    render() {
        var heading = this.props.heading;
        var body = this.props.body;
        return (
            <table style={{ width: 500 }}>
                <thead>
                    <tr >
                        {heading.map((head, headID) => <th key={headID} >{head}</th>)}
                    </tr>
                </thead>
                <tbody >
                    {body.map((rowContent, rowID) => <TableRow rowContent={rowContent} key={rowID} />)}
                </tbody>
            </table>
        );
    }
}
 
class TableRow extends Component {
    render() {
        var row = this.props.rowContent;
        return (
            <tr>
                {row.map((val, rowID) => <td key={rowID}>{val}</td>)}
            </tr>
        )
    }
}
 
export default ProductTable;
