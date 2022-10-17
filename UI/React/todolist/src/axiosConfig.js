import axios from "axios"


export const listTasks = axios.create({
    baseURL:"http://localhost:8080/api/v1"
})