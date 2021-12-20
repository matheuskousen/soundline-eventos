import { useRouter } from "next/router"
import GalleryPages from "../../../../src/CWorks/GalleryPages"

const Gallery = () => {
	const router = useRouter()
	const { id } = router.query

	return <GalleryPages id={id} />
}
export default Gallery
