import { boundsTypes } from "../../../../../components/interactiveMap";

export async function POST(req: Request) {
    const { coordinates }: { coordinates: boundsTypes } = await req.json();

    const api_key = process.env.openrouteservice_api_key;

    try {
        const response = await fetch(
            "https://api.openrouteservice.org/v2/directions/driving-car",
            {
                method: "POST",
                headers: {
                    Authorization: `${api_key}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ coordinates }),
            }
        );

        const result = await response.json();
        return Response.json(result, { status: 200 });
    } catch (error) {
        return error;
    }
}
