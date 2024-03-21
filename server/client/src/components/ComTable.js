import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('עמלת פקיד', "1.2%", "6.0%","0.5%", "3.5%"),
  createData("עמלת פעולה", "2.1%", "1.6%","3.7%", "2.5%"),

];

export default function ComTable() {
  return (
    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 600 }} aria-label="caption table">
      
        <TableHead className='bg-slate-600'>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right" ><span className='text-xl font-bold text-white'>אופצייה א'</span></TableCell>
            <TableCell align="right"><span className='text-xl font-bold text-white'>אופצייה ב'</span></TableCell>
            <TableCell align="right"><span className='text-xl font-bold text-white'>אופצייה ג'</span></TableCell>
            <TableCell align="right"><span className='text-xl font-bold text-white'>אופצייה ד'</span></TableCell>
          </TableRow>
        </TableHead>
        
        
          <TableRow className='bg-slate-200'>
            <TableCell></TableCell>
            <TableCell align="right" > <span className='font-semibold text-lg '> בנק הפועלים </span></TableCell>
            <TableCell align="right"><span className='font-semibold text-lg'> בנק מזרחי </span></TableCell>
            <TableCell align="right"><span className='font-semibold text-lg'> בנק לאומי </span></TableCell>
            <TableCell align="right"><span className='font-semibold text-lg'> בנק אגטוד </span></TableCell>
          </TableRow>
        
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.name} className={index % 2 === 1 ? 'bg-slate-200' : ''}>
              <TableCell component="th" scope="row">
                <span className='text-base font-semibold' > {row.name} </span>
              </TableCell>
              <TableCell align="right"><span className='text-base font-semibold'>{row.calories}</span></TableCell>
              <TableCell align="right"><span className='text-base font-semibold'>{row.fat}</span></TableCell>
              <TableCell align="right"><span className='text-base font-semibold'>{row.carbs}</span></TableCell>
              <TableCell align="right"><span className='text-base font-semibold'>{row.protein}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}