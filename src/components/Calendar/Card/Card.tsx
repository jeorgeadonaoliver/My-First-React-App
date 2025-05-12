import type { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => {

    return (
        <div className="p-6 rounded-4xl bg-neutral-800">
            <div className="flex items-center">
                <div className="flex items-center w-full">
                         <div className="relative w-full">
                            {children}
                         </div>
                </div>
            </div>
        </div>  
    );      

}

export default Card;