import { Img, Li } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({id, urlItem,onClick}) {
    return (
        <Li id={id} onClick={onClick}>
  <Img src={urlItem} alt="" />
</Li>
    )
}
