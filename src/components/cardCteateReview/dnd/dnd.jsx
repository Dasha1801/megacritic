import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, Transformation } from 'cloudinary-react';
import styles from './dnd.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DropZone = ({ setImage, value }) => {
  const langEn = useSelector(({ isLangEn }) => isLangEn);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const url = 'https://api.cloudinary.com/v1_1/megacritic/upload';

  useEffect(() => {
    if (!value.length) {
      setUploadedFiles([]);
    }
  }, [value]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach(async (acceptedFile) => {
        const formData = new FormData();
        formData.append('file', acceptedFile);
        formData.append('upload_preset', 'ml_default');
        const res = await fetch(url, {
          method: 'post',
          body: formData,
        });

        const data = await res.json();
        setImage((state) => [...state, data.url]);
        setUploadedFiles((state) => [...state, data.public_id]);
      });
    },
    [setImage, url]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  return (
    <div className={styles.wrapperDnd}>
      {uploadedFiles.length < 3 && (
        <div
          {...getRootProps()}
          className={`${styles.dropZone} ${isDragActive && styles.active}`}
        >
          <input {...getInputProps()} />
          {langEn ? 'Upload' : 'Загрузить'}
        </div>
      )}
      <ul className={styles.imgList}>
        {uploadedFiles.map((file) => {
          return (
            <li key={file} className={styles.image}>
              <Image publicId={file} secure="true" cloudName="megacritic">
                <Transformation
                  width="50"
                  height="50"
                  gravity="face"
                  crop="thumb"
                />
              </Image>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropZone;
