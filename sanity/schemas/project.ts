import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200
      }
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'slugHeroImage',
      title: 'Slug Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text'
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string'
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'deployedLink',
      title: 'Deployed Link',
      type: 'url'
    }),
    defineField({
      name: 'githubRepo',
      title: 'GitHub Repository',
      type: 'url'
    })
  ]
})
