import React, { Component } from 'react'
import { Typography } from 'antd';

export default class Contact extends Component {

    
    render() {
        const { Paragraph } = Typography
        return (
            <div>
                <h2>Contact</h2>
                <br/>
                <Paragraph copyable>https://www.linkedin.com/in/williamdavidclifford</Paragraph>
                <br/>
                <Paragraph copyable>https://github.com/WClifford1</Paragraph>
                <br/>
                <Paragraph copyable>williamdavidclifford@gmail.com</Paragraph>
                <br/>
            </div>
        )
    }
}
