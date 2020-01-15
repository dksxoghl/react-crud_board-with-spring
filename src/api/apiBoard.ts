import axios from 'axios';
import { Board } from '../modules/boards';

export const getLists = async () => {
  console.log('asdasdasdasdadasd');
  const response = await axios.get(`list/`);
  console.log(response.data);
  return response.data;
};
export const addList = async (data:Board) => {
  const response = await axios.post(`insert?subject=${data.subject}&content=${data.content}&writer=${data.writer}`);
  // console.log(response.data);
  return response.data;
};
export const updateList = async (data:Board,bno:number) => {
  const response = await axios.put(`update/${bno}?subject=${data.subject}&content=${data.content}`);
  // console.log(response.data);
  return response.data;
};
// export const deleteList = async id => {
//   const response = await axios.get(`delete/${id}`)
//   console.log(response.data,'asdasdzxcasd');
//   return response.data;
// };
export const deleteList = async (id:number) => {
  return  await axios.delete(`delete/${id}`);
};