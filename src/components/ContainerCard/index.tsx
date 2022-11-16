import React, { ReactNode } from "react";

import "./styles.scss";

const ContainerCard = ({ children }: { children: ReactNode }) => {

    return (
        <div className="container">
            {children}
        </div>
    )
};

export default ContainerCard;