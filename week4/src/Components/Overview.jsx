import React from "react";
import { MovieOverview } from "./Movie.style";

function Overview({title, overview}) {
    return (
        <MovieOverview>
            <div id="overview_title">{title}</div>
            <div id="overview_overview">{overview.length > 120 ? `${overview.slice(0, 120)} ...`: overview}</div>
        </MovieOverview>
    )
}

export default Overview;