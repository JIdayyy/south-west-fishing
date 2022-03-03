import React, { ReactNode } from 'react';

type ComponentProps = {
    children: ReactNode;
};

function Body({ children }: ComponentProps): JSX.Element {
    return (
        <div className="w-full  flex flex-col items-center justify-start ">
            {children}
        </div>
    );
}

export default Body;
