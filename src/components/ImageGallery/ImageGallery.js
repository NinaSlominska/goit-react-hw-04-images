import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List } from "./ImageGallery.styled"
export function ImageGallery({ images }) {
    return (
        <div>
        <List>
            {images.map(img => <ImageGalleryItem key={img.id} id={img.id} urlItem={img.webformatURL} />)} 
            </List>
            </div>
  )  
}
