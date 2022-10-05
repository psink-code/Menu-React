import { Component } from 'react';

class Card extends Component {
    
    render() {
        console.log(this.props.card);
        return (
            
            <div className="card col-3 m-3 container-fluid" style={{ width: "18rem", textAlign: "center" }}>
                <div className="row ">
                    <div className="col-4"><button onClick={()=>this.props.meno(this.props.card)} className="btn btn-danger">-</button></div>
                    <div className="col-4"><span className="badge badge text-dark bg-light ">{this.props.card.q}</span></div>
                    <div className="col-4"><button  onClick={()=>this.props.piu(this.props.card)} className="btn btn-success">+</button></div>
                </div>
                <img src={this.props.card.img} alt="..." className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.card.name}</h5>
                    <p className="card-text">${this.props.card.prezzo}</p>
                    <a href="#" className="btn btn-primary">Aggungi al carrello</a>
                </div>
            </div>
        
        )
    }
}

export default Card;