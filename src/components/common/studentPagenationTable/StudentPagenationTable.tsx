 import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//mock data
 
interface StudentDataProps {
  data: any;
}
export default function StudentPagenationTable({ data }: StudentDataProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>last_Name</TableCell>
            <TableCell>Student_id</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Roll_no</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow
              key={row.student_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.student_first_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.student_last_name}
              </TableCell>
              <TableCell>{row.student_id}</TableCell>
              <TableCell>{row.batch}</TableCell>
              <TableCell>{row.roll_no}</TableCell>
              <TableCell>{row.year_admission}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
