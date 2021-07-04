import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import './TableComponent.css'
import Toggle from "./Toggle/Toggle";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

function createData(check, name, access, members, update,seen) {
  return { check, name, access, members, update,seen };
}
const rows = [
  createData(<AddCircleOutlineOutlinedIcon/>, 'Budget','All Access',
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
    <div className="separator"></div>
    <li>Edit</li>
    <div className="separator"></div>
    <li>Delete</li>
  </ul>
    ,"1 min ago",<Toggle/>),
  createData(<AddCircleOutlineOutlinedIcon/>, 'Bidding',"No Access","-", "1 min ago",<Toggle/>
  ),
  createData(<AddCircleOutlineOutlinedIcon/>, 'Vendor Portal', "Restricted Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
  </ul>
  , "1 min ago",<Toggle/>),
  createData(<AddCircleOutlineOutlinedIcon/>, 'Purchase Order/ Work Order',"Restricted Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
  </ul>
  , "1 min ago", <Toggle/>),
  createData( <AddCircleOutlineOutlinedIcon/>, "Organisational Profile", "All Access",
  <ul className="summary__list">
    <li>View</li>
    <div className="separator"></div>
    <li>Create</li>
    <div className="separator"></div>
    <li>Edit</li>
    <div className="separator"></div>
    <li>Delete</li>
  </ul>
  ,"1 min ago",<Toggle/>),
  createData(<AddCircleOutlineOutlinedIcon/>, 'Permission & Access Control',"No Access","-", "1 min ago", <Toggle/>)
];

function TableComponent() {
  const classes = useStyles();
  return (
    <div style={{marginTop:20}}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{backgroundColor:"#f2f2f2"}}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Department/Role name</TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">Summary</TableCell>
              <TableCell align="center">Last updated</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.check}>
                <TableCell component="th" scope="row">
                  {row.check}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                {/* <TableCell className ={row.fat=="Access Granted" ? "Access__granted" :row.fat=="All Access"?"Access__granted": "Access__denied"} align="left">{row.fat}</TableCell> */}
                <TableCell 
                align="left" 
                className= {`${row.access}`}
                >
                    <h4>{row.access}</h4></TableCell>
                <TableCell align="center">{row.members}</TableCell>
                <TableCell align="center">{row.update}</TableCell>
                <TableCell align="center">{row.seen}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableComponent;
