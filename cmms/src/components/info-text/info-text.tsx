import { ReactNode } from "react";

interface Props{
    children: ReactNode;
  }
  export const InfoText = ({children}: Props) =>{
    return(
      <span className="text-slate-500 text-sm">{children}</span>
    )
  }