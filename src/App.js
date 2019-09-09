import React from 'react';
import './App.css';
import Axios from 'axios'
import Movieitem from "./Movieitem";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rows: []
        }
    }
    componentDidMount() {
        this.search('Avengers')
    }




    search = (keyword) => {
        console.log(keyword)
        var dataArray = []
        var url = 'https://api.themoviedb.org/3/search/movie?api_key=f83b38f5d0802415af83121f8415c486&query='+keyword
        Axios.get(url).then(result => {
            console.log(JSON.stringify(result.data.results))
            result.data.results.forEach(item =>{
                item.poster_src = "https://image.tmdb.org/t/p/w185" + item.poster_path
                dataArray.push(item)
            })

            this.setState({rows :dataArray});
        })
    }

    render() {
        return (
            <div className="App">
                {/* JSX */}
                <table className='NavBar'>
                    <tbody>
                    <tr>
                        <td>
                            <img src={require('./assets/logo.svg')} width='50'/>
                        </td>
                        Movie search
                    </tr>
                    </tbody>
                </table>
                <input className='Block-text'
                       placeholder='Enter your  movie keyword'
                       onChange={event => {
                           this.search(event.target.value)
                       }}/>
                {this.state.rows.map(item => (
                   <Movieitem movie={item}/>
                ))}

            </div>
        );
    }
}


export default App;
