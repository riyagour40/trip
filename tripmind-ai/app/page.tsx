from fastapi import FastAPI
from pydantic import BaseModel
from gemini_service import generate_trip

app = FastAPI()

class TripRequest(BaseModel):
    destination: str
    budget: str
    duration: str
    style: str

@app.post("/generate-itinerary")
async def generate_itinerary(data: TripRequest):

    prompt = f'''
    Create detailed travel itinerary.

    Destination: {data.destination}
    Budget: {data.budget}
    Duration: {data.duration}
    Style: {data.style}

    Include:
    - Hotels
    - Food
    - Attractions
    - Day-wise plans
    - Budget breakdown
    '''

    result = generate_trip(prompt)

    return {
        "result": result
    }