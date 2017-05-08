# ReactHTMLTableToExcel
Provides a client side generation of Excel (.xls) file from HTML table element. No additional dependencies.

## Installation

```
npm install --save react-html-table-to-excel
```

Dependencies: React >= 0.13.0

## Features

* Download HTML table as Excel file;
* No server side code;
* Set desired .xsl filename and sheet;
* Supported IE 11;

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
                    table="table-test"
                    filename="tabletest"
                    sheet="tablica"
                    buttonText="Download as XLS"/>
                <table id="table-test">
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
