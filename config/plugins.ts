import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  ckeditor: {
    enabled: true,
    config: {
      editor: {
        toolbar: [
          'heading',
          '|',
          'fontFamily',
          'fontSize',
          '|',
          'bold',
          'italic',
          'underline',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'undo',
          'redo',
        ],
        fontFamily: {
          options: [
            'default',
            'Arial, Helvetica, sans-serif',
            'Times New Roman, Times, serif',
            'Inter, sans-serif',
            'Satoshi, sans-serif',
          ],
          supportAllValues: true,
        },
      },
    },
  },
});

export default config;