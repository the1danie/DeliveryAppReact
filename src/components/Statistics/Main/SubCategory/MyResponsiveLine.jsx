import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { rgba } from "polished";

const MyResponsiveLine = ({ data }) => {
    const lineColors = ['#4F46E5', '#76E58E'];

    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Месяцы",
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Количество",
                legendOffset: -40,
                legendPosition: "middle",
                truncateTickAt: 0,
            }}
            enableGridX={false}
            enableGridY={false}
            lineWidth={3}
            colors={lineColors}
            pointColor={{ from: 'color' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor', modifiers: [['darker', 0.3]] }}
            pointLabel={(e) => e.data.x + ": " + e.data.y}
            pointLabelYOffset={-16}
            enableArea={true}
            areaOpacity={0.1}
            areaBlendMode="multiply"
            areaBaselineValue={30}
            enableSlices="x"
            enableTouchCrosshair={true}
            crosshairType="x"
            useMesh={true}
            fill={lineColors.map(color => ({
                match: '*',
                id: `area-${color}`,
                color: rgba(color, 0.2),
            }))}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default MyResponsiveLine;
