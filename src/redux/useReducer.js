import { useDispatch, useSelector } from "react-redux"
import { updateName,updateEmail } from "./reducer.js"

export const useUser=()=>{
    const dispatch=useDispatch();
    const user=useSelector(state=>state.user)
    const setName=(name)=>{
        dispatch(updateName(name))
    }
    const setEmail=(email)=>{
        dispatch(updateEmail(email))
    }
    return {
        user,
        setName,
        setEmail,
      };
}