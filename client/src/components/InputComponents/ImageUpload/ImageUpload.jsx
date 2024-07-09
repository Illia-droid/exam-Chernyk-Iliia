import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

const ImageUpload = (props) => {
  const [field] = useField(props.name);
  const { uploadContainer, inputContainer, imgStyle } = props.classes;
  const handleImage = (e) => {
    const node = window.document.getElementById('imagePreview');
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (!file.type.match(imageType)) {
      e.target.value = '';
    } else {
      props.formikProps.setFieldValue(props.name, file);
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          name={props.name}
          id="offerData"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={handleImage}
        />
        <label htmlFor="offerData">Chose file</label>
      </div>
      <img
        id="imagePreview"
        className={classNames({ [imgStyle]: !!field.value })}
        alt="user"
      />
    </div>
  );
};

export default ImageUpload;
