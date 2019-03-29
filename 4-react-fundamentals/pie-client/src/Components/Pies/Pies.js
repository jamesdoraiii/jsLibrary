import React from 'react';
import './Pies.css';
import Pie from './Pie/Pie';


const testData = [
  {
   nameOfPie : 'Apple',
   baseOfPie : 'Delicious Apples',
   crust : 'Pastry',
   timeToBake : '45 Minutes',
   servings : '12',
   rating : '4 Stars'
  },
  {
   nameOfPie: 'Cherry',
   baseOfPie: 'Fruit Filling',
   crust: 'Pastry',
   timeToBake: '30 mins',
   servings: 97,
   rating: '5 stars'
  },
  {
   nameOfPie: 'Pecan',
   baseOfPie: 'Sugary Goodness',
   crust: 'Graham Cracker',
   timeToBake: '40 mins',
   servings: 2,
   rating: '3 stars'
  }
 ];

class Pies extends React.Component{

    render(){
        let pieRows = testData.map(data => {
            return (
                <Pie pie={data}/>
            )
        })

        return(
            <table>
                <thead>
                    <td>Name of Pie</td>
                    <td>Base of Pie</td>
                    <td>Crust</td>
                    <td>Time to Bake</td>
                    <td>Servings</td>
                    <td>Rating</td>
                </thead>
                <tbody>
                    {pieRows}
                </tbody>
            </table>
        )

    }

}

export default Pies;