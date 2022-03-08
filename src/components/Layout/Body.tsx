import React, { ReactNode } from 'react';

type ComponentProps = {
    children: ReactNode;
};

function Body({ children }: ComponentProps): JSX.Element {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start ">
            {children}
        </div>
    );
}

export default Body;
