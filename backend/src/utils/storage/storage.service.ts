import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { v4 as uuid } from 'uuid';
import sharp from 'sharp';
import fs from 'fs';

const config = {
  jpeg: { quality: 80 },
  webp: { quality: 80 },
  png: { compressionLevel: 8 },
};

@Injectable()
export class StorageService {
  async storeImageFile(file: Express.Multer.File, imageSize?: number) {
    this._syncDir(join(__dirname, '..', '..', '..', 'public', 'uploads'));

    const image = sharp(file.buffer);
    const ImageMetaDetails = await image.metadata();
    const fileName = uuid() + '.' + ImageMetaDetails.format;
    await image[ImageMetaDetails.format](config[ImageMetaDetails.format])
      .resize(imageSize || null)
      .toFile(join(__dirname, '..', '..', '..', 'public', 'uploads', fileName));
    return fileName;
  }

  async storeImageFileSm(file: Express.Multer.File) {
    this._syncDir(join(__dirname, '..', '..', '..', 'public', 'uploads'));

    const image = sharp(file.buffer);
    const ImageMetaDetails = await image.metadata();
    const fileName = uuid() + '.' + ImageMetaDetails.format;

    await image[ImageMetaDetails.format](config[ImageMetaDetails.format])
      .resize(300)

      .toFile(join(__dirname, '..', '..', '..', 'public', 'uploads', fileName));
    return fileName;
  }

  async deleteImageFile(fileName: string) {
    try {
      fs.unlinkSync(
        join(__dirname, '..', '..', '..', 'public', 'uploads', fileName),
      );
    } catch (err) {
      console.log(err);
    }
  }

  private _syncDir(dir: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
}
