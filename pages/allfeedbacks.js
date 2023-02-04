import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {app, database } from "../firebase-config";
import {collection,addDoc,getDocs} from 'firebase/firestore'
import { useState } from "react";
import { useEffect } from "react";
// const  getFeedbacks = () => {
//   let allFeedbacks = [];
//    fetch("/api/feedback", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((data) => {
//         for(let i of data.data){
//             console.log(i);
//             allFeedbacks.push(i);

//         }
//     });

//     console.log(allFeedbacks.length);
//   return allFeedbacks;
// };

const GetAllFeedbacks = () => {
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const feedbackCollectionRef = collection(database,'feedback');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const getFeedbacks = async () => {
        getDocs(feedbackCollectionRef).then((data) => {
          setAllFeedbacks(data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }));
        });
      };
      getFeedbacks();
    }, 5000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <Card
      sx={{
        width: "80%",
        margin: "0 auto",
        marginTop: "1.5rem",
        padding: "1.5rem",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="right">Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allFeedbacks.map((item) => (
              <TableRow key={item.email}>
                <TableCell component="th" scope="row">
                  {item.email}
                </TableCell>
                <TableCell align="right">{item.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default GetAllFeedbacks;
