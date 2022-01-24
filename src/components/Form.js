import React from 'react'


export default class Form extends React.Component{

    state = {
        title: 'JavaScript',
        text: 'javascript is awesome',
        library: 'React',
        isAwesome: true
    }

    handleChange = (e) =>{

        if(e.target.name === 'text'){
            this.setState({title: e.target.value });
        }
        else if(e.target.type === 'textarea'){
            this.setState({text: e.target.value})
        }
        else if(e.target.type === 'select-one'){
            console.log(e.target.value)
            this.setState({library: e.target.value})
        }
        else if(e.target.type ===  'checkbox'){
            this.setState({isAwesome: e.target.value})
        }
        else{
            console.log("nothing here");
        }
        // console.log(e.target.value)
        // this.setState({title: e.target.value,});
    };

    submitHandler = (e) =>{
        const {title, text, library, isAwesome} = this.state;

        e.preventDefault();
        console.log(title, text, library, isAwesome);
        
    }

    render(){
        const {title, text, library, isAwesome} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <p>{title}</p>
                    <input name="title" onChange={this.handleChange} type="text" 
                    value={ title } placeholder='Enter title'/>
                    <br/>
                    <br/>
                    
                    <textarea name="text" onChange={this.handleChange} value={text}></textarea>
                    <br/>
                    <br/>
                    {/* <select name='l' value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="React">React</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" checked={isAwesome} value={isAwesome} onChange={this.handleChange} ></input> */}
                    <br/>
                    <br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}