import { getPlaiceholder } from 'plaiceholder'
import { IAssetImage } from '@/types/PostTypes'

export const addDataBlurUrl = async (
  references: IAssetImage[],
  images: IAssetImage[]
) => {
  const imgBlurData = await Promise.all(
    images.map(async (image: IAssetImage) => {
      const { base64 } = await getPlaiceholder(image.url)

      return { blurDataUrl: base64 }
    })
  )

  const assetImages = references.map(
    (reference: IAssetImage, index: number) => ({
      ...reference,
      ...imgBlurData[index],
    })
  )

  return assetImages
}
