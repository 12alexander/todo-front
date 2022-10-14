import axios from "axios"

const CreateTask = async (task)=>{    
    // console.log(import.meta.env.VITE_ENDPOINT);
    const url = `${import.meta.env.VITE_ENDPOINT}/task` ||"http://localhost:3000/task";    
    console.log(url)    
    const response = await axios.post(url,task)
    console.log(response);
}

const GetTask = async ()=>{
    const url = `${import.meta.env.VITE_ENDPOINT}/task` ||"http://localhost:3000/task"; 
    const response = await axios(url);
    return response.data;    
}
export {CreateTask,GetTask};