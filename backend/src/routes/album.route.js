import { Router } from "express"

const router = Router()

router.get("/", getAllAlbums)
router.get("/:albumIs", getAlbumById)

export default router