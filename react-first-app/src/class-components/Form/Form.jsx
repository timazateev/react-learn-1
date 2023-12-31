import React from 'react'
import style from './Form.module.css'

export class Form extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 1,
    //         someName: 'test name'
    //     }
    //     this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        count: 1,
        someName: 'test name',
        arr: ['array', 'example', 'items']
    }

    // handleClick() {
    //     this.setState({ count: 2 })
    // }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleSetName = (ev) => {
        this.setState({ someName: this.inputRef.value });
    }

    render() {
        return <form className={style.Form}>
            This is react class render in class Form
            <p>Count: {this.state.count}</p>
            {/* <button type="button" onClick={this.handleClick.bind(this)}> click </button> */}
            {<button style={{ color: 'blue' }} type="button" onClick={this.handleClick}> click </button>}
            <hr></hr>
            <p>Name: {this.state.someName}</p>
            <input ref={el => this.inputRef = el} type="text" />
            <button type="button" onClick={this.handleSetName}> click </button>
            <p>Array</p>
            {this.state.arr.map((item, idx) => {
                return <div key={idx}>{item}</div>
            })}
        </form>
    }
}