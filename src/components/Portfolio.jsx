import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './portfolioStyle.css';
import { Timeline, Icon } from 'antd';

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                <Timeline mode="alternate">
                    <Timeline.Item color="green">
                        <a rel="noopener noreferrer" target="_blank" style={{color: "black"}} href="https://sortal.io">Started internship with Sortal Aug 2019</a>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <a rel="noopener noreferrer" target="_blank" style={{color: "black"}} href="https://festive-cori-46ce58.netlify.com">Created Wotnot Media portfolio web app using MERN stack Jul 2019</a>
                    </Timeline.Item>
                    <Timeline.Item>
                        <a rel="noopener noreferrer" target="_blank" style={{color: "black"}} href="https://glacial-castle-71209.herokuapp.com">Created Ruby on Rails two-sided marketplace project May 2019</a></Timeline.Item>
                    <Timeline.Item color="red"><a rel="noopener noreferrer" target="_blank" style={{color: "black"}} href="https://github.com/WClifford1/Ruby-Terminal-Assessment">Created first terminal app Mar 2019</a></Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        <a rel="noopener noreferrer" target="_blank" style={{color: "black"}} href="https://coderacademy.edu.au/">Started Coderacademy Mar 2019</a>
                    </Timeline.Item>
                </Timeline>
                <br/>
                <br/>
            </div>
        )
    }
}