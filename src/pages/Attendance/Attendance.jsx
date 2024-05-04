import { useState } from "react";
import { Card, Table, TableBody, TableHead, TableHeaderCell, TableRow, TableCell, Badge } from "@tremor/react";
import attendanceData from "../../data/attendance.json";

const Attendance = () => {
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);

  const isTeacherSelected = (teacherId) => {
    return selectedTeacherIds.includes(teacherId) || selectedTeacherIds.length === 0;
  };

  return (
    <>

    <div className="h-full w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-as-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Attendance Records</h3>
      </header>
      <div className="ie-as-content mt-5">
        <Card shadow={false}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Teacher ID</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Check In</TableHeaderCell>
                <TableHeaderCell>Check Out</TableHeaderCell>
                <TableHeaderCell>Duration</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge text={record.teacher_id} color="primary" />
                  </TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.checkin}</TableCell>
                  <TableCell>{record.checkout}</TableCell>
                  <TableCell>{record.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
    </>
  );
};

export default Attendance;
