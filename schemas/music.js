export default {
  name: 'music',
  title: 'Music',
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
      description: 'Where is the music coming from?',
      type: 'string',
      options: {
        list: ['mp3', 'soundcloud', 'spotify'],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link',
      description: 'If soundcloud or spotify audio, paste the embed audio url here',
      type: 'string'
    },
    {
      name: 'audioFile',
      title: 'Audio File',
      type: 'file',
      description: 'Only upload a file if the source is set to file. Only upload MP3\'s please',
    },
    {
      name: 'audioCoverArt',
      title: 'Cover Image',
      description: 'Only upload a cover image if the source is set to file',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}