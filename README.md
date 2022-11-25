# ReactHTMLTableToExcel V3
Provides a client side generation of Excel (.xls/.xlsx) file from HTML table element.


[![Build Status](https://travis-ci.org/zsusac/ReactHTMLTableToExcel.svg?branch=master)](https://travis-ci.org/zsusac/ReactHTMLTableToExcel)

[![NPM](https://nodei.co/npm/react-html-table-to-excel-3.png)](https://npmjs.org/package/react-html-table-to-excel-3)

___
No additional dependencies
___

## Installation

```
npm install --save react-html-table-to-excel-3
```

## Features

* Download HTML table as Excel file in .xls format
* No server side code
* Set desired .xls filename and sheet
* Set desired class name and id for styling
* Supported IE 11

## Options

A list of available properties can be found below. These must be passed to the containing `ReactHTMLTableToExcel` component.

Property | Type | Description
----- | ----- | -----
**table** | *string* | ID attribute of HTML table element.
**filename** | *string* | Name of Excel file.
**filetype** | *string* | Name of File Extension for Excel file.
**sheet** | *string* | Name of Excel sheet.
**id** | *string* | ID attribute of button element.
**className** | *string* | Class attribute of button element.
**buttonText** | *string* | Button text.
**children** | *element* | Child elements to render instead of the button text.

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
                    filetype="xls"
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

### NB: This repository is a super set of the original [ReactHTMLTableToExcel](https://npmjs.org/package/react-html-table-to-excel-3) package by [zsusac](https://github.com/zsusac) which is currently no longer maintained. This version adds some new features but maintains the original core.

I do not retain the ownership or responsibility of this package.