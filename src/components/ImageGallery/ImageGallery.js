import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List } from "./ImageGallery.styled"
export function ImageGallery({ images,clickImg }) {
    return (
        <div>
        <List>
                {images.map(img => <ImageGalleryItem key={img.id} id={img.id} urlItem={img.webformatURL} onClick={ ()=>clickImg(img.largeImageURL)} />)} 
            </List>
            </div>
  )  
}
