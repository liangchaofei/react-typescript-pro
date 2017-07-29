import * as React from 'react';

//定义一个接口规范外面传递进来的参数类型
// export interface Props{
//     name:string;
//     enthusiasmLevel?: number;
// }
//定义一个接口规范state的类型
export interface State{
    num1:number
}
// function getExclamationMarks(numChars: number) {
//     return Array(numChars + 1).join('!');
// }

// 默认导出一个Hello类,如果Component<Props,State>里面没有就用object
export default class Hello extends React.Component<object,State>{
    render(){
        // const {name,enthusiasmLevel = 1} = this.props;
        // if (enthusiasmLevel <= 0) {
        //     throw new Error('You could be a little more enthusiastic. :D');
        // }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello word
                    <p>1111--{this.state.num1}</p>
                    <input value="添加" onClick={this.add} type="button"/>
                </div>
            </div>
        );
    }

    componentWillMount(){
        console.log('componentWillMount方法');
    }
    componentDidMount(){
        console.log(`componentDidMount方法`);
    }
    constructor(){
        super();
        console.log(`constructor方法`);
        this.add = this.add.bind(this);
        this.state = {
            num1:10
        }
    }
    add(){
        this.setState({
            num1:this.state.num1 + 1
        });
    }
}