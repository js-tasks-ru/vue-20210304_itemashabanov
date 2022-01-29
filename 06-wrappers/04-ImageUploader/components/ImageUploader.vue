<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': uploading }"
      :style="{ '--bg-image': imageUrl }"
    >
      <span>{{ imageStatus }}</span>
      <input ref="file" type="file" accept="image/*" class="form-control-file" v-on="listeners" />
    </label>
  </div>
</template>

<script>
import { ImageService } from '../ImageService';

export default {
  name: 'ImageUploader',

  model: {
    prop: 'imageId',
    event: 'change',
  },

  props: {
    imageId: {
      default: null,
    },
  },

  data() {
    return {
      uploading: null,
    };
  },

  computed: {
    imageStatus() {
      if (this.imageId) return 'Удалить изображение';
      else if (this.uploading) return 'Загрузка...';
      else return 'Загрузить изображение';
    },

    imageUrl() {
      return this.imageId && 'url(' + ImageService.getImageURL(this.imageId) + ')';
    },

    listeners() {
      return {
        ...this.$listeners,
        change: () => this.uploadFile(this.$refs.file.files[0]),
        click: (event) => this.deleting(event),
      };
    },
  },

  methods: {
    deleting(event) {
      if(this.imageId) {
        this.$emit('change', null);
        this.$refs.file.value = null;
      } else {
        this.$emit('click', event);
      }
    },

    uploadFile(event) {
      let imgId = null;
      this.uploading = 1;
      ImageService.uploadImage(event)
        .then((res) => (imgId = res.id))
        .then(() => this.$emit('change', imgId));
    },
  },
};
</script>

<style scoped>
.image-uploader .form-control-file {
  opacity: 0;
  height: 0;
}

.image-uploader .image-uploader__preview {
  --bg-image: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-image);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader .image-uploader__preview > span {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader .image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader .image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
