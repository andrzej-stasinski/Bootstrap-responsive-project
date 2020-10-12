import React, { Component } from 'react'
import PageWrapper from './PageWrapper';
import Table from 'react-bootstrap/Table';

class Burgers extends Component {
    state = {
        burgers: [{
            id: 1,
            ingredients: 'content',
            name: 'Burger 1',
            price: 10,
        }],
    }
    componentDidMount() {
        fetch('https://infoshare-a85a4.firebaseio.com/burgers.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const dataArr = Object.keys(data).map(key => ({id: key, ...data[key]}))
            console.log(dataArr);
            this.setState({ burgers:  [...this.state.burgers, ...dataArr]});
        });
    }
    render() { 
        return (
            <div>
                <PageWrapper title='Burgers'>
                    <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>Lp</th>
                            <th>Name</th>
                            <th>Ingredients</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.burgers.map((burger, index) => {
                            return(
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{burger.name}</td>
                                    <td>{burger.ingredients}</td>
                                    <td>{burger.price}</td>
                                </tr>
                            )
                        })    
                        }
                        </tbody>
                    </Table>
                    </div>
                </PageWrapper>                
            </div>
        );
    }
}
 
export default Burgers;