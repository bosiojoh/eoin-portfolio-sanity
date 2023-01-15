export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'source',
      title: 'Source',
      description: 'Where is the video coming from?',
      type: 'string',
      options: {
        list: ['file', 'youtube', 'vimeo'],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      description: 'If youtube or vimeo video, paste the embed video url here',
      type: 'string'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Only upload a file if the source is set to file. Only upload MP4\'s please',
    },
    // {
    //   name: 'video',
    //   title: 'Video',
    //   type: 'file',
    //   options: {
    //     hotspot: true,
    //   },
    //   validation: Rule => Rule.required()
    // },
    // {
    //   name: 'video',
    //   title: 'Video',
    //   type: 'file',
    //   options: {
    //     hotspot: true,
    //   }
    // }
  ]
}