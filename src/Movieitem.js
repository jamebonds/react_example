import React, {Component} from 'react';

class Movieitem extends Component {

    constructor(props){
        super(props)
    }




    render() {
        const {id,title,overview,poster_src} = this.props.movie
        return (
            <div>
                <table key={id} style={{textAlign:'left'}}>
                    <tbody>
                    <tr>
                        <td>
                            <img src={poster_src}/>
                        </td>
                        <td>
                        <strong>{title}</strong>
                            <p>{overview}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Movieitem;