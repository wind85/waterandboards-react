import React from 'react';
import ReactDOM from 'react-dom';
import {
  GridList, 
  GridTile
} from 'material-ui/GridList';
import SearchBar from './SearchBar';
import CardWithAvatar from './CardWithAvatar';


// Actual grid
const CustomGridList = () => (
  <div style={gridStyles.root}>
    <GridList cellHeight='auto' cols={1} style={gridStyles.gridList} >
        <SearchBar />
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile>
        <GridTile>
            <CardWithAvatar/>
        </GridTile> 
    </GridList> 
  </div>
)
// end grid style and layout ---------------------------------------


// Grid style and layout 
const gridStyles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    marginTop: 20,
    width: 720,
    height: 1000,
    overflowY: 'auto',
  },
}

export default CustomGridList;