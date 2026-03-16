"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL = "/illinois-counties.json"

const HIGHLIGHTED: Record<string, string> = {
    "17031": "#243650", // Cook County — primary
    "17043": "#4b6384", // DuPage County — secondary
}

const serviceMarkers: { name: string; coordinates: [number, number]; chicago?: boolean }[] = [
    { name: "Chicago",      coordinates: [-87.6298, 41.8781], chicago: true },
    { name: "Naperville",   coordinates: [-88.1535, 41.7508] },
    { name: "Tinley Park",  coordinates: [-87.7937, 41.5731] },
    { name: "Northbrook",   coordinates: [-87.8287, 42.1253] },
    { name: "Schaumburg",   coordinates: [-88.0834, 42.0334] },
    { name: "Wheaton",      coordinates: [-88.1070, 41.8661] },
]

// Exact star from the Chicago flag SVG (commons.wikimedia.org), centered at origin and scaled to marker size
// Original flag path centered at (150,240): M150,180 l11,41 l41,-11 l-30,30 l30,30 l-41,-11 l-11,41 ...
// Normalized to (0,0) and scaled by 0.2 → height ±12, width ±10.4
const CHICAGO_STAR_PATH = "M0,-12 L2.2,-3.8 L10.4,-6 L4.4,0 L10.4,6 L2.2,3.8 L0,12 L-2.2,3.8 L-10.4,6 L-4.4,0 L-10.4,-6 L-2.2,-3.8 Z"
const CHICAGO_RED = "#E4002B" // exact red from the flag SVG

export function ServiceAreaMap() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [-87.95, 41.83], scale: 30000 }}
            width={500}
            height={500}
            className="w-full h-auto"
        >
            <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={{
                                default: {
                                    fill: HIGHLIGHTED[geo.id] ?? "#e2e8f0",
                                    stroke: "#ffffff",
                                    strokeWidth: 0.5,
                                    outline: "none",
                                },
                                hover: {
                                    fill: HIGHLIGHTED[geo.id] ?? "#cbd5e1",
                                    stroke: "#ffffff",
                                    strokeWidth: 0.5,
                                    outline: "none",
                                },
                                pressed: { outline: "none" },
                            }}
                        />
                    ))
                }
            </Geographies>
            {serviceMarkers.map(({ name, coordinates, chicago }) => (
                <Marker key={name} coordinates={coordinates}>
                    {chicago
                        ? <path d={CHICAGO_STAR_PATH} fill={CHICAGO_RED} stroke="#ffffff" strokeWidth={0.5} />
                        : <circle r={5} fill="#ffffff" stroke="#243650" strokeWidth={2} />
                    }
                    <text
                        textAnchor="middle"
                        y={chicago ? -18 : -16}
                        style={{
                            fontFamily: "var(--font-oswald)",
                            fontSize: "20px",
                            fill: "#ffffff",
                            stroke: "#243650",
                            strokeWidth: 3,
                            paintOrder: "stroke",
                            pointerEvents: "none",
                        }}
                    >
                        {name}
                    </text>
                </Marker>
            ))}
        </ComposableMap>
    )
}
