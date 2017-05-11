# ReactHTMLTableToExcel
Provides a client side generation of Excel (.xls) file from HTML table element.

___
No additional dependencies
___

## Installation

```
npm install --save react-html-table-to-excel
```

## Features

* Download HTML table as Excel file in .xls format
* No server side code
* Set desired .xls filename and sheet
* Set desired class name and id for styling
* Supported IE 11

## Example

```javascript
import React, {Component} from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class Test extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                <table id="table-to-xls">
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
                </table>

            </div>
        );
    }
}

export default Test
```
