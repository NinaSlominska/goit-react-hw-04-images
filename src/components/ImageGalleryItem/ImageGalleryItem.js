import { Img, Li } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({id, urlItem}) {
    return (
        <Li id={id}>
  <Img src={urlItem} alt="" />
</Li>
    )
}
