import React from "react";
import { VictoryArea, VictoryChart, VictoryGroup, VictoryLabel, VictoryPolarAxis, VictoryTheme } from "victory-native";
function RadarChart() {
    const characterData = [
        { strength: 1, intelligence: 250, luck: 1, stealth: 40, charisma: 50 },
        { strength: 2, intelligence: 300, luck: 2, stealth: 80, charisma: 90 },
        { strength: 5, intelligence: 225, luck: 3, stealth: 60, charisma: 120 }
    ];


    return (
        <VictoryChart polar
            theme={VictoryTheme.material}
            domain={{ y: [0, 1] }}
        >
            <VictoryGroup 
            colorScale={["gold", "orange", "tomato"]}
            style={{ data: { fillOpacity: 0.2, strokeWidth: 2, lineTension: 0.7 } }}
            >

                {characterData.map((data, i) => {
                    return <VictoryArea key={i} data={characterData} />;
                })}

            </VictoryGroup>

            <VictoryPolarAxis
                labelPlacement="parallel"
                tickFormat={() => ""}
                style={{
                    axis: { stroke: "none" },
                    grid: { stroke: "grey", opacity: 0.5 }
                }}
            />

        </VictoryChart>
    );
}
export default RadarChart;