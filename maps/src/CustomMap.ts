interface Mappable {
    name: string,
    location: {
        lat: number,
        lng: number,
    }
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
            lat: 0,
            lng: 0,
    }
        })
    }

    addMarker(mappable: Mappable) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }

        })
    }
}