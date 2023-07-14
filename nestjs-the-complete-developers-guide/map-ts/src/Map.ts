export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapElemId: string) {
    this.googleMap = this.initMap(mapElemId);
  }

  private initMap(id: string) {
    const mapDiv = document.getElementById(id) as HTMLElement;
    const opts: google.maps.MapOptions = {
      zoom: 1,
      minZoom: 1,
      center: { lat: 0, lng: 0 },
      restriction: {
        latLngBounds: { west: -180, north: 85, south: -85, east: 179.999 },
        strictBounds: true,
      },
    };
    return new google.maps.Map(mapDiv, opts);
  }

  public addMarker(mappable: Mappable) {
    let isInfoWindowOpen = false;
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });
    marker.addListener("click", () => {
      if (!isInfoWindowOpen) {
        isInfoWindowOpen = true;
        infoWindow.open(this.googleMap, marker);
      } else {
        infoWindow.close();
        isInfoWindowOpen = false;
      }
    });
  }
}
