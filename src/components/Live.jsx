import React,{ useState} from 'react'

const Live = () => {
    const [location, setLocation] = useState(null);
console.log(navigator.userAgent)
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                    
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error fetching location:", error);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    return (
        <div>
            <div>
                <button
                    onClick={getLocation}>
                    Get My Location
                </button>

                {location && (
                    <div>
                        <p><b>Latitude:</b> {location.lat}</p>
                        <p><b>Longitude:</b> {location.lng}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Live
