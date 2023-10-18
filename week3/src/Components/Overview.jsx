import React from "react";

function Overview({title, overview}) {
    return (
        <div id="overview">
            <div id="overview_title">{title}</div>
            <div id="overview_overview">{overview.length > 120 ? `${overview.slice(0, 120)} ...`: overview}</div>
        </div>
    )
}

export default Overview