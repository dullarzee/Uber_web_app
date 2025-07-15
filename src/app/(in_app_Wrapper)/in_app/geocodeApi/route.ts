import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const long = searchParams.get("long");

    const apiKey = process.env.opencage_api_key;

    try {
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${long}&key=${apiKey}`
        );
        const results = await response.json();
        return Response.json(results, {
            status: 200,
        });
    } catch (error) {
        return error;
    }
}
