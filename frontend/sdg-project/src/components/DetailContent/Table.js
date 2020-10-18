import React from 'react';
import styled from 'styled-components'
import { lighten, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { unsdgs } from '../Filter/const'
import zhishu from '../../static/icons/zhishu.svg';


 function createData (name, useOfProceeds, spending, priorSpends, unSdgs) {
    return { name, useOfProceeds, spending, priorSpends, unSdgs };
  }
// const rows = [
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CF331E', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#992819', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: false }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: true }, [4, 5]),
//   createData('Bond Commercial Paper', 'Water Repair', '$3,084,618', { val: '$ 3,084,614', color: '#CAC8C8', hasIcon: true }, [4, 5]),
// ];

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'PROJECT NAME' },
  { id: 'useOfProceeds', numeric: true, disablePadding: false, label: 'USE OF PROCEEDS' },
  { id: 'spending', numeric: true, disablePadding: false, label: 'FY 18-19 SPENDING' },
  { id: 'priorSpends', numeric: true, disablePadding: false, label: 'PRIOR SPENDS' },
  { id: 'unSdgs', numeric: true, disablePadding: false, label: 'UN SDGs' },
];

function EnhancedTableHead (props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

const NameWrapper = styled.div`
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 20px;
color: #1589EE;
`

const SpendingWrapper = styled.div`
font-size: 17px;
line-height: 20px;
color: #000000;
`

const UseOfProceedsWrapper = styled.div`
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 20px;
color: #080707;
`

function getUdSdgs (arr) {
  if (!arr) return null
  return <>
    {arr.map(sdg => {
      return <img width="36" height="36" style={{ marginRight: '6px' }} src={unsdgs[sdg]} alt='sdg' />
    })}
  </>
}

const PriorSpendsWrapper = styled.div`
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 20px;
color: #080707;
width: 149px;
background: ${props => props.bgColor};
padding: 6px 12px;
box-sizing: border-box;
color: #fff;
text-align: left;
display: flex;
justify-content: space-between;
`

function getPriorSpends (spend) {
  if (!spend) return null

  return <PriorSpendsWrapper bgColor={spend.color}>
    {spend.val}
    <img src={zhishu} alt='sdg' />
  </PriorSpendsWrapper>


}


class EnhancedTable extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      order: 'asc',
      orderBy: 'calories',
      dense: false,
      selected: [],
    }
    this.handleClick = this.handleClick.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  handleClick = (event, name) => {
    const selectedIndex = this.state.selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(this.state.selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.state.selected.slice(1));
    } else if (selectedIndex === this.state.selected.length - 1) {
      newSelected = newSelected.concat(this.state.selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.state.selected.slice(0, selectedIndex),
        this.state.selected.slice(selectedIndex + 1),
      );
    }

    this.setState({selected:newSelected});
  };




  isSelected = (name) => this.state.selected.indexOf(name) !== -1;
  render() {
    const { classes } = this.props;

    var dense = this.state.dense;
    var selected = this.state.selected;
    var order = this.state.order;
    var orderBy = this.state.orderBy;
    var rows = this.props.projects.map((project) => {
        return createData( project.name, 
        project.use_of_proceeds, 3084618 , { val: `$ ${project.prior_spends}`, color: '#CAC8C8', hasIcon: true }, project.sdgs );
    });

     return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={dense ? 'small' : 'medium'}
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
          />
          <TableBody>
            {
              rows.map((row, index) => {
                const isItemSelected = this.isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => this.handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      <NameWrapper>{row.name}</NameWrapper>
                    </TableCell>

                    <TableCell align="right">
                      <UseOfProceedsWrapper>
                        {row.useOfProceeds}
                      </UseOfProceedsWrapper>
                    </TableCell>
                    <TableCell align="right">
                      <SpendingWrapper>
                        {row.spending}
                      </SpendingWrapper>
                    </TableCell>
                    <TableCell align="right">
                      {getPriorSpends(row.priorSpends)}
                    </TableCell>
                    <TableCell align="right">
                      {getUdSdgs(row.unSdgs)}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>

      </Paper>
    </div>
  );
  }
 
}
export default withStyles(useStyles)(EnhancedTable)
