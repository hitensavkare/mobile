import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from './DrawerScreen.styles'
import {colors} from '../../theme'
import Statusbar from '../../components/Statusbar'
import HeaderDrawer from './HeaderDrawer'
import { LineChart } from 'react-native-svg-charts'
import { G, Line } from 'react-native-svg'

class ResultAnalysis extends Component{
render(){
   const data = [12, 24, 20, 5, 25, 11, 23, 16, 3, 19 ]
   const CustomGrid = ({ x, y, data, ticks }) => (
            <G>
                {
                    // Horizontal grid
                    ticks.map(tick => (
                        <Line
                            key={ tick }
                            x1={ '0%' }
                            x2={ '100%' }
                            y1={ y(tick) }
                            y2={ y(tick) }
                            stroke={ 'rgba(0,0,0,0.2)' }
                        />
                    ))
                }
                {
                    // Vertical grid
                    data.map((_, index) => (
                        <Line
                            key={ index }
                            y1={ '0%' }
                            y2={ '100%' }
                            x1={ x(index) }
                            x2={ x(index) }
                            stroke={ 'rgba(0,0,0,0.2)' }
                        />
                    ))
                }
            </G>
        )

  return(
    <View style={styles.searchContainer}>
        <Statusbar/>
        <HeaderDrawer onPress={()=>{Actions.pop()}} headerTitle="Result Analysis"/>
        <View>
          <Text style={styles.submitText}>
            Your testwise result analysis in Line chart
          </Text>
        </View>
        <View style={ { height: 200, flexDirection: 'row'} }>
                <LineChart
                    style={ { flex: 1 } }
                    data={ data }
                    svg={ {
                        stroke:colors.appColor,
                    } }
                >
                    <CustomGrid belowChart={true}/>
                </LineChart>
            </View>
    </View>
    )
  }
}
export default ResultAnalysis;
