import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const address = searchParams.get("searchStr");

    const apiKey = process.env.opencage_api_key;

    const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${apiKey}&limit=10`
    );
    const results = await response.json();

    return Response.json(results, {
        status: 200,
        statusText: "successful retrieval of addresses",
    });
}
