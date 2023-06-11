import { useContext } from "react";
import { UserContext, TokenContext } from "../index";

function useUserContext(){
  const userCtx = useContext(UserContext);
  const tokenCtx = useContext(TokenContext);
  return [userCtx,tokenCtx];
}

export default useUserContext;